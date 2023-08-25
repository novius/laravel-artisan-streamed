<?php

namespace Novius\LaravelArtisanStreamed\Classes;

use Illuminate\Contracts\View\View;
use Novius\LaravelArtisanStreamed\Contracts\StreamedCommand;

abstract class AbstractSimpleStreamedCommand implements StreamedCommand
{
    public function customFormFieldView(): ?View
    {
        return null;
    }

    public function validationRules(): array
    {
        return [];
    }
}
