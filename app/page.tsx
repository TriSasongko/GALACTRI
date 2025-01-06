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
        <div className="h-48 relative">
          <Image
            src="/crf.png"
            alt="Sport Motorcycle"
            fill
            className="object-cover"
          />
        </div>


        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Sport
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Matic
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Trail
        </button>
      </div>
    </div>
  );
}
