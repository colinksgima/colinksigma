import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutVision from '../components/about/AboutVision';
import AboutTeam from '../components/about/AboutTeam';

const About = () => {
  return (
    <div className="overflow-hidden">
      
      {/* 1. Header Section */}
      <AboutHero />

      {/* 2. Story / History Section */}
      <AboutStory />

      {/* 3. Vision & Mission Section */}
      <AboutVision />

      {/* 4. Leadership Team Section */}
      <AboutTeam />

    </div>
  );
};

export default About;