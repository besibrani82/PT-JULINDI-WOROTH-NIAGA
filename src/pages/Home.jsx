import React from "react";

export default function Home() {
  return (
    <section className="bg-green-50 min-h-screen flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="Logo PT Julindi" className="w-28 mb-4" />
      <h1 className="text-4xl font-bold text-green-700 text-center">PT JULINDI WOROTH NIAGA</h1>
      <p className="text-gray-700 text-center mt-4 max-w-xl">
        Perusahaan ekspor buah pinang terpercaya dari Jambi, Indonesia. Menyediakan pinang jenis Goli dan Kering dengan kualitas ekspor terbaik ke berbagai negara.
      </p>
    </section>
  );
}
