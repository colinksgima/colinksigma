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
      {/* SEO CONFIG */}
      <Helmet>
        <title>{t('navbar.about')} - PT. Colink Sigma Indonesia</title>
        <meta name="description" content={t('about.hero.desc')} />
      </Helmet>
      
      <AboutHero />
      <AboutStory />
      <AboutVision />
      <AboutTeam />
    </div>
  );
};

export default About;