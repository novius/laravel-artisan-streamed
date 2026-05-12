<?php

use Illuminate\Support\Facades\Route;
use Novius\LaravelArtisanStreamed\Http\Controllers\ArtisanStreamedController;

Route::get('/', [ArtisanStreamedController::class, 'index'])
    ->name('index');

Route::get('/show/{launchedCommand}', [ArtisanStreamedController::class, 'show'])
    ->name('show');

Route::post('/fetch/{launchedCommand}', [ArtisanStreamedController::class, 'fetch'])
    ->name('fetch');

Route::post('/launch/{slug}', [ArtisanStreamedController::class, 'launch'])
    ->name('launch');
