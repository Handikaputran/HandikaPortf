@props(['disabled' => false, "title"=>"", "id"=>"id", "name"=>"name", "type"=>"text", "autocomplete"=>''])

<div class="mt-3">

  @if ($title != '')
  <x-input-label>{{$title}} :</x-input-label>
  @endif
  <input{{ $disabled ? 'disabled' : '' }}  {!! $attributes->merge(['class' => 'h-10 mt-2 bg-white  border focus:ring-0 focus:outline-none active:ring-0 active:ring-0 p-2 w-full ', 'name'=>$name, "type"=>$type, "id"=>$id, "autocomplete"=>$autocomplete]) !!}>
</div>
