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
    <main>
      <h1>Produk</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}></li>
        ))}
      </ul>
    </main>
  );
}
