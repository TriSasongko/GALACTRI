import type { Metadata } from "next";
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
          <div className="flex gap-4">
            <span>Home</span>
            <span>Produk</span>
            <span>About</span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
