import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import GalleryHero from '../components/gallery/GalleryHero';
import GallerySpotlight from '../components/gallery/GallerySpotlight';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* --- SEO CONFIG (OPTIMAL) --- */}
      <Helmet>
        {/* JUDUL:
            Tambahkan "Portofolio" atau "Dokumentasi Proyek".
            Hasil: "Galeri - Portofolio Instalasi & Overhaul Mesin | PT. Colink Sigma"
        */}
        <title>{t('navbar.gallery')} - Portofolio Instalasi & Overhaul Mesin | PT. Colink Sigma</title>
        
        {/* DESKRIPSI:
            Pastikan teks di file bahasa menjelaskan apa yang ada di foto.
            Misal: "Lihat dokumentasi proyek kami dalam instalasi mesin sosis, perbaikan vacuum filler, dan maintenance di pabrik-pabrik Indonesia."
        */}
        <meta name="description" content={t('gallery_page.grid.desc')} />
        
        {/* KEYWORDS:
            Penting untuk pencarian gambar (Image Search)
        */}
        <meta name="keywords" content="foto proyek mesin pabrik, dokumentasi instalasi mesin, portofolio colink sigma, overhaul vacuum filler gallery" />
      </Helmet>
      {/* --------------------------- */}
      
      <GalleryHero />
      <GallerySpotlight />
      <GalleryGrid />
    </div>
  );
};

export default Gallery;