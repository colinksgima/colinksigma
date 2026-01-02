import React from 'react';
import Hero from '../components/Hero'; // Hero tetap dari components utama
import HomeStats from '../components/home/HomeStats';
import HomeWhyUs from '../components/home/HomeWhyUs';
import HomeServices from '../components/home/HomeServices';
import HomeBrands from '../components/home/HomeBrands';
import HomeCTA from '../components/home/HomeCTA';

const Home = () => {
  return (
    <div className="overflow-hidden">
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