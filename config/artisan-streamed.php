<?php

return [
    'path' => '/artisan-streamed',

    'guard' => env('ARTISAN_STREAMED_GUARD'),

    'middleware' => [
        'web',
        \Novius\LaravelArtisanStreamed\Http\Middleware\Authenticate::class,
        \Novius\LaravelArtisanStreamed\Http\Middleware\Authorize::class,
    ],

    'login_url' => env('ARTISAN_STREAMED_LOGIN_URL'),

    'commands' => [],

    'php_path' => env('ARTISAN_STREAMED_PHP_BIN_PATH'),

    'stream_chunk_size' => env('ARTISAN_STREAMED_CHUNK_SIZE', 5000),

    'log_files_path_prefix' => env('ARTISAN_STREAMED_LOG_FILES_PATH_PREFIX', 'artisan-streamed'),

    'records_retention_in_days' => env('ARTISAN_STREAMED_RECORDS_RETENTION_IN_DAYS', 30),

    'back_link_interface_url' => env('ARTISAN_STREAMED_BACK_LINK_URL'),
];
