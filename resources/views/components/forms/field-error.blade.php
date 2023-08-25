@error($field, $bag)
    <div {{ $attributes->merge(['class' => 'text-red-500 text-sm']) }} }}>
        @if ($slot->isEmpty())
            {{ $message }}
        @else
            {{ $slot }}
        @endif
    </div>
@enderror
