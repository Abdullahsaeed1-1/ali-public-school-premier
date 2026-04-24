import React from 'react';
import AdmissionHero from '../components/admissions/HeroSection';
import AdmissionSteps from '../components/admissions/AdmissionSteps';
import AdmissionEnquiry from '../components/admissions/AdmissionEnquiry';
import VisitUs from '../components/admissions/VisitUs';
import ProspectusViewer from '../components/admissions/ProspectusViewer';
import SEO from '../components/seo/SEO';


const CampusAdmissionsPage = () => {
  return (
    <>
      <SEO
        title="Admissions"
        description="Start your child's journey at Ali Public School Premier. View admission steps, prospectus details, enquiry support, and campus visit information."
        canonicalPath="/admissions"
        ogImage="/favicon.png"
      />

      <div className="bg-white min-h-screen">
        <AdmissionHero />
        <AdmissionSteps />
        <ProspectusViewer />
        <AdmissionEnquiry />
        <VisitUs />
      </div>
    </>
  );
};

export default CampusAdmissionsPage;