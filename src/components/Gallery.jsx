import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';

// --- DATA GAMBAR (Berdasarkan Folder Anda) ---
// Saya bagi menjadi beberapa bagian agar sesuai desain referensi

// 1. Gambar untuk Header (5 Foto Utama - Arc Display)
const headerImages = [
  "images/casing.jpg",   // Kiri Luar
  "images/sausage.jpg",  // Kiri Dalam
  "images/sausage.jpg",  // TENGAH (UTAMA) - Ganti dengan foto Installation 830+226 yang paling bagus
  "images/casing.jpg",   // Kanan Dalam
  "images/sausage.jpg",  // Kanan Luar
];

// 2. Kategori Proyek (Bagian Gelap)
const projectCategories = [
  {
    title: "Mesin & Instalasi",
    subtitle: "Mauting & Installation 830 + 226",
    image: "images/sausage.jpg", // Ganti dengan foto folder Mauting/Installation
    desc: "Pemasangan presisi tinggi untuk sistem pengolahan daging modern."
  },
  {
    title: "Casing Trials",
    subtitle: "Uji Coba Produksi",
    image: "images/casing.jpg", // Ganti dengan foto folder Casing trial
    desc: "Pengujian kualitas casing kolagen langsung pada lini produksi."
  },
  {
    title: "Maintenance",
    subtitle: "612 Overhaul",
    image: "images/sausage.jpg", // Ganti dengan foto folder 612 overhaul
    desc: "Peremajaan total mesin untuk mengembalikan performa maksimal."
  }
];

const Gallery = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* ================= SECTION 1: HERO HEADER (ARC DISPLAY) ================= */}
      <section className="pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          
          {/* Judul Besar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              PRECISION IN EVERY <br/> <span className="text-blue-900">INSTALLATION</span>
            </h1>
            <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">
              Colink Sigma • Engineering Gallery
            </p>
          </motion.div>

          {/* 5-Image Arc Layout (Meniru desain referensi) */}
          <div className="flex justify-center items-center gap-2 md:gap-4 h-[300px] md:h-[400px]">
             {/* Foto 1 (Kiri Luar) */}
             <div className="hidden md:block w-32 h-48 md:h-64 rounded-lg overflow-hidden opacity-60 transform scale-90">
               <img src={headerImages[0]} alt="Gallery 1" className="w-full h-full object-cover" />
             </div>
             
             {/* Foto 2 (Kiri Dalam) */}
             <div className="w-1/4 md:w-40 h-56 md:h-80 rounded-lg overflow-hidden opacity-80 transform scale-95 shadow-lg">
               <img src={headerImages[1]} alt="Gallery 2" className="w-full h-full object-cover" />
             </div>

             {/* Foto 3 (TENGAH - TERBESAR) */}
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="w-1/2 md:w-64 h-72 md:h-96 rounded-xl overflow-hidden z-10 shadow-2xl border-4 border-white"
             >
               <img src={headerImages[2]} alt="Main Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
               
               {/* Label di tengah foto (seperti referensi 'Hall of Frame') */}
               <div className="absolute bottom-6 left-6 text-left">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm inline-block">
                    <p className="font-bold text-gray-900 text-sm">Featured Project</p>
                    <p className="text-xs text-gray-500">Installation 2025</p>
                  </div>
               </div>
             </motion.div>

             {/* Foto 4 (Kanan Dalam) */}
             <div className="w-1/4 md:w-40 h-56 md:h-80 rounded-lg overflow-hidden opacity-80 transform scale-95 shadow-lg">
               <img src={headerImages[3]} alt="Gallery 4" className="w-full h-full object-cover" />
             </div>

             {/* Foto 5 (Kanan Luar) */}
             <div className="hidden md:block w-32 h-48 md:h-64 rounded-lg overflow-hidden opacity-60 transform scale-90">
               <img src={headerImages[4]} alt="Gallery 5" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Intro Text Bawah Foto */}
          <div className="mt-16 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed">
              "Step into a realm of technical excellence, where our gallery showcases the <span className="font-bold text-blue-900">extraordinary precision</span> of installations and machine overhauls from across Indonesia."
            </p>
            <div className="mt-8">
               <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition flex items-center mx-auto gap-2">
                 Explore All Folders <ArrowRight size={16} />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: DARK PROJECTS (UNVEILING OUR WORK) ================= */}
      {/* Menggunakan background gradasi gelap seperti referensi */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-950 text-white">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                Real Action
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                UNVEILING OUR <br/> EXCLUSIVE PROJECTS
              </h2>
            </div>
            <p className="md:w-1/3 text-gray-400 text-sm leading-relaxed">
              Explore the dynamic world of meat processing through our camera lens. Each installation is a testament to our dedication to perfection.
            </p>
          </div>

          {/* Grid Cards (Abstract Art style replaced by Industrial Projects) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectCategories.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Image Card */}
                <div className="h-96 w-full rounded-lg overflow-hidden relative mb-6 bg-gray-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                  
                  {/* Text on Image Bottom */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block uppercase">
                      {project.title}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{project.subtitle}</h3>
                  </div>
                </div>

                {/* Description Below */}
                <div>
                   <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                     {project.desc}
                   </p>
                   <button className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white hover:text-orange-400 transition-colors flex items-center gap-2">
                     See Installation <MoveRight size={14} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: VISIONARIES (MEET THE TEAM / STATS) ================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2">
             <h2 className="text-4xl font-bold text-gray-900 mb-6 uppercase">
               The Visionaries <br/> Behind The Quality
             </h2>
             <p className="text-gray-600 mb-8 leading-relaxed">
               Delve into the minds of our certified experts. Each project is handled with precision that defines our core values. Colink Sigma is proud to introduce you to the future of processing.
             </p>

             {/* List seperti referensi */}
             <div className="space-y-4">
                {["Lars Arnstaedt (Technical Expert)", "Ni Nyoman Sugi (Director)", "Engineering Team"].map((name, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md cursor-pointer transition">
                     <span className="font-bold text-gray-800">{name}</span>
                     <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">+</div>
                  </div>
                ))}
             </div>
          </div>

          <div className="md:w-1/2 relative">
             <div className="w-full h-[500px] bg-white p-4 rounded-t-full rounded-b-lg shadow-xl overflow-hidden relative">
                <img src="images/Lars.png" alt="Visionary" className="w-full h-full object-cover rounded-t-full rounded-b-md filter grayscale hover:grayscale-0 transition duration-500" />
                
                {/* Floating Card */}
                <div className="absolute bottom-10 -left-6 bg-white p-6 rounded-lg shadow-2xl max-w-xs hidden md:block border-l-4 border-blue-900">
                   <p className="font-serif italic text-gray-600">"Quality is not an act, it is a habit. We bring German precision to every machine we touch."</p>
                   <p className="text-xs font-bold mt-4 uppercase text-blue-900">Lars Arnstaedt</p>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: NEWSLETTER (BOTTOM DARK) ================= */}
      <section className="py-20 bg-gray-900 text-center text-white relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
           <h2 className="text-3xl font-serif mb-4">Stay Updated with Colink Sigma</h2>
           <p className="text-gray-400 mb-8 max-w-lg mx-auto">
             Sign up to receive the latest updates on machine technologies, casing products, and our exhibition schedules.
           </p>
           
           <div className="max-w-md mx-auto flex gap-2 bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/20">
              <input type="email" placeholder="Your email address" className="flex-1 bg-transparent px-4 py-2 text-white outline-none placeholder:text-gray-500" />
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-orange-500 hover:text-white transition">
                Submit
              </button>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;