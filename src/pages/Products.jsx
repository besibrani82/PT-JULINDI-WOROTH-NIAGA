import React from "react";

export default function Products() {
  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Produk Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold text-green-600">Buah Pinang Goli</h3>
          <p className="text-gray-600">Pinang berukuran besar dengan kadar air rendah, cocok untuk kebutuhan ekspor berkualitas tinggi.</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold text-green-600">Buah Pinang Kering</h3>
          <p className="text-gray-600">Pinang kering dengan proses pengeringan alami dan mesin, ideal untuk pengolahan industri.</p>
        </div>
      </div>
    </section>
  );
}
