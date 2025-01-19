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
        <div className="mt-12 py-16 bg-gradient-to-b from-white to-blue-200">
        <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Tim Kami
        </h2>
       <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        <p className="text-grey-600 max-w-2xl mx-auto">
      Bersama-sama kami berkomitmen untuk memberikan solusi terbaik bagi setiap kebutuhan digital Anda.
      </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
         {/* Team Member */}
         {[
        {
          name: "LUDFI ERIC FERNANDO",
          role: "Backend Developer",
          img: "/eric.jpg",
          instagram: "@ludfi_eric.f",
          email: "ericludfi19@gmail.com",
        },
        {
          name: "TRI SASONGKO",
          role: "UI/UX Designer",
          img: "/tritest.jpg",
          instagram: "@trssngko",
          email: "trisasongko010@gmail.com",
        },
        {
          name: "GALUH MAHESA PUTRA",
          role: "UI/UX Developer",
          img: "/galuh.jpg",
          instagram: "@galuhmahesaaa",
          email: "galuhmahesaputra270103@gmail.com",
        },
      ].map((member, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl shadow-lg transition-all 
          duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
        >
          {/* Decorative Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-500/10
           to-indigo-500/10 pointer-events-none"></div>
           {/* Content Container */}
           <div className="relative px-6 pt-20 pb-8">
             {/* Profile Image */}
             <div className="relative -mt-16 mb-6 w-36 h-36 mx-auto rounded-full overflow-hidden 
             ring-4 ring-white shadow-xl">
              <img
                className="w-full h-full object-cover transform group-hover:scale-110 
                transition-transform duration-500"
                src={member.img}
                alt={member.name}
              />
            </div>
            {/* Text Content */}
            <div className="text-center space-y-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 
              transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium">{member.role}</p>

        </div>
        </div>  
        </div>

      </div>
      </div>


        </div>


        




        </div>
            
  );       
};

export default AboutPage;

        