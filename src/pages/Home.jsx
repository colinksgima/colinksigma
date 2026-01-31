import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { useTranslation } from 'react-i18next'; // Import i18n
import Hero from '../components/Hero';
import HomeStats from '../components/home/HomeStats';
import HomeWhyUs from '../components/home/HomeWhyUs';
import HomeServices from '../components/home/HomeServices';
import HomeBrands from '../components/home/HomeBrands';
import HomeCTA from '../components/home/HomeCTA';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* --- SEO CONFIG (OPTIMAL) --- */}
      <Helmet>
        {/* JUDUL UTAMA:
            Jangan pakai "Home - Nama PT". Itu membuang peluang.
            Pakai: "Jasa [Layanan Utama] [Lokasi] | Nama PT"
        */}
        <title>Jasa Instalasi Mesin Pabrik & Maintenance Cikarang | PT. Colink Sigma</title>
        
        {/* DESKRIPSI:
            Pastikan 'home.hero.desc' di file bahasa (id.json) isinya:
            "Spesialis jasa instalasi mesin industri, overhaul vacuum filler, dan supply sparepart di Cikarang. Partner maintenance terpercaya."
        */}
        <meta name="description" content={t('home.hero.desc')} />
        
        {/* KEYWORDS:
            Targetkan kata kunci pencarian manager pabrik.
        */}
        <meta name="keywords" content="jasa maintenance mesin cikarang, teknisi vacuum filler, overhaul mesin sosis, sparepart mesin industri, colink sigma" />
      </Helmet>
      {/* --------------------------- */}

      <Hero />
      <HomeStats />
      <HomeWhyUs />
      <HomeServices />
      <HomeBrands />
      <HomeCTA />
    </div>
  );
};

export default Home;