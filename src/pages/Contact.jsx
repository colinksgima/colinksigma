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
      {/* --- SEO CONFIG (OPTIMAL) --- */}
      <Helmet>
        {/* UBAH JUDUL:
           Jangan cuma "Contact". Tambahkan "Lokasi" & "Layanan".
           Contoh hasil: "Hubungi Kami - Jasa Maintenance Mesin Cikarang | PT. Colink Sigma"
        */}
        <title>{t('navbar.contact')} - Jasa Maintenance Mesin Cikarang | PT. Colink Sigma</title>
        
        {/* Deskripsi: Pastikan file JSON translate Anda mengajak orang untuk menelepon/konsultasi */}
        <meta name="description" content={t('contact_page.hero.desc')} />
        
        {/* Keyword khusus Contact: Alamat, Email, Nomor WA */}
        <meta name="keywords" content="alamat colink sigma, lokasi workshop cikarang, nomor wa teknisi mesin, email support mesin industri" />
      </Helmet>
      {/* --------------------------- */}
      
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;