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
       <div className="mt-12 bg-gradient-to-r from-blue-200 to-white p-8 rounded-lg shadow-lg">
  <h2 className="text-4xl font-extrabold text-gray-900">Tentang Catalog Motor</h2>
  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
    <div className="sm:w-1/2">
      <p className="mt-4 text-gray-700 text-justify">
        "Catalog Motor adalah platform yang dirancang untuk membantu Anda menemukan berbagai jenis motor
        dengan mudah. Kami menyediakan informasi lengkap tentang spesifikasi, harga, dan ulasan dari berbagai 
        merek dan model motor. Dengan antarmuka yang ramah pengguna, Anda dapat dengan cepat membandingkan 
        motor yang Anda minati dan membuat keputusan yang tepat sebelum membeli. Selain itu, kami juga 
        menawarkan berbagai fitur canggih seperti pencarian berdasarkan preferensi pribadi, filter berdasarkan 
        jenis motor, dan rekomendasi motor terbaik sesuai dengan anggaran Anda. Catalog Motor selalu diperbarui 
        dengan informasi terbaru, memastikan Anda mendapatkan data terkini tentang motor pilihan Anda.
        Kami berkomitmen untuk memberikan pengalaman belanja yang aman, nyaman, dan menyenangkan bagi
        setiap pengunjung yang mencari motor impian mereka."
      </p>
      </div>
      <div className="sm:w-1/3 mt-6 sm:mt-0 group relative">
      <img 
        src="/pp.jpg" 
        alt="Motor" 
        className="w-full h-auto object-cover rounded-lg shadow-xl
         group-hover:opacity-80 transition-opacity duration-300" 
      />
       {/* overlay */}
       <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       <p>Motor Impian Anda!</p>
        </div>
        </div>
        </div>
        </div>

        {/* Team Section */}
        <div className="mt-12 space-y-12">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center">Tim Kami</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {/* Team Member */}
              {[{
                name: "LUDFI ERIC FERNANDO",
                img: "https://via.placeholder.com/150"
              }, {
                name: "TRI SASONGKO",
                img: "/"
              }, {
                name: "GALUH MAHESA PUTRA",
                img: "https://via.placeholder.com/150"
              }].map((member, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-t from-gray-100 to-white p-6 rounded-lg shadow-lg 
                  border-2 border-blue-500 transition transform hover:scale-105 hover:shadow-2xl">
                  <img
                    className="w-32 h-32 mx-auto rounded-lg group-hover:ring-4 group-hover:ring-blue-400"
                    src={member.img}
                    alt={member.name}
                  />
                   <h1 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-indigo-400 text-center tracking-wide uppercase">
                    {member.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>

           
            </div>
            
  );       
};

export default AboutPage;

        