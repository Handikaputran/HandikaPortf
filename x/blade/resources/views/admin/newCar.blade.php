<x-guest-layout>
    <x-form-layout>
        <h1 class="text-2xl font-bold mb-6">Tambah Mobil</h1>
        <div id="carForm">
            <x-text-input name="model" id="model" value="{{ old('model')}}"></x-text-input>
            <x-select-input :name="'jenis'" :title="'Jenis'" :id="'jenis'">
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="MPV">MPV</option>
                <option value="Crossover">Crossover</option>
            </x-select-input>
            <x-select-input :name="'merek'" :title="'Merek'" :id="'jenis'">
                <option value="">Pilih merek</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
            </x-select-input>
            <x-text-input :name="'kursi'" :title="'Jumlah Kursi'" :id="'kursi'" :type="'number'"></x-text-input>
            <x-text-input :name="'Stok'" :title="'Stok Mobil'" :id="'stok'" :type="'number'"></x-text-input>
            <x-file-input :id="'popo'" :title="'Foto'"></x-file-input>
            <div class="btnBox flex justify-end mt-4">
            <x-primary-button>Tambah</x-primary-button>

            </div>
        </div>
    </x-form-layout>
    
</x-guest-layout>
