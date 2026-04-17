import React from 'react';
import { FaLock } from 'react-icons/fa';

const ProtectionSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-700 animate-section-enter">
      <h2 className="font-heading text-3xl font-bold text-[#29234B] mb-6 flex items-center animate-text-focus">
        <FaLock className="text-[#D4AF37] mr-4 animate-bounce-slow" />
        Data Protection Measures
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#FAFAFA] to-transparent p-6 rounded-xl border border-gray-200 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1">
          <h3 className="font-bold text-xl text-[#29234B] mb-4">Technical Security</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">End-to-end encryption for all sensitive data</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Regular security audits and vulnerability assessments</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Multi-factor authentication for system access</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-6 rounded-xl border border-gray-200 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1">
          <h3 className="font-bold text-xl text-[#29234B] mb-4">Administrative Controls</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Strict access controls based on role requirements</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Regular staff training on data protection policies</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Incident response and breach notification procedures</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProtectionSection;