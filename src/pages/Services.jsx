import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ServicesHero from '../components/services/ServicesHero';
import ServicesDetail from '../components/services/ServicesDetail';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* --- SEO CONFIG (OPTIMAL) --- */}
      <Helmet>
        {/* JUDUL:
            Menggabungkan "Layanan" dengan Keyword Jualan Utama.
            Hasil: "Layanan | Spesialis Overhaul & Instalasi Mesin - PT. Colink Sigma"
        */}
        <title>{t('navbar.services')} | Spesialis Overhaul & Instalasi Mesin - PT. Colink Sigma</title>
        
        {/* DESKRIPSI:
            Pastikan 'services_page.hero.desc' di file JSON menjelaskan detail teknis.
            Misal: "Layanan lengkap mencakup instalasi mesin baru, overhaul vacuum filler, perbaikan elektrikal, hingga supply sparepart original."
        */}
        <meta name="description" content={t('services_page.hero.desc')} />
        
        {/* KEYWORDS:
            Targetkan nama-nama layanan teknis.
        */}
        <meta name="keywords" content="jasa overhaul mesin, instalasi mesin pabrik, perbaikan vacuum filler, maintenance mesin sosis, elektrikal industri, sparepart mesin" />
      </Helmet>
      {/* --------------------------- */}
      
      <ServicesHero />
      <ServicesDetail />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  );
};

export default Services;