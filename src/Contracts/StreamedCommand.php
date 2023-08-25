<?php

namespace Novius\LaravelArtisanStreamed\Contracts;

use Illuminate\Contracts\View\View;

interface StreamedCommand
{
    public function slug(): string;

    public function title(): string;

    public function artisanCommand(array $validatedData): string;

    public function ctaTitle(): string;

    public function customFormFieldView(): ?View;

    public function validationRules(): array;
}
