<?php

declare(strict_types=1);

const PREVIEW_TOKEN = '4f6b62d0c9134427bfcf4c6af1685d94';
const PREVIEW_COOKIE = 'velvoix_preview';

$isSecure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';

$cookieOptions = [
    'expires' => time() + (7 * 24 * 60 * 60),
    'path' => '/',
    'secure' => $isSecure,
    'httponly' => true,
    'samesite' => 'Lax',
];

if (isset($_GET['logout'])) {
    setcookie(PREVIEW_COOKIE, '', [
        'expires' => time() - 3600,
        'path' => '/',
        'secure' => $isSecure,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);

    header('Location: /', true, 302);
    exit;
}

$token = isset($_GET['token']) ? (string) $_GET['token'] : '';

if (!hash_equals(PREVIEW_TOKEN, $token)) {
    http_response_code(403);
    header('Content-Type: text/plain; charset=UTF-8');
    echo "Preview access denied.\n";
    exit;
}

setcookie(PREVIEW_COOKIE, '1', $cookieOptions);
header('Location: /', true, 302);
exit;
