<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

function json_error(string $message, int $status = 400): never
{
    http_response_code($status);
    echo json_encode(['ok' => false, 'error' => $message], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function smtp_read($socket): string
{
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (strlen($line) < 4 || $line[3] === ' ') {
            break;
        }
    }

    if ($response === '') {
        throw new RuntimeException('SMTP server returned an empty response.');
    }

    return $response;
}

function smtp_expect($socket, array $codes): string
{
    $response = smtp_read($socket);
    $code = (int) substr($response, 0, 3);

    if (!in_array($code, $codes, true)) {
        throw new RuntimeException(trim($response));
    }

    return $response;
}

function smtp_send($socket, string $command, array $expectedCodes): string
{
    fwrite($socket, $command . "\r\n");
    return smtp_expect($socket, $expectedCodes);
}

function smtp_send_mail(array $config, string $replyToEmail, string $replyToName, string $subject, string $plainBody): void
{
    $transport = strtolower((string) ($config['encryption'] ?? 'ssl'));
    $host = (string) $config['host'];
    $port = (int) $config['port'];
    $username = (string) $config['username'];
    $password = (string) $config['password'];
    $fromAddress = (string) $config['from_address'];
    $fromName = (string) $config['from_name'];
    $toAddress = (string) $config['to_address'];
    $heloHost = (string) ($config['helo_host'] ?? 'velvoix.com');

    $remoteHost = $transport === 'ssl' ? 'ssl://' . $host : $host;
    $socket = @stream_socket_client(
        $remoteHost . ':' . $port,
        $errorNumber,
        $errorString,
        20,
        STREAM_CLIENT_CONNECT
    );

    if (!$socket) {
        throw new RuntimeException('SMTP connection failed: ' . $errorString);
    }

    stream_set_timeout($socket, 20);

    try {
        smtp_expect($socket, [220]);
        smtp_send($socket, 'EHLO ' . $heloHost, [250]);

        if ($transport === 'tls') {
            smtp_send($socket, 'STARTTLS', [220]);
            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('Unable to enable TLS encryption.');
            }
            smtp_send($socket, 'EHLO ' . $heloHost, [250]);
        }

        smtp_send($socket, 'AUTH LOGIN', [334]);
        smtp_send($socket, base64_encode($username), [334]);
        smtp_send($socket, base64_encode($password), [235]);
        smtp_send($socket, 'MAIL FROM:<' . $fromAddress . '>', [250]);
        smtp_send($socket, 'RCPT TO:<' . $toAddress . '>', [250, 251]);
        smtp_send($socket, 'DATA', [354]);

        $safeReplyToName = preg_replace('/[\r\n]+/', ' ', $replyToName) ?: 'Website contact';
        $safeSubject = preg_replace('/[\r\n]+/', ' ', $subject) ?: 'Velvoix website contact';
        $headers = [
            'Date: ' . date(DATE_RFC2822),
            'From: ' . $fromName . ' <' . $fromAddress . '>',
            'Reply-To: ' . $safeReplyToName . ' <' . $replyToEmail . '>',
            'To: <' . $toAddress . '>',
            'Subject: ' . $safeSubject,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
        ];

        $message = implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n.", "\n..", $plainBody) . "\r\n.";
        fwrite($socket, $message . "\r\n");
        smtp_expect($socket, [250]);
        smtp_send($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }
}

function load_mailer_config(): array
{
    $config = [];
    $candidateFiles = [
        dirname(__DIR__) . DIRECTORY_SEPARATOR . 'contact-mailer-config.php',
        __DIR__ . DIRECTORY_SEPARATOR . '.contact-mailer-config.php',
    ];

    foreach ($candidateFiles as $candidate) {
        if (is_file($candidate)) {
            $loaded = require $candidate;
            if (is_array($loaded)) {
                $config = $loaded;
                break;
            }
        }
    }

    $envFallbacks = [
        'host' => getenv('VELVOIX_SMTP_HOST') ?: null,
        'port' => getenv('VELVOIX_SMTP_PORT') ?: null,
        'encryption' => getenv('VELVOIX_SMTP_ENCRYPTION') ?: null,
        'username' => getenv('VELVOIX_SMTP_USERNAME') ?: null,
        'password' => getenv('VELVOIX_SMTP_PASSWORD') ?: null,
        'from_address' => getenv('VELVOIX_SMTP_FROM') ?: null,
        'from_name' => getenv('VELVOIX_SMTP_FROM_NAME') ?: null,
        'to_address' => getenv('VELVOIX_CONTACT_TO') ?: null,
        'helo_host' => getenv('VELVOIX_SMTP_HELO_HOST') ?: null,
    ];

    foreach ($envFallbacks as $key => $value) {
        if ($value !== null && $value !== '') {
            $config[$key] = $value;
        }
    }

    $requiredKeys = ['host', 'port', 'encryption', 'username', 'password', 'from_address', 'from_name', 'to_address'];
    foreach ($requiredKeys as $key) {
        if (empty($config[$key])) {
            throw new RuntimeException('Missing mailer configuration key: ' . $key);
        }
    }

    return $config;
}

$name = trim((string) ($_POST['name'] ?? ''));
$organisation = trim((string) ($_POST['organisation'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$inquiryType = trim((string) ($_POST['inquiryTypeValue'] ?? 'pilot'));
$honeypot = trim((string) ($_POST['companyWebsite'] ?? ''));

if ($honeypot !== '') {
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($name === '' || $organisation === '' || $email === '' || $message === '') {
    json_error('Please complete all required fields.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_error('Please enter a valid email address.', 422);
}

if ($phone !== '' && !preg_match('/^[+()0-9\s-]{6,}$/', $phone)) {
    json_error('Please enter a valid phone number.', 422);
}

$allowedInquiryTypes = [
    'pilot' => 'Pilot exploration',
    'partnership' => 'Partnership or collaboration',
    'general' => 'General enquiry',
];

if (!array_key_exists($inquiryType, $allowedInquiryTypes)) {
    $inquiryType = 'pilot';
}

$subject = 'Velvoix website contact - ' . $allowedInquiryTypes[$inquiryType];
$plainBody = implode("\n", [
    'Velvoix website contact request',
    '==============================',
    'Route: ' . $allowedInquiryTypes[$inquiryType],
    'Name: ' . $name,
    'Organisation: ' . $organisation,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : '-'),
    '',
    'Message:',
    $message,
    '',
    'Submitted at: ' . gmdate('Y-m-d H:i:s') . ' UTC',
    'IP: ' . ((string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown')),
    'User-Agent: ' . ((string) ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown')),
]);

try {
    $config = load_mailer_config();
    smtp_send_mail($config, $email, $name, $subject, $plainBody);
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
} catch (Throwable $exception) {
    error_log('[velvoix contact] ' . $exception->getMessage());
    json_error('We could not send your message right now. Please try again later.', 500);
}
