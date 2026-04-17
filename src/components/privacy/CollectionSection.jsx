import React from 'react';
import { FaEye } from 'react-icons/fa';

const CollectionSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-700 animate-section-enter">
      <h2 className="font-heading text-3xl font-bold text-[#29234B] mb-6 flex items-center animate-text-focus">
        <FaEye className="text-[#D4AF37] mr-4 animate-pulse" />
        Data Collection Principles
      </h2>
      
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#FAFAFA] to-transparent border-l-4 border-[#29234B] p-6 rounded-r-lg hover:border-[#29234B] transition-all duration-500 animate-slide-in-left hover:shadow-md">
          <h3 className="font-bold text-xl text-[#29234B] mb-3">Lawful & Transparent Collection</h3>
          <p className="text-[#29234B]/80">
            We only collect personal information that is necessary for educational purposes, 
            with clear explanations about why it's needed and how it will be used.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-4 border-[#D4AF37] p-6 rounded-r-lg hover:border-[#D4AF37] transition-all duration-500 animate-slide-in-left hover:shadow-md" style={{ animationDelay: '100ms' }}>
          <h3 className="font-bold text-xl text-[#29234B] mb-3">Parental Consent</h3>
          <p className="text-[#29234B]/80">
            For students under 18, explicit parental consent is obtained before collecting 
            any personal data, with options to opt-out of non-essential data collection.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-[#10B981]/10 to-transparent border-l-4 border-[#10B981] p-6 rounded-r-lg hover:border-[#10B981] transition-all duration-500 animate-slide-in-left hover:shadow-md" style={{ animationDelay: '200ms' }}>
          <h3 className="font-bold text-xl text-[#29234B] mb-3">Minimal Data Collection</h3>
          <p className="text-[#29234B]/80">
            We follow the principle of data minimization - collecting only what is 
            absolutely necessary for providing quality education and ensuring student safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;