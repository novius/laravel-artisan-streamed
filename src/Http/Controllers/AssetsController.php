<?php

namespace Novius\LaravelArtisanStreamed\Http\Controllers;

use Novius\LaravelArtisanStreamed\Traits\CanPretendToBeAFile;

class AssetsController
{
    use CanPretendToBeAFile;

    public static function jsHashName(): string
    {
        $manifestInfos = static::manifestInfos()['resources/js/main.js'] ?? [];

        throw_if(empty($manifestInfos['file']));

        return md5($manifestInfos['file']);
    }

    public static function cssHashName(): string
    {
        $manifestInfos = static::manifestInfos()['style.css'] ?? [];

        throw_if(empty($manifestInfos['file']));

        return md5($manifestInfos['file']);
    }

    public function js()
    {
        $manifestInfos = static::manifestInfos()['resources/js/main.js'] ?? [];

        throw_if(empty($manifestInfos['file']));

        return $this->pretendResponseIsFile(__DIR__.'/../../../dist/'.$manifestInfos['file']);
    }

    public function css()
    {
        $manifestInfos = static::manifestInfos()['style.css'] ?? [];

        throw_if(empty($manifestInfos['file']));

        return $this->pretendResponseIsFile(
            __DIR__.'/../../../dist/'.$manifestInfos['file'],
            'text/css'
        );
    }

    protected static function manifestInfos(): array
    {
        $manifestPath = __DIR__.'/../../../dist/manifest.json';

        throw_if(! is_file($manifestPath));

        return json_decode(file_get_contents($manifestPath), true);
    }
}
