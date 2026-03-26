<?php

return [
    'host' => 'mail.spacemail.com',
    'port' => 465,
    'encryption' => 'ssl',
    'username' => 'founder@velvoix.com',
    'password' => 'PUT_REAL_PASSWORD_HERE',
    'from_address' => 'founder@velvoix.com',
    'from_name' => 'Velvoix Website',
    'to_address' => 'info@velvoix.com',
    'route_to_addresses' => [
        'pilot' => 'pilot@velvoix.com',
        'partnership' => 'partners@velvoix.com',
        'general' => 'info@velvoix.com',
    ],
    'helo_host' => 'velvoix.com',
];
