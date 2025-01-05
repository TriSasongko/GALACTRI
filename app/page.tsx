export default function Home() {
  return (
    <div className="text-center">
      <h1 className="font-bold mb-4">Selamat Datang di Katalog Motor</h1>
      <p className="mb-6">Temukan Motor Impian Anda</p>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari Motor..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2"/>
      </div>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Sport</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Matic</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Trail</button>
      </div>

    </div>
    
  );
}
