import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="overflow-hidden">
      
      {/* 1. Judul Header */}
      <ContactHero />

      {/* 2. Kartu Info (Floating Up) */}
      <ContactInfo />

      {/* 3. Formulir & Peta */}
      <ContactForm />

    </div>
  );
};

export default Contact;