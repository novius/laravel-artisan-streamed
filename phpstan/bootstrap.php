<?php

use Illuminate\Contracts\Console\Kernel;
use Illuminate\Foundation\Application;
use Novius\LaravelArtisanStreamed\ArtisanStreamedServiceProvider;

$app = Application::configure(basePath: __DIR__)
    ->withProviders([ArtisanStreamedServiceProvider::class])
    ->create();

$app->useBootstrapPath(__DIR__.'/bootstrap')
    ->make(Kernel::class)
    ->bootstrap();
