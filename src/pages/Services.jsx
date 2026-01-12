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
      {/* SEO CONFIG */}
      <Helmet>
        <title>{t('navbar.services')} - PT. Colink Sigma Indonesia</title>
        <meta name="description" content={t('services_page.hero.desc')} />
      </Helmet>
      
      <ServicesHero />
      <ServicesDetail />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  );
};

export default Services;