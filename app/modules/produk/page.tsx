"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface Specification {
  label: string;
  value: string;
}
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  specifications: Specification[];
}

export default function ProdukPage() {
  const products = [
    {
      id: 1,
      name: "PCX",
      price: "Rp 15.000.000",
      image: "/PCX.png",
      category: "matic",
    },
    {
      id: 2,
      name: "Kawasaki",
      price: "Rp 18.000.000",
      image: "/kws650.png",
      category: "sport",
    },
    {
      id: 3,
      name: "Vario",
      price: "Rp 20.000.000",
      image: "/vario.png",
      category: "matic",
    },
  ];
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "specifications">(
    "description"
  );

  // Mengambil kategori dari URL
  useEffect(() => {
    // Logika untuk mengambil parameter URL
    const categoryFromUrl = searchParams.get("category"); // Mengambil kategori dari URL
    const searchFromUrl = searchParams.get("search"); // Mengambil kata kunci pencarian dari URL

    // Menyimpan kategori ke state
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl.toLowerCase());
    }
    // Menyimpan kata kunci pencarian ke state
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = () => {
    router.push(`?search=${searchQuery}&category=${selectedCategory}`);
  };

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab("description");
    setIsModalOpen(true);
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Produk
      </h1>

      <div className="mb-6 flex items-center">
        <span className="text-gray-600 mr-2">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari produk..."
          className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      {/* Filter kategori */}
      <div className="mb-6 flex justify-center gap-4">
        {[
          { label: "Semua", value: "all" },
          { label: "Matic", value: "matic" },
          { label: "Trail", value: "trail" },
          { label: "Sport", value: "sport" },
        ].map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-4 py-2 rounded-lg border transition-colors shadow-sm ${
              selectedCategory === category.value
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          ))
        ) : (
          <li className="col-span-3 text-center text-gray-600">
            Produk tidak ditemukan.
          </li>
        )}
      </ul>
    </main>
  );
}
