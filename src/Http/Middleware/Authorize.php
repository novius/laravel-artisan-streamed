<?php

namespace Novius\LaravelArtisanStreamed\Http\Middleware;

use Novius\LaravelLivewireFileManager\LivewireFileManager;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request):mixed  $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, $next)
    {
        /**
         * @var LivewireFileManager $fileManager
         */
        $fileManager = app()->get('livewire-file-manager');

        return $fileManager->check($request) ? $next($request) : abort(403);
    }
}
