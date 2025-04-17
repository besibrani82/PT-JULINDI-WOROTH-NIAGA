import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">PT JULINDI</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Beranda</Link>
        <Link to="/about" className="hover:underline">Tentang</Link>
        <Link to="/products" className="hover:underline">Produk</Link>
        <Link to="/services" className="hover:underline">Layanan</Link>
        <Link to="/contact" className="hover:underline">Kontak</Link>
      </div>
    </nav>
  );
}
