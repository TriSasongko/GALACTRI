import { useState } from "react";

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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Produk
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-xl text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-500">{product.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Lihat Detail
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
