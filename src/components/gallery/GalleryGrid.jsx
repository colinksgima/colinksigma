import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Settings, Wrench, FileCheck, Factory, X, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GalleryGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const { t } = useTranslation();

  // --- DATA PROJECT (Dipindahkan ke dalam komponen agar bisa akses t()) ---
  const projects = [
    {
      id: 1,
      title: t('gallery_page.projects.p1_title'),
      category: t('gallery_page.projects.p1_cat'),
      desc: t('gallery_page.projects.p1_desc'),
      coverImage: "images/installation-830-226/installation-1.jpg", 
      icon: <Settings className="w-6 h-6" />,
      colSpan: "md:col-span-2",
      galleryImages: [
        "images/installation-830-226/installation-1.jpg", 
        "images/installation-830-226/installation-2.jpg",
        "images/installation-830-226/installation-3.jpg",
        "images/installation-830-226/installation-4.jpg",
        "images/installation-830-226/installation-5.jpg",
        "images/installation-830-226/installation-6.jpg",
        "images/installation-830-226/installation-7.jpg",
        "images/installation-830-226/installation-8.jpg"
      ]
    },
    {
      id: 2,
      title: t('gallery_page.projects.p2_title'),
      category: t('gallery_page.projects.p2_cat'),
      desc: t('gallery_page.projects.p2_desc'),
      coverImage: "images/612-overhaul/VF-612-1.jpg", 
      icon: <Wrench className="w-6 h-6" />,
      colSpan: "md:col-span-1",
      galleryImages: [
        "images/612-overhaul/VF-612-1.jpg",
        "images/612-overhaul/VF-612-2.jpg",
        "images/612-overhaul/VF-612-3.jpg",
        "images/612-overhaul/VF-612-4.jpg",
        "images/612-overhaul/VF-612-5.jpg",
        "images/612-overhaul/VF-612-6.jpg",
        "images/612-overhaul/VF-612-7.jpg",
        "images/612-overhaul/VF-612-8.jpg",
        "images/612-overhaul/VF-612-9.jpg"
      ]
    },
    {
      id: 3,
      title: t('gallery_page.projects.p3_title'),
      category: t('gallery_page.projects.p3_cat'),
      desc: t('gallery_page.projects.p3_desc'),
      coverImage: "images/casing-trial/cassing-trial-1.jpg",
      icon: <FileCheck className="w-6 h-6" />,
      colSpan: "md:col-span-1",
      galleryImages: [
        "images/casing-trial/cassing-trial-1.jpg",
        "images/casing-trial/cassing-trial-2.jpg",
        "images/casing-trial/cassing-trial-3.jpg",
        "images/casing-trial/cassing-trial-4.jpg",
        "images/casing-trial/cassing-trial-5.jpg",
        "images/casing-trial/cassing-trial-6.jpg"
      ]
    },
    {
      id: 4,
      title: t('gallery_page.projects.p4_title'),
      category: t('gallery_page.projects.p4_cat'),
      desc: t('gallery_page.projects.p4_desc'),
      coverImage: "images/mauting-installation/mauting-installation-1.jpg",
      icon: <Factory className="w-6 h-6" />,
      colSpan: "md:col-span-2",
      galleryImages: [
        "images/mauting-installation/mauting-installation-1.jpg",
        "images/mauting-installation/mauting-installation-2.jpg",
        "images/mauting-installation/mauting-installation-3.jpg",
        "images/mauting-installation/mauting-installation-4.jpg",
        "images/mauting-installation/mauting-installation-5.jpg",
        "images/mauting-installation/mauting-installation-6.jpg",
        "images/mauting-installation/mauting-installation-7.jpg"
      ]
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">{t('gallery_page.grid.subtitle')}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">{t('gallery_page.grid.title')}</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            {t('gallery_page.grid.desc')}
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${project.colSpan}`}
            >
              <div className="absolute inset-0">
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/20 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                  {project.icon}
                </div>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-100">{project.title}</h3>
                  <div className="flex items-center gap-2 text-white font-bold text-sm border-b border-white/30 pb-1 w-fit group-hover:border-orange-500 group-hover:text-orange-400 transition-colors">
                    {t('gallery_page.grid.view_doc')} <ArrowUpRight size={16} />
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
              
              {/* Backdrop Gelap */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Container Modal */}
              <motion.div 
                layoutId={`project-card-${selectedProject.id}`}
                className="relative bg-white w-full max-w-5xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-[101]"
              >
                {/* Tombol Close */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 text-white md:text-gray-800 md:bg-gray-100 md:hover:bg-gray-200 p-2 rounded-full transition-colors backdrop-blur-md"
                >
                  <X size={24} />
                </button>

                {/* KIRI: Info Proyek */}
                <div className="w-full md:w-1/3 bg-gray-50 p-8 md:p-10 flex flex-col overflow-y-auto border-r border-gray-100 relative z-10">
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
                      <ImageIcon size={18} className="text-blue-900"/> {t('gallery_page.grid.gallery_label')}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {t('gallery_page.grid.showing', { count: selectedProject.galleryImages.length })}
                    </p>
                  </div>
                </div>

                {/* KANAN: Scrollable Gallery Grid */}
                <div className="w-full md:w-2/3 bg-white p-6 md:p-10 overflow-y-auto relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.galleryImages.map((img, idx) => (
                      <motion.div 
                        key={idx}
                        layoutId={`gallery-image-${selectedProject.id}-${idx}`} 
                        onClick={() => setZoomedImage({ src: img, id: `gallery-image-${selectedProject.id}-${idx}` })} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in shadow-sm hover:shadow-md transition-shadow"
                      >
                        <img 
                          src={img} 
                          alt={`Documentation ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                           <ZoomIn className="text-white drop-shadow-md" size={32} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-10 text-center">
                    <p className="text-xs text-gray-400 italic">
                      {t('gallery_page.grid.end_doc', { title: selectedProject.title })}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- LIGHTBOX --- */}
        <AnimatePresence>
          {zoomedImage && (
            <div 
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 cursor-zoom-out"
              onClick={() => setZoomedImage(null)} 
            >
              <button 
                className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                onClick={() => setZoomedImage(null)}
              >
                <X size={32} />
              </button>

              <motion.img
                layoutId={zoomedImage.id} 
                src={zoomedImage.src}
                alt="Zoomed Documentation"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default GalleryGrid;