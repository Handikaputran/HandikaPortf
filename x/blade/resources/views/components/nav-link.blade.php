@props(['active'])

@php
$classes = ($active ?? false)
            ? 'text-slate-200'
            : 'text-white hover:text-slate-200 duration-200';
@endphp

<a {{ $attributes->merge(['class' => $classes]) }}>
    {{ $slot }}
</a>
