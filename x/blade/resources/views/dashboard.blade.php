<x-app-layout>
  <div class="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Dashboard Penyewaan Mobil</h2>

      <!-- Section Permintaan Pengajuan Rental -->
      <div class="mb-8">
          <h3 class="text-xl font-semibold text-indigo-600 mb-4">Permintaan Pengajuan Rental</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="bg-blue-100 p-4 rounded-lg shadow">
                  <h4 class="text-lg font-semibold text-gray-700">Menunggu</h4>
                  <p class="text-2xl font-bold text-blue-600">10</p>
              </div>
              <div class="bg-green-100 p-4 rounded-lg shadow">
                  <h4 class="text-lg font-semibold text-gray-700">Disetujui</h4>
                  <p class="text-2xl font-bold text-green-600">5</p>
              </div>
              <div class="bg-red-100 p-4 rounded-lg shadow">
                  <h4 class="text-lg font-semibold text-gray-700">Ditolak</h4>
                  <p class="text-2xl font-bold text-red-600">2</p>
              </div>
              <div class="bg-yellow-100 p-4 rounded-lg shadow">
                  <h4 class="text-lg font-semibold text-gray-700">Selesai</h4>
                  <p class="text-2xl font-bold text-yellow-600">8</p>
              </div>
          </div>
      </div>

      <!-- Section Mobil Favorit -->
      <div class="mb-8">
          <h3 class="text-xl font-semibold text-indigo-600 mb-4">Mobil Favorit</h3>
          <ul class="list-disc list-inside">
              <li class="text-gray-700">Toyota Avanza</li>
              <li class="text-gray-700">Honda Brio</li>
              <li class="text-gray-700">Mitsubishi Xpander</li>
          </ul>
      </div>

      <!-- Section Mobil Dalam Peminjaman -->
      <div class="mb-8">
          <h3 class="text-xl font-semibold text-indigo-600 mb-4">Mobil Dalam Peminjaman</h3>
          <ul class="list-disc list-inside">
              <li class="text-gray-700">Honda Jazz - Disewa hingga 12 Oktober</li>
              <li class="text-gray-700">Suzuki Ertiga - Disewa hingga 15 Oktober</li>
          </ul>
      </div>

      <!-- Tombol Tambah Mobil Rentalan -->
      @if (Auth::user()->role == "admin")
          <div class="mb-8">
          <a href="{{route('newCar')}}" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg">
              Tambah Mobil Rentalan
          </a>
      </div>
      @endif
    
  </div>
</x-app-layout>
