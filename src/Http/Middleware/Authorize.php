<?php

namespace Novius\LaravelArtisanStreamed\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  Request  $request
     * @param  \Closure(Request):mixed  $next
     * @return Response
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
