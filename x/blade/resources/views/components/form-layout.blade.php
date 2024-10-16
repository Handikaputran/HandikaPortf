@props(['action'=>'', "method"=>"POST", "file"=>false])
<form {{!! $attributes->merge(['action'=>$action,'method'=>$method])  !!}} {{$file ? "enctype='multypart/formdata'" : ""}}  class="bg-gradient-to-r from-indigo-200 to-purple-300 p-8 rounded-lg shadow-md w-full max-w-96">
    {{$slot}}
</form>