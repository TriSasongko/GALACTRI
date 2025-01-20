import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="text-center">
      <h1 className="font-bold mb-4">Selamat Datang di Katalog Motor</h1>
      <p className="mb-6">Temukan Motor Impian Anda</p>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari Motor..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-blue-600">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-48 relative">
            <Image
              src="/crf.png"
              alt="Sport Motorcycle"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">Trail</h3>
            <p className="text-gray-600 mb-4">
              Motor trail untuk pengalaman offroad yang menantang
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Lihat Semua
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-48 relative">
            <Image
              src="/vario.png"
              alt="Sport Motorcycle"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">Matic</h3>
            <p className="text-gray-600 mb-4">
              Motor dengan kenyamanan berkendara sehari-hari
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Lihat Semua
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-48 relative">
            <Image
              src="/kws650.png"
              alt="Sport Motorcycle"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">Sport</h3>
            <p className="text-gray-600 mb-4">
              Motor sport dengan performa tinggi dan desain agresif
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Lihat Semua
            </button>
          </div>
        </div>
      </div>

      {/* Banner Promo */}
      <div className="max-w-4xl mx-auto mt-12 mb-8">
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white text-left">
          <h2 className="text-2xl font-bold mb-2">Promo Spesial Bulan Ini!</h2>
          <p className="mb-4">
            Dapatkan penawaran menarik untuk setiap pembelian motor
          </p>
          <ul className="text-white/90 mb-8 space-y-2">
            <li>✓ Cashback hingga 2 juta rupiah</li>
            <li>✓ Gratis service berkala 6 bulan</li>
            <li>✓ Bonus aksesori eksklusif</li>
          </ul>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100">
            Lihat Detail Promo
          </button>
        </div>
      </div>

      {/* Mengapa Memilih Kami */}
      <h2 className="text-3xl font-bold text-center mb-8">Mengapa Memilih Kami?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {/* Card 1 */}
        <div className="bg-white rounded-xl border-2 border-blue-500 p-6">
          <div className="flex justify-center mb-4">
            <span className="text-4xl text-blue-500">✓</span>
          </div>
          <h3 className="font-bold text-xl mb-2">Kualitas Terjamin</h3>
          <p className="text-gray-600">
            Semua motor kami memiliki garansi resmi dan terjamin kualitasnya
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border-2 border-blue-500 p-6">
          <div className="flex justify-center mb-4">
            <span className="text-4xl text-blue-500">⭐</span>
          </div>
          <h3 className="font-bold text-xl mb-2">Harga Terbaik</h3>
          <p className="text-gray-600">
            Dapatkan harga kompetitif dengan cicilan yang ringan
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border-2 border-blue-500 p-6">
          <div className="flex justify-center mb-4">
            <span className="text-4xl text-blue-500">🔧</span>
          </div>
          <h3 className="font-bold text-xl mb-2">Layanan Prima</h3>
          <p className="text-gray-600">
            Gratis servis berkala dan dukungan teknis 24/7
          </p>
        </div>
      </div>
    </div>
  );
}
