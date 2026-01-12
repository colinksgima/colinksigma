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
      {/* SEO CONFIG */}
      <Helmet>
        <title>{t('navbar.gallery')} - PT. Colink Sigma Indonesia</title>
        <meta name="description" content={t('gallery_page.grid.desc')} />
      </Helmet>
      
      <GalleryHero />
      <GallerySpotlight />
      <GalleryGrid />
    </div>
  );
};

export default Gallery;