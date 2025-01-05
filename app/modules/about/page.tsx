import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/ggg.jpg"
          alt="Hero Image"
          className="w-full h-90 object-cover"
        />
         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            TENTANG KAMI
          </h1>
        </div>
      </div>

       {/* Area Konten */}
       <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900">Tentang Catalog Motor</h2>
             <p className="mt-4 text-gray-600">
              Catalog Motor adalah platform yang dirancang untuk membantu Anda menemukan berbagai jenis motor dengan mudah. 
              Kami menyediakan informasi lengkap tentang spesifikasi, harga, dan ulasan dari berbagai merek dan model motor. 
              Dengan antarmuka yang ramah pengguna, Anda dapat dengan cepat membandingkan motor yang Anda minati dan membuat keputusan yang tepat sebelum membeli.
            </p>
            </div>
            
            
      </div>
      </div>
      </div>
  );
};

export default AboutPage;

        