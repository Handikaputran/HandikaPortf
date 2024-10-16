<x-app-layout>
    <div class="bg-cover bg-center h-64 w-screen" style="background-image: url('https://via.placeholder.com/1500x400');">
        <div class="bg-black bg-opacity-50 h-full flex justify-center items-center">
            <h1 class="text-white text-4xl font-bold">Penyewaan Mobil Terbaik</h1>
        </div>
    </div>

    <!-- List Mobil -->
    <div class="max-w-7xl mx-auto p-4 mt-6">
        <h2 class="text-2xl font-bold mb-4">Daftar Mobil Tersedia</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <x-card-car></x-card-car>
        </div>
    </div>
</x-app-layout>