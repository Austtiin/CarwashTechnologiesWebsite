import React from 'react';
import HeroSection from './components/home/hero-section';
import ServicesOverview from './components/home/services-overview';
import RecentProjects from './components/home/recent-projects';
import ChemicalsSection from './components/home/chemicals-section';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <RecentProjects />
      <ChemicalsSection />
    </div>
  );
};

export default HomePage;