import React from 'react';
import Header from '../components/Header';
import SEO from '../components/seo/SEO';
import HeroSection from '../components/home1/HeroSection';
import StatsSection from '../components/home1/StatsSection';
import USPSection from '../components/home1/USPSection';
import ExploreGrid from '../components/home1/ExploreGrid';
import CampusGallery from '../components/home1/CampusGallery';
import CTASection from '../components/home1/CTASection';
import AcademicsSection from '../components/home1/AcademicsSection';
import ActivitiesSection from '../components/home1/ActivitiesSection';
import MissionSection from '../components/home1/MissionSection';
import LegacyTeaser from '../components/home1/LegacyTeaser';
import CharacterIntro from '../components/home1/CharacterIntro';
import CampusVideoSection from '../components/home1/CampusVideoSection';

const CampusOverview = () => {
  return (
    <>
      <SEO
        title="Campus Overview"
        description="Ali Public School Premier provides academic excellence, character building, and modern learning for every child."
        canonicalPath="/campus-overview"
        ogImage="/favicon.png"
      />

      <div className="w-full min-h-screen bg-light">
        <Header />

        <main>
          <div className="relative w-full">
            <HeroSection />
          </div>

          <div className="w-full bg-light">
            <USPSection />
            <ExploreGrid />
            <MissionSection />
            <CampusGallery />
            <AcademicsSection />
            <ActivitiesSection />
            <CTASection />
            <LegacyTeaser />
            <CampusVideoSection />
            <CharacterIntro />
            <StatsSection />
          </div>
        </main>
      </div>
    </>
  );
};

export default CampusOverview;
