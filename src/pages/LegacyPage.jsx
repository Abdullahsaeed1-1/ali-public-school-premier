import React, { useEffect } from 'react';
// Components import kar rahe hain
import Header from '../components/Header';
import LegacyHero from '../components/legacy/LegacyHero';
import LegacyStory from '../components/legacy/LegacyStory';
import LegacyVision from '../components/legacy/LegacyVision';
import PrincipalMessage from '../components/home1/PrincipalMessage';
import WhoWeAre from '../components/home1/WhoWeAre';

const LegacyPage = () => {
  
  // Page load hote hi top par scroll karega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <Header />
      {/* 1. Hero Banner */}
      <LegacyHero />
      {/* 2. Story Section (Father & UK) */}
      <LegacyStory />
      {/* 3. Principal Message */}
      <PrincipalMessage />
      {/* 4. Who We Are */}
      <WhoWeAre />
      {/* 5. Vision & Cards */}
      <LegacyVision />
    </div>
  );
};

export default LegacyPage;