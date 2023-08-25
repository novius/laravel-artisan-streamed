@extends('artisan-streamed::layouts.main')

@section('content')
    <div class="mx-auto container py-8 px-2">
        <h2 class="font-title font-bold text-2xl mb-4">
            {{ trans('artisan-streamed::interface.available_commands') }}
        </h2>
        @if (!empty($commands))
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-8">
                @foreach($commands as $command)
                    <div class="bg-white px-4 py-3 shadow sm:rounded-lg w-full sm:w">
                        <div class="mb-2 text-lg font-bold text-gray-900">
                            {{ $command->title() }}
                        </div>
                        <form class="space-y-3"
                              method="POST"
                              action="{{ route('artisan-streamed.launch', ['slug' => $command->slug()]) }}"
                        >
                            @csrf

                            @if ($command->customFormFieldView() !== null)
                                {!! $command->customFormFieldView()->with('command', $command)->render() !!}
                            @endif

                            <button type="submit"
                                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {{ $command->ctaTitle() }}
                            </button>
                        </form>
                    </div>
                @endforeach
            </div>
        @else
            <x-artisan-streamed-warning class="mb-8">
                {{ trans('artisan-streamed::interface.no_available_command') }}
            </x-artisan-streamed-warning>
        @endif

        <h2 class="font-title font-bold text-2xl mb-4">
            {{ trans('artisan-streamed::interface.commands_records_history') }}
        </h2>

        @includeWhen($lastCommandsLaunched->isNotEmpty(), 'artisan-streamed::common.records-table')

        @if ($lastCommandsLaunched->isEmpty())
            <x-artisan-streamed-warning class="mb-8">
                {{ trans('artisan-streamed::interface.no_previous_command_launched') }}
            </x-artisan-streamed-warning>
        @endif
    </div>
@endsection
