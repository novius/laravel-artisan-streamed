# Laravel Artisan Streamed

This package gives an interface to launch custom artisan commands and watch their outputs.

## Requirements

* PHP >= 8.2
* Laravel Framework >= 10.0
* 
> **NOTE**: These instructions are for Laravel >= 10.0 and PHP >= 8.2 If you are using prior version, please
> see the [previous version's docs](https://github.com/novius/laravel-artisan-streamed/tree/1.x).

### Configuration

Some options that you can override are available.

```sh
php artisan vendor:publish --provider="Novius\LaravelArtisanStreamed\ArtisanStreamedServiceProvider" --tag="config"
```

## Edit default templates

Run:

```sh
php artisan vendor:publish --provider="Novius\LaravelArtisanStreamed\ArtisanStreamedServiceProvider" --tag="views"
```

## Prune old records

You can config database record retention in the app config file. 

By default, app is configured to keep records during 30 days.

```php
// App\Console\Kernel.php

protected function schedule(Schedule $schedule): void
{
    $schedule->command('model:prune', [
        '--model' => [Novius\LaravelArtisanStreamed\Models\LaunchedCommand::class],
    ])->daily();
}
```

Manually command : 

```shell
php artisan model:prune --model="Novius\\LaravelArtisanStreamed\\Models\\LaunchedCommand"
```

## Lint

Run php-cs with:

```sh
composer run-script lint
```

## Contributing

Contributions are welcome!
Leave an issue on Github, or create a Pull Request.


## Licence

This package is under [GNU Affero General Public License v3](http://www.gnu.org/licenses/agpl-3.0.html) or (at your option) any later version.
