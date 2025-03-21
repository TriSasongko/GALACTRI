import React from 'react';
import { Instagram, Mail, Phone, MapPinCheck } from 'lucide-react';
console.log("Checking Git contribution issue");


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     {/* Hero Section with Video */}
     <div className="relative">
        <video
          src="/vid.mp4" 
          className="w-full h-90 object-cover"
          autoPlay
          loop
          preload="auto" // Memastikan video dimuat sepenuhnya
        />
         
      </div>
      {/* This is a test change */}

       {/* Area Konten */}
       <div className="mt-12 bg-gradient-to-r from-blue-200 to-white p-8 rounded-lg shadow-lg">
  <h2 className="text-4xl font-extrabold text-gray-900">Tentang Catalog Motor</h2>
  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
    <div className="sm:w-1/2">
      <p className="mt-4 text-gray-700 text-justify">
        " Motor adalah platform yang dirancang untuk membantu Anda menemukan berbagai jenis motor
        dengan mudah. Kami menyediakan informasi lengkap tentang spesifikasi, dan harga motor. Dengan antarmuka yang ramah pengguna, Anda dapat dengan cepat membandingkan 
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
            {[
              {
                name: "LUDFI ERIC FERNANDO",
                role: "Backend Developer",
                img: "/eric.jpg",
                instagram: "ludfi_eric.f",
                email: "ericludfi19@gmail.com",
              },
              {
                name: "TRI SASONGKO",
                role: "UI/UX Designer",
                img: "/tritest.jpg",
                instagram: "trssngko",
                email: "trisasongko010@gmail.com",
              },
              {
                name: "GALUH MAHESA PUTRA",
                role: "UI/UX Developer",
                img: "/galuh.jpg",
                instagram: "galuhmahesaaa",
                email: "galuhmahesaputra270103@gmail.com",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 pointer-events-none"></div>
                
                <div className="relative px-6 pt-20 pb-8">
                  <div className="relative -mt-16 mb-6 w-36 h-36 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                    <img
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      src={member.img}
                      alt={member.name}
                    />
                  </div>

                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>

                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>

                    <div className="flex flex-col items-center space-y-2 pt-2">
                      <a
                        href={`https://instagram.com/${member.instagram}`}
                        className="inline-flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-all duration-300 group-hover:translate-x-1"
                      >
                        <Instagram size={16} className="flex-shrink-0" />
                        <span className="text-sm font-medium">{member.instagram}</span>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 group-hover:translate-x-1"
                      >
                        <Mail size={16} className="flex-shrink-0" />
                        <span className="text-sm font-medium">{member.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Vision & Mission Section */}
       <div className="mt-12">
       <h2 className="text-4xl font-extrabold text-gray-900 text-center">Visi & Misi</h2>
       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
       {[ 
            {
              title: "Visi",
              text: "Menjadi platform terkemuka yang memudahkan pencarian dan pembelian motor dengan memberikan informasi yang akurat, terpercaya, dan relevan, serta menawarkan pengalaman berbelanja yang nyaman dan menyenangkan bagi semua pengguna.",
              icon: "🌟"
            },
            {
              title: "Misi",
              text: (
                <div className="text-gray-100">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Menyediakan informasi lengkap, terkini, dan terpercaya tentang berbagai jenis motor, termasuk spesifikasi dan harga.</li>
                    <li>Mempermudah pengguna dalam membandingkan motor melalui antarmuka yang mudah digunakan dan fitur pencarian yang sesuai preferensi.</li>
                    <li>menawarkan fitur fitur filter dan rekomendasi motor yang membantu pengguna memilih sesuai dengan kebutuhan dan anggaran mereka.</li>
                  </ul>
                </div>
              ),
              icon: "🚀"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-blue-500 to-green-400 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-blue-500 flex items-center justify-center rounded-full shadow-md">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <div className="mt-3 text-white">{item.text}</div>
            </div>
          ))}
       </div>
       </div>

      {/* Contact Section */}
      <div className="relative mt-16 py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background Image */}
      <div className="absolute inset-0">
    <img
    src="/mtr.jpeg" 
    alt="Background"
    className="w-full h-full object-cover opacity-80 "  
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-indigo-600/30"></div>  {/* Mengurangi kegelapan gradient */}
    </div>

    <div className="relative text-center space-y-6 mb-12">
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
      Hubungi saya
    </h2>
    <p className="text-gray-100 max-w-2xl mx-auto">
      Kami siap membantu Anda mencapai tujuan digital Anda. Jangan ragu untuk menghubungi kami melalui email atau telepon di bawah ini.
    </p>
  </div>

   <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

     {/* Card Email */}
     <div className="relative bg-white rounded-lg shadow-xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/40 to-blue-300/10 opacity-10"></div>
        <div className="p-8 text-center space-y-4">
          <Mail className="w-10 h-10 mx-auto text-indigo-500" />
          <h3 className="text-xl font-bold text-gray-900">Email</h3>
          <p className="text-gray-600">Kirimkan pesan atau pertanyaan Anda kepada kami.</p>
          <a
            href="mailto:info@example.com"
            className="block mt-4 text-indigo-500 font-medium hover:underline"
          >
          galuhmahesaputra270103@gmail.com
          </a>
        </div>
      </div>

      
      {/* Card Phone */}
      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/40 to-blue-300/10 opacity-10"></div>
        <div className="p-8 text-center space-y-4">
          <Phone className="w-10 h-10 mx-auto text-indigo-500" />
          <h3 className="text-xl font-bold text-gray-900">Telepon</h3>
          <p className="text-gray-600">Hubungi kami langsung untuk diskusi cepat.</p>
          <a
            href="tel:+621234567890"
            className="block mt-4 text-indigo-500 font-medium hover:underline"
          >
            081379200384
          </a>
        </div>
      </div>

         {/* Card Address */}
<div className="relative bg-white rounded-lg shadow-xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/40 to-blue-300/10 opacity-10"></div>
  <div className="p-8 text-center space-y-4">
    <MapPinCheck className="w-10 h-10 mx-auto text-indigo-500" />
    <h3 className="text-xl font-bold text-gray-900">Alamat</h3>
    <p className="text-gray-600">Kunjungi kantor kami untuk diskusi lebih mendalam.</p>
    <p className="mt-4 text-indigo-500 font-medium">Bandar Lampung</p>
  </div>
</div> 
</div>
   </div>    
      
      
<div className="relative mt-12 text-center">
  <a href="https://wa.me/6285832800738?text=Hai%2C%20saya%20ingin%20bertanya" target="_blank">
    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
      Kirim Pesan Sekarang
    </button>
  </a>
</div>
      

          


      </div>

     
     
        

       


        




        </div>
            
  );       
};

export default AboutPage;

        