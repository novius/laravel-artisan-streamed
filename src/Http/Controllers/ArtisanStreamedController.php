<?php

namespace Novius\LaravelArtisanStreamed\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Novius\LaravelArtisanStreamed\ArtisanStreamed;
use Novius\LaravelArtisanStreamed\Models\LaunchedCommand;

class ArtisanStreamedController
{
    public function index()
    {
        /** @var ArtisanStreamed $artisanStreamed */
        $artisanStreamed = app()->get('artisan-streamed');

        return view('artisan-streamed::pages.index', [
            'commands' => $artisanStreamed->commands(),
            'lastCommandsLaunched' => LaunchedCommand::query()
                ->whereIn('slug', $artisanStreamed->availableCommandsSlugs())
                ->orderByDesc('created_at')
                ->paginate(10),
            'backLinkUrl' => config('artisan-streamed.back_link_interface_url'),
        ]);
    }

    public function launch(Request $request, string $slug)
    {
        /** @var ArtisanStreamed $artisanStreamed */
        $artisanStreamed = app()->get('artisan-streamed');

        $streamedCommand = $artisanStreamed->findCommandBySlugOrFail($slug);

        $validatedData = [];
        if ($streamedCommand->customFormFieldView() !== null) {
            throw_if(empty($streamedCommand->validationRules()), new \RuntimeException('Validation rules are required.'));

            $validatedData = $request->validateWithBag(
                $streamedCommand->slug(),
                $streamedCommand->validationRules()
            );
        }

        $command = $streamedCommand->artisanCommand($validatedData);

        $launchedCommandItem = new LaunchedCommand;
        $launchedCommandItem->slug = $streamedCommand->slug();

        throw_if(! $launchedCommandItem->save());

        $logFileRelativePath = $launchedCommandItem->logFilePath();
        $logStoragePath = Storage::disk('local')->path($launchedCommandItem->logFilePath());

        Storage::disk('local')->put($logFileRelativePath, '');

        $phpBinPath = config('artisan-streamed.php_path', PHP_BINARY);
        $artisanPath = base_path('artisan');
        exec("$phpBinPath $artisanPath $command > $logStoragePath 2>&1 &");

        return redirect()->route('artisan-streamed.show', ['launchedCommand' => $launchedCommandItem]);
    }

    public function show(LaunchedCommand $launchedCommand)
    {
        /** @var ArtisanStreamed $artisanStreamed */
        $artisanStreamed = app()->get('artisan-streamed');

        return view('artisan-streamed::pages.show', [
            'command' => $artisanStreamed->findCommandBySlugOrFail($launchedCommand->slug),
            'launchedCommand' => $launchedCommand,
            'backLinkUrl' => config('artisan-streamed.back_link_interface_url'),
        ]);
    }

    public function fetch(Request $request, LaunchedCommand $launchedCommand)
    {
        $validated = $request->validate([
            'line' => 'required|integer',
        ]);

        $totalLines = $launchedCommand->streamedLogFile()?->numberOfLines();
        if ($totalLines === null) {
            $totalLines = 0;
        }

        if ($totalLines < $validated['line']) {
            return response()->json([
                'content' => null,
                'currentLine' => $validated['line'],
                'totalLines' => $totalLines,
            ]);
        }

        $endLine = $validated['line'] + (int) config('artisan-streamed.stream_chunk_size');
        if ($endLine > $totalLines) {
            $endLine = $totalLines;
        }

        return response()->json([
            'content' => $launchedCommand->streamedLogFile()?->contentBetweenLines(
                $validated['line'],
                $validated['line'] + config('artisan-streamed.stream_chunk_size')
            ),
            'currentLine' => $endLine,
            'totalLines' => $totalLines,
        ]);
    }
}
