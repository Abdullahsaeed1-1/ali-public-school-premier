import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaLock, 
  FaEye, 
  FaUserCheck, 
  FaFileContract,
  FaCheckCircle,
  FaChevronRight,
  FaArrowLeft
} from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import PrivacyHeader from '../components/privacy/PrivacyHeader';
import PrivacySidebar from '../components/privacy/PrivacySidebar';
import OverviewSection from '../components/privacy/OverviewSection';
import CollectionSection from '../components/privacy/CollectionSection';
import UsageSection from '../components/privacy/UsageSection';
import ProtectionSection from '../components/privacy/ProtectionSection';
import RightsSection from '../components/privacy/RightSection';
import UpdatesSection from '../components/privacy/UpdatesSection';
import ContactSection from '../components/privacy/ContactSection';
import PrivacyAnimations from '../components/privacy/PrivacyAnimations';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Create refs for each section
  const overviewRef = useRef(null);
  const collectionRef = useRef(null);
  const usageRef = useRef(null);
  const protectionRef = useRef(null);
  const rightsRef = useRef(null);

  const sections = [
    { id: 'overview', title: 'Overview', icon: FaShieldAlt, ref: overviewRef },
    { id: 'collection', title: 'Data Collection', icon: FaEye, ref: collectionRef },
    { id: 'usage', title: 'Data Usage', icon: FaUserCheck, ref: usageRef },
    { id: 'protection', title: 'Data Protection', icon: FaLock, ref: protectionRef },
    { id: 'rights', title: 'Your Rights', icon: FaFileContract, ref: rightsRef },
  ];

  const privacyPoints = [
    {
      title: "Information We Collect",
      points: [
        "Student enrollment information (name, age, grade)",
        "Parent/guardian contact details",
        "Academic records and performance data",
        "Medical information for health & safety",
        "Photographs for school records and publications",
        "Attendance and behavioral records"
      ]
    },
    {
      title: "How We Use Information",
      points: [
        "Academic progress tracking and reporting",
        "Communication with parents/guardians",
        "School administration and management",
        "Health and safety compliance",
        "Event participation and school activities",
        "Educational research and improvement"
      ]
    },
    {
      title: "Information Sharing",
      points: [
        "Only with authorized school personnel",
        "Educational authorities as required by law",
        "Medical professionals in emergencies",
        "Third-party service providers with confidentiality agreements",
        "Never sold to external marketing companies"
      ]
    },
    {
      title: "Data Security Measures",
      points: [
        "Encrypted data storage and transmission",
        "Regular security audits and updates",
        "Limited access to authorized personnel only",
        "Secure password policies and authentication",
        "Regular staff training on data protection"
      ]
    }
  ];

  const policyUpdates = [
    { date: "March 15, 2024", change: "Enhanced data encryption protocols" },
    { date: "January 10, 2024", change: "Updated consent forms for photography" },
    { date: "November 5, 2023", change: "Added parental access portal features" },
    { date: "August 20, 2023", change: "Compliance with new educational regulations" }
  ];

  // Handle sidebar click - scroll to section
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    
    // Get the ref for the section
    const sectionRef = sections.find(s => s.id === sectionId)?.ref;
    
    if (sectionRef?.current) {
      // Smooth scroll to section with offset for header
      const yOffset = -80;
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find which section is currently in view
      for (const section of sections) {
        if (section.ref.current) {
          const element = section.ref.current;
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-white">
      {/* Header Section */}
      <PrivacyHeader />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <PrivacySidebar 
            sections={sections}
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
          />

          {/* Main Content Area */}
          <div className="lg:w-3/4 space-y-8">
            {/* Overview Section */}
            <div ref={overviewRef}>
              <OverviewSection privacyPoints={privacyPoints} />
            </div>

            {/* Data Collection Section */}
            <div ref={collectionRef}>
              <CollectionSection />
            </div>

            {/* Data Usage Section */}
            <div ref={usageRef}>
              <UsageSection />
            </div>

            {/* Data Protection Section */}
            <div ref={protectionRef}>
              <ProtectionSection />
            </div>

            {/* Your Rights Section */}
            <div ref={rightsRef}>
              <RightsSection />
            </div>

            {/* Policy Updates Section */}
            <UpdatesSection policyUpdates={policyUpdates} />

            {/* Contact Section */}
            <ContactSection />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <PrivacyAnimations />
    </div>
  );
};

export default PrivacyPolicy;