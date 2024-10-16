<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <x-Cdn></x-Cdn>
        <!-- Scripts -->
        @vite(['resources/js/app.js'])
    </head>
    <body class="font-sans text-gray-900 antialiased">
        <div class="min-h-screen flex flex-col sm:justify-center items-center  {{!Route::is('login') && !Route::is('register') ? "pt-40" : "pt-20"}} bg-gray-100">
            @if (!Route::is('login') && !Route::is('register'))
                @include('layouts.navigation')
            @endif
            <div>
                <a href="/">
                    <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
                </a>
            </div>

            <main class="p-6 max-w-7xl flex flex-col items-center w-full pt-20 ">
                {{ $slot }}
            </main>
        </div>
    </body>
</html>
