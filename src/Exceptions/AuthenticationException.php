<?php

namespace Novius\LaravelArtisanStreamed\Exceptions;

use Illuminate\Auth\AuthenticationException as BaseAuthenticationException;
use Illuminate\Http\Request;

class AuthenticationException extends BaseAuthenticationException
{
    /**
     * Render the exception.
     */
    public function render(Request $request): mixed
    {
        if ($request->expectsJson()) {
            return response()->json([
                'message' => $this->getMessage(),
            ], 401);
        }

        $location = $this->location();
        abort_if(empty($location), 401);

        return redirect()->guest($location);
    }

    /**
     * Determine the location the user should be redirected to.
     */
    protected function location(): ?string
    {
        return config('artisan-streamed.login_url');
    }
}
