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
      {/* SEO CONFIG */}
      <Helmet>
        <title>{t('navbar.home')} - PT. Colink Sigma Indonesia</title>
        <meta name="description" content={t('home.hero.desc')} />
      </Helmet>

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