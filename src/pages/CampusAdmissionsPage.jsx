import React from 'react';
import AdmissionHero from '../components/admissions/HeroSection';
import AdmissionSteps from '../components/admissions/AdmissionSteps';
import AdmissionEnquiry from '../components/admissions/AdmissionEnquiry';
import VisitUs from '../components/admissions/VisitUs';
import ProspectusViewer from '../components/admissions/ProspectusViewer';


const CampusAdmissionsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <AdmissionHero />
      <AdmissionSteps />
      {/* <ProspectusViewer /> */}
      <AdmissionEnquiry />
      <VisitUs/>
    </div>
  );
};

export default CampusAdmissionsPage;