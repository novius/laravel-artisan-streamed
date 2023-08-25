<?php

namespace Novius\LaravelArtisanStreamed;

use Illuminate\Foundation\Application;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Illuminate\View\Compilers\BladeCompiler;
use Novius\LaravelArtisanStreamed\Http\Controllers\AssetsController;

class ArtisanStreamedServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->registerPublishableFiles();
        $this->registerAssetsRoutes();
        $this->registerRoutes();
        $this->registerBladeComponents();

        $this->loadViewsFrom(
            __DIR__.'/../resources/views',
            'artisan-streamed'
        );

        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        $this->loadTranslationsFrom(__DIR__.'/../lang', 'artisan-streamed');
    }

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/artisan-streamed.php',
            'artisan-streamed'
        );

        $this->app->singleton(ArtisanStreamed::class, function (Application $app) {
            return new ArtisanStreamed($app->get('config')->get('artisan-streamed', []));
        });

        $this->app->alias(ArtisanStreamed::class, 'artisan-streamed');
    }

    protected function registerRoutes(): void
    {
        Route::group([
            'middleware' => config('artisan-streamed.middleware', []),
            'as' => 'artisan-streamed.',
            'prefix' => config('artisan-streamed.path', '/artisan-streamed'),
        ], function () {
            $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        });
    }

    protected function registerPublishableFiles(): void
    {
        $this->publishes([
            __DIR__.'/../database/migrations' => database_path('migrations'),
        ], 'migrations');

        $this->publishes([
            __DIR__.'/../config/artisan-streamed.php' => config_path('/artisan-streamed.php'),
        ], 'config');

        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views/vendor/laravel-artisan-streamed'),
        ], 'views');

        $this->publishes([
            __DIR__.'/../lang' => $this->app->langPath('vendor/laravel-artisan-streamed'),
        ], 'lang');
    }

    protected function registerAssetsRoutes(): void
    {
        Route::group([
            'middleware' => config('artisan-streamed.middleware', []),
            'as' => 'artisan-streamed-assets.',
            'prefix' => 'artisan-streamed-assets',
        ], function (Router $router) {
            $router->get('/artisan-streamed-assets/js/app.js', [AssetsController::class, 'js'])->name('js');
            $router->get('/artisan-streamed-assets/css/app.css', [AssetsController::class, 'css'])->name('css');
        });
    }

    protected function registerBladeComponents(): void
    {
        $this->callAfterResolving(BladeCompiler::class, function () {
            Blade::component('artisan-streamed::components.warning', 'artisan-streamed-warning');
            Blade::component('artisan-streamed::components.forms.input', 'artisan-streamed-form-input');
            Blade::component('artisan-streamed::components.forms.field-error', 'artisan-streamed-form-field-error');
        });
    }
}
