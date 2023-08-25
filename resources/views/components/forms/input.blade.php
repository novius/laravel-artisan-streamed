@props([
    'label' => null,
    'name',
    'type' => 'text',
    'required' => false,
    'initialValue' => '',
])

@php
    $uniqueId = uniqid('', true);
@endphp

<div class="sm:col-span-4">
    @if (!empty($label))
        <label for="{{ $uniqueId }}" class="block text-sm font-medium leading-6 text-gray-900">
            {{ $label }}
        </label>
    @endif
    <div class="mt-1">
        <input id="{{ $uniqueId }}"
               name="{{ $name }}"
               type="{{ $type }}"
               {{ $required ? 'required' : '' }}
               value="{{ old($name, $initialValue) }}"
               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    </div>
</div>
