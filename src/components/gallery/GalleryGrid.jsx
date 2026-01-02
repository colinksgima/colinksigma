import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Settings, Wrench, FileCheck, Factory, X, Image as ImageIcon } from 'lucide-react';

// --- 1. DATA PROJECT & ISI FOTO ---
// Di sini Anda memasukkan foto-foto yang ada di dalam folder laptop Anda.
const projects = [
  {
    id: 1,
    title: "Line 830 + 226 Installation",
    category: "Full Line Setup",
    desc: "Instalasi lengkap line produksi sosis kecepatan tinggi dengan sinkronisasi presisi antara mesin filler dan hanging line.",
    coverImage: "/images/sausage.jpg", // Foto Cover (Depan)
    icon: <Settings className="w-6 h-6" />,
    colSpan: "md:col-span-2",
    // ISI FOLDER: Masukkan daftar foto detail proyek ini di sini
    galleryImages: [
      "/images/sausage.jpg", // Ganti dengan path foto asli di folder
      "/images/casing.jpg",
      "/images/sausage.jpg",
      "/images/casing.jpg"
    ]
  },
  {
    id: 2,
    title: "612 Machine Overhaul",
    category: "Maintenance",
    desc: "Peremajaan total mesin vacuum filler. Pembongkaran total, penggantian seal, dan kalibrasi ulang sesuai standar pabrik.",
    coverImage: "/images/casing.jpg", 
    icon: <Wrench className="w-6 h-6" />,
    colSpan: "md:col-span-1",
    // ISI FOLDER
    galleryImages: [
      "/images/casing.jpg",
      "/images/sausage.jpg",
      "/images/casing.jpg"
    ]
  },
  {
    id: 3,
    title: "Casing Application Trial",
    category: "R&D Support",
    desc: "Uji coba aplikasi casing kolagen pada berbagai kondisi suhu dan kelembapan untuk menemukan formula produksi terbaik.",
    coverImage: "/images/casing.jpg",
    icon: <FileCheck className="w-6 h-6" />,
    colSpan: "md:col-span-1",
    // ISI FOLDER
    galleryImages: [
      "/images/sausage.jpg",
      "/images/casing.jpg",
      "/images/sausage.jpg"
    ]
  },
  {
    id: 4,
    title: "Mauting Chamber Setup",
    category: "Facility Installation",
    desc: "Pemasangan dan kalibrasi sistem pengasapan industrial (Smokehouse) Mauting untuk hasil pengasapan yang merata.",
    coverImage: "/images/sausage.jpg",
    icon: <Factory className="w-6 h-6" />,
    colSpan: "md:col-span-2",
    // ISI FOLDER
    galleryImages: [
      "/images/casing.jpg",
      "/images/sausage.jpg",
      "/images/casing.jpg",
      "/images/sausage.jpg",
      "/images/casing.jpg"
    ]
  },
];

const GalleryGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">Our Track Record</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Featured Projects</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Klik pada proyek di bawah untuk melihat dokumentasi detail instalasi dan pengerjaan teknis kami.
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`} // Untuk animasi transisi halus
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${project.colSpan}`}
            >
              {/* Cover Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Text Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/20 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                  {project.icon}
                </div>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-100">{project.title}</h3>
                  <div className="flex items-center gap-2 text-white font-bold text-sm border-b border-white/30 pb-1 w-fit group-hover:border-orange-500 group-hover:text-orange-400 transition-colors">
                    View Documentation <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL POPUP (DETAIL PROJECT) --- */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              
              {/* 1. Backdrop Gelap (Klik untuk tutup) */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* 2. Container Modal */}
              <motion.div 
                layoutId={`project-card-${selectedProject.id}`}
                className="relative bg-white w-full max-w-5xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              >
                
                {/* Tombol Close */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white md:text-gray-800 md:bg-gray-100 md:hover:bg-gray-200 p-2 rounded-full transition-colors backdrop-blur-md"
                >
                  <X size={24} />
                </button>

                {/* --- KIRI: Info Proyek (Sticky) --- */}
                <div className="w-full md:w-1/3 bg-gray-50 p-8 md:p-10 flex flex-col overflow-y-auto border-r border-gray-100">
                  <div className="mb-6">
                    <span className="text-orange-500 font-bold text-xs uppercase tracking-widest border border-orange-200 bg-orange-50 px-3 py-1 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-blue-900 mb-6 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {selectedProject.desc}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <ImageIcon size={18} className="text-blue-900"/> Project Gallery
                    </h4>
                    <p className="text-sm text-gray-500">
                      Menampilkan {selectedProject.galleryImages.length} foto dokumentasi teknis.
                    </p>
                  </div>
                </div>

                {/* --- KANAN: Scrollable Gallery Grid --- */}
                <div className="w-full md:w-2/3 bg-white p-6 md:p-10 overflow-y-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.galleryImages.map((img, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in"
                      >
                        <img 
                          src={img} 
                          alt={`Documentation ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay Hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Footer Galeri */}
                  <div className="mt-10 text-center">
                    <p className="text-xs text-gray-400 italic">
                      End of documentation for {selectedProject.title}
                    </p>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default GalleryGrid;