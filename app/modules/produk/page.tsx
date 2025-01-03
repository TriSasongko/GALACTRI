export default function ProdukPage() {
  const products = [
    {
      id: 1,
      name: "PCX",
      price: "Rp 15.000.000",
      image: "/PCX.png",
    },
    {
      id: 2,
      name: "Kawasaki",
      price: "Rp 18.000.000",
      image: "/kws650.png",
    },
    {
      id: 3,
      name: "Vario",
      price: "Rp 20.000.000",
      image: "/vario.png",
    },
  ];
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Produk
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button>Lihat Detail</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
