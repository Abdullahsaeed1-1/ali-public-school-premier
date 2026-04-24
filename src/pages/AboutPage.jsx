import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/about/HeroSection';
import HeritageSection from '../components/about/HeritageSection';
import LeadershipSection from '../components/about/LeadershipSection';
import FacultySection from '../components/about/FacultySection';
import WhyChooseUs from '../components/about/WhyChooseUs';
import BranchTimeline from '../components/about/BranchTimeline';
import CampusHighlights from '../components/about/CampusHighlights';
import AdditionalFacilities from '../components/about/AdditionalFacilities';
import CampusGallery from '../components/about/CampusGallery';
import CampusMap from '../components/about/CampusMap';
import SEO from '../components/seo/SEO';

const AboutPage = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            <SEO
                title="About Us"
                description="Discover the heritage, mission, and campus strengths of Ali Public School Premier in Peshawar."
                canonicalPath="/aboutpage"
                ogImage="/favicon.png"
            />

            {/* Header with cream background */}
            {/* 'relative z-50' ensures header stays above other sections on mobile */}
            <div className="bg-cream relative z-50">
                <Header />
            </div>

            {/* Main Content wrapper */}
            <main className="flex flex-col">

                {/* Hero section: Usually handles its own padding internally */}
                <HeroSection />

                {/* Content Sections */}
                <div className="bg-white">
                    {/* Aapke components (HeritageSection, etc.) ke andar 
                        'container mx-auto px-4 md:px-8' lazmi hona chahiye 
                        taake sides se space barqarar rahe.
                    */}

                    <HeritageSection />
                    <AdditionalFacilities />
                    <CampusHighlights />
                    <CampusGallery />
                    <CampusMap />
                </div>
            </main>

        </div>
    );
};

export default AboutPage;