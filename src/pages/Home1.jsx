import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/home1/HeroSection';
import StatsSection from '../components/home1/StatsSection';
import USPSection from '../components/home1/USPSection';
import ExploreGrid from '../components/home1/ExploreGrid';
import CampusGallery from '../components/home1/CampusGallery';
import Testimonials from '../components/home1/Testimonials';
import CTASection from '../components/home1/CTASection';
import NewsGrid from '../components/home1/NewsGrid';
import AcademicsSection from '../components/home1/AcademicsSection';
import ActivitiesSection from '../components/home1/ActivitiesSection';
import MissionSection from '../components/home1/MissionSection';
import LegacyTeaser from '../components/home1/LegacyTeaser';
import CharacterIntro from '../components/home1/CharacterIntro';
import CampusVideoSection from '../components/home1/CampusVideoSection';



const Home1 = () => {
  return (
    <div className="w-full min-h-screen bg-light">

      {/* Header fixed top pe */}
      <Header />

      {/* Main Content - HeroSection sabse pehle */}
      <main>
        {/* HeroSection - Full width and height */}
        <div className="relative w-full">
          <HeroSection />
        </div>

        {/* Rest of sections with proper spacing */}
        <div className="w-full bg-light">
          <USPSection />
          <ExploreGrid />
          <MissionSection />
          <CampusGallery />
          <AcademicsSection />
          <ActivitiesSection />
          <CTASection />
          <LegacyTeaser/>
          <CampusVideoSection />
          <CharacterIntro/>
          <StatsSection />
        </div>
      </main>


    </div>
  );
};

export default Home1;