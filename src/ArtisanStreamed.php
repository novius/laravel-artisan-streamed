<?php

namespace Novius\LaravelArtisanStreamed;

use Novius\LaravelArtisanStreamed\Contracts\StreamedCommand;

class ArtisanStreamed
{
    protected ?\Closure $authUsing = null;

    protected array $config;

    public function __construct(array $config)
    {
        $this->config = $config;
    }

    public function commands(): array
    {
        return collect($this->config['commands'])->filter(function ($class) {
            return class_exists($class) && in_array(StreamedCommand::class, class_implements($class), true);
        })->map(function ($class) {
            return new $class;
        })->all();
    }

    public function availableCommandsSlugs(): array
    {
        return collect($this->commands())->map(function ($value) {
            return $value->slug();
        })->unique()->all();
    }

    public function findCommandBySlug(string $slug): ?StreamedCommand
    {
        return collect($this->commands())->first(function ($value) use ($slug) {
            return $value->slug() === $slug;
        });
    }

    public function findCommandBySlugOrFail(string $slug): StreamedCommand
    {
        $command = $this->findCommandBySlug($slug);

        abort_if(is_null($command), 404);

        return $command;
    }

    public function logFilesPathPrefix(): string
    {
        return trim(
            config('artisan-streamed.log_files_path_prefix', 'artisan-streamed'),
            DIRECTORY_SEPARATOR
        );
    }

    /**
     * Register the custom authentication callback.
     */
    public function auth(\Closure $callback): void
    {
        $this->authUsing = $callback;
    }

    /**
     * Determine if the given request can access the artisan streamed interface.
     */
    public function check($request): bool
    {
        return ($this->authUsing ?: function () {
            return true;
        })($request);
    }
}
