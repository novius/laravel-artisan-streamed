<?php

namespace Novius\LaravelArtisanStreamed\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException as BaseAuthenticationException;
use Illuminate\Auth\Middleware\Authenticate as BaseAuthenticationMiddleware;
use Novius\LaravelArtisanStreamed\Exceptions\AuthenticationException as ArtisanStreamedAuthenticationException;

class Authenticate extends BaseAuthenticationMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  ...$guards
     * @return mixed
     *
     * @throws \Illuminate\Auth\AuthenticationException
     */
    public function handle($request, Closure $next, ...$guards)
    {
        try {
            $guard = config('artisan-streamed.guard');

            if (! empty($guard)) {
                $guards[] = $guard;
            }

            return parent::handle($request, $next, ...$guards);
        } catch (BaseAuthenticationException $e) {
            throw new ArtisanStreamedAuthenticationException('Unauthenticated.', $e->guards());
        }
    }
}
