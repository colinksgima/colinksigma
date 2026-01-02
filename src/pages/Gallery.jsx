import React from 'react';
import GalleryHero from '../components/gallery/GalleryHero';
import GallerySpotlight from '../components/gallery/GallerySpotlight';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div className="overflow-hidden">
      
      {/* 1. Hero (Arc Images) */}
      <GalleryHero />

      {/* 2. Spotlight (Dark Section) */}
      <GallerySpotlight />

      {/* 3. Grid Foto (Filterable) */}
      <GalleryGrid />

    </div>
  );
};

export default Gallery;