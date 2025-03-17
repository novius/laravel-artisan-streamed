<?php

namespace Novius\LaravelArtisanStreamed\Http\Middleware;

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
        /**
         */
        $artisanStreamed = app()->get('artisan-streamed');

        return $artisanStreamed->check($request) ? $next($request) : abort(403);
    }
}
