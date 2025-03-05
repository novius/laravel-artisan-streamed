<?php

namespace Novius\LaravelArtisanStreamed\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Prunable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Novius\LaravelArtisanStreamed\ArtisanStreamed;
use Novius\LaravelArtisanStreamed\Contracts\StreamedCommand;
use Novius\LaravelArtisanStreamed\StreamedLogFile;

/**
 * @property string $id
 * @property string $slug
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class LaunchedCommand extends Model
{
    use HasUuids;
    use Prunable;

    protected $table = 'artisan_streamed_launched_commands';

    protected static function booted(): void
    {
        static::deleted(function (LaunchedCommand $command) {
            $logFilePath = $command->logFilePath();
            if (Storage::disk('local')->exists($logFilePath)) {
                Storage::disk('local')->delete($logFilePath);
            }
        });
    }

    public function streamedLogFile(): ?StreamedLogFile
    {
        $logFilePath = $this->logFilePath();
        if ($logFilePath === null || ! Storage::disk('local')->exists($logFilePath)) {
            return null;
        }

        return new StreamedLogFile(Storage::disk('local')->path($logFilePath));
    }

    public function streamedCommand(): ?StreamedCommand
    {
        /** @var ArtisanStreamed $artisanStreamed */
        $artisanStreamed = app()->get('artisan-streamed');

        return $artisanStreamed->findCommandBySlug($this->slug);
    }

    public function prunable(): Builder
    {
        return static::query()
            ->where(
                'created_at',
                '<=',
                now()->subDays(config('artisan-streamed.records_retention_in_days', 30))
            );
    }

    public function logFilePath(): ?string
    {
        /** @var ArtisanStreamed $artisanStreamed */
        $artisanStreamed = app()->get('artisan-streamed');

        $streamedCommand = $this->streamedCommand();
        if (empty($streamedCommand) || empty($this->id)) {
            return null;
        }

        return sprintf(
            '%s/%s/%s.txt',
            $artisanStreamed->logFilesPathPrefix(),
            $streamedCommand->slug(),
            $this->id
        );
    }
}
