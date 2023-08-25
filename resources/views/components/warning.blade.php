<div {{ $attributes->merge(['class' => 'border-l-4 border-yellow-400 bg-yellow-50 p-4']) }}>
    <div class="flex">
        <p class="text-sm text-yellow-700">
            {{ $slot }}
        </p>
    </div>
</div>
