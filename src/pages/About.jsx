import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutVision from '../components/about/AboutVision';
import AboutTeam from '../components/about/AboutTeam';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* --- SEO CONFIG (DIOPTIMALKAN) --- */}
      <Helmet>
        {/*
           UBAH: Jangan hanya "About - Nama PT".
           TAMBAH: Keyword keahlian (misal: Industrial Partner / Spesialis Mesin)
           Teknik: Menggabungkan terjemahan + Keyword manual
        */}
        <title>{t('navbar.about')} | Industrial Machinery Partner - PT. Colink Sigma</title>
        
        {/* Pastikan text 'about.hero.desc' di file json mengandung kata 'Cikarang', 'Mesin', 'Maintenance' */}
        <meta name="description" content={t('about.hero.desc')} />
        
        {/* Tambahan Opsional: Keyword khusus halaman ini */}
        <meta name="keywords" content="profil perusahaan colink sigma, teknisi mesin cikarang, industrial maintenance indonesia" />
      </Helmet>
      {/* ---------------------------------- */}
      
      <AboutHero />
      <AboutStory />
      <AboutVision />
      <AboutTeam />
    </div>
  );
};

export default About;