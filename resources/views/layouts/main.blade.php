<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">

    <title>Artisan Streamed</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <meta name="robots" content="noindex, nofollow">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href='{{ route('artisan-streamed-assets.css', ['v' => \Novius\LaravelArtisanStreamed\Http\Controllers\AssetsController::cssHashName()]) }}'
          rel='stylesheet'/>
</head>
<body class="antialiased bg-gray-200 font-body">
    @if(!empty($backLinkUrl))
        <header data-v-129b9eb4="" class="sticky top-0 z-50 bg-gray-800 px-4">
            <div class="flex items-center h-16 max-w-screen-2xl mx-auto">
                <a href="{{ $backLinkUrl }}"
                   class="flex items-center text-gray-300 hover:text-gray-400 hover:underline transition-colors duration-200"
                >
                    <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.1 23a1 1 0 000-1.41L5.5 17h23.55a1 1 0 000-2H5.53l4.57-4.57A1 1 0 008.68 9l-6.36 6.37a.9.9 0 000 1.27L8.68 23a1 1 0 001.42 0z"
                            class="fill-current"></path>
                    </svg>
                    <span class="ml-2">
                      {{ trans('artisan-streamed::interface.back_button') }}
                    </span>
                </a>
            </div>
        </header>
    @endif

    @yield('content')

    <script src="{{ route('artisan-streamed-assets.js', ['v' => \Novius\LaravelArtisanStreamed\Http\Controllers\AssetsController::jsHashName()]) }}"
            type="module"></script>
</body>
</html>
