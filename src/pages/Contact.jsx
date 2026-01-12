import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* SEO CONFIG */}
      <Helmet>
        <title>{t('navbar.contact')} - PT. Colink Sigma Indonesia</title>
        <meta name="description" content={t('contact_page.hero.desc')} />
      </Helmet>
      
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;