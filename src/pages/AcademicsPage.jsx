import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/academics/HeroSection';
import IntroductionSection from '../components/academics/IntroductionSection';
import EarlyYearsSection from '../components/academics/EarlyYearsSection';
import JuniorSchoolSection from '../components/academics/JuniorSchoolSection';
import SeniorSchoolSection from '../components/academics/SeniorSchoolSection';
import CollegeSection from '../components/academics/CollegeSection';
import TeachingApproachSection from '../components/academics/TeachingApproachSection';
import CoCurricularSection from '../components/academics/CoCurricularSection';
import OutcomesSection from '../components/academics/OutcomesSection';
import Footer from '../components/Footer';

const AcademicsPage = () => {
    return (
        <div className="min-h-screen">
            {/* Header with cream background */}
            <div className="bg-cream">
                <Header />
            </div>
            
            {/* Hero section with cream background */}
            <HeroSection />
            
            {/* Rest of the page with white background */}
            <div className="bg-white">
                <IntroductionSection />
                <EarlyYearsSection />
                <JuniorSchoolSection />
                {/* <TeachingApproachSection /> */}
                <CoCurricularSection /> {/* Added */}
                <OutcomesSection /> {/* Added */}
            </div>
        </div>
    );
};

export default AcademicsPage;