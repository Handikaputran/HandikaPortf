<x-guest-layout>
    <x-form-layout :action="route('register')">
        @csrf
        <div class="text-3xl mb-8 w-full text-center font-bold">
            Register
        </div>
        <div>
            <x-text-input :id="'username'" class="block mt-1 w-full" :title="__('Username')" :name="'username'" :value="old('username')" required autofocus :autocomplete="'username'" />
            <x-input-error :messages="$errors->get('username')" class="mt-2" />
        </div>
        <div>
            <x-text-input :id="'name'" class="block mt-1 w-full" :title="__('Name')" :name="'name'" :value="old('name')" required autofocus :autocomplete="'name'" />
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>
        <div>
            <x-text-input :id="'email'" class="block mt-1 w-full" :title="__('Email')" :name="'email'" :value="old('email')" required autofocus :autocomplete="'email'" :type="'email'" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <div>
            <x-password-input :id="'password'" :title="__('Password')" :name="'password'" :value="old('password')" required autofocus :autocomplete="'new-password'" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>
        
        <div>
            <x-password-input :id="'password_confirmation'" :title="__('Confirm Password')" :name="'password_confirmation'" :value="old('password_confirmation')" required autofocus :autocomplete="'new-password'" />
            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>
       

        <div class="flex items-center justify-end mt-4">
            <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('login') }}">
                {{ __('Already registered?') }}
            </a>

            <x-primary-button class="ms-4">
                {{ __('Register') }}
            </x-primary-button>
        </div>
    </x-form-layout>
</x-guest-layout>
