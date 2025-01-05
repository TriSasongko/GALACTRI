export default function Home() {
  return (
    <div className="text-center">
      <h1 className="font-bold mb-4">Selamat Datang di Katalog Motor</h1>
      <p className="mb-6">Temukan Motor Impian Anda</p>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-6 py-2">Sport</button>
        <button className="bg-blue-500 text-white px-6 py-2">Matic</button>
        <button className="bg-blue-500 text-white px-6 py-2">Trail</button>
      </div>

    </div>
    
  );
}
