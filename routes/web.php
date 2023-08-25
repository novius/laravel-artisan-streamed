<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\Novius\LaravelArtisanStreamed\Http\Controllers\ArtisanStreamedController::class, 'index'])
    ->name('index');

Route::get('/show/{launchedCommand}', [\Novius\LaravelArtisanStreamed\Http\Controllers\ArtisanStreamedController::class, 'show'])
    ->name('show');

Route::post('/fetch/{launchedCommand}', [\Novius\LaravelArtisanStreamed\Http\Controllers\ArtisanStreamedController::class, 'fetch'])
    ->name('fetch');

Route::post('/launch/{slug}', [\Novius\LaravelArtisanStreamed\Http\Controllers\ArtisanStreamedController::class, 'launch'])
    ->name('launch');
