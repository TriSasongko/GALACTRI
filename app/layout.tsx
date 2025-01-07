import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katalog Motor",
  description: "Katalog Motor Sederhana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* navbar */}
        <nav className="bg-blue-500 p-6">
          <div className="flex justify-center gap-4">
            {/* Link navigasi antar halaman*/}
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link
              href="/modules/produk"
              className="text-white hover:text-gray-200"
            >
              Produk
            </Link>
            <Link
              href="/modules/about"
              className="text-white hover:text-gray-200"
            >
              About
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
