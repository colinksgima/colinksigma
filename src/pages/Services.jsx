import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesDetail from '../components/services/ServicesDetail';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
  return (
    <div className="overflow-hidden">
      
      {/* 1. Judul Halaman */}
      <ServicesHero />

      {/* 2. Detail Layanan (Zig-Zag) */}
      <ServicesDetail />

      {/* 3. Proses Kerja */}
      <ServicesProcess />

      {/* 4. Call to Action */}
      <ServicesCTA />

    </div>
  );
};

export default Services;