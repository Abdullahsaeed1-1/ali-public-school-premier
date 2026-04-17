import React from 'react';
import { FaFileContract } from 'react-icons/fa';

const RightSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-700 animate-section-enter">
      <h2 className="font-heading text-3xl font-bold text-[#29234B] mb-6 flex items-center animate-text-focus">
        <FaFileContract className="text-[#D4AF37] mr-4 animate-bounce-slow" />
        Your Rights & Responsibilities
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#10B981]/10 to-transparent p-6 rounded-xl border border-gray-200 hover:border-[#10B981]/40 transition-all duration-500 hover:-translate-y-1">
          <h3 className="font-bold text-xl text-[#29234B] mb-4">Parental Rights</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#10B981] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Right to access your child's information</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#10B981] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Right to request correction of inaccurate data</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#10B981] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Right to withdraw consent for non-essential processing</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-6 rounded-xl border border-gray-200 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1">
          <h3 className="font-bold text-xl text-[#29234B] mb-4">Your Responsibilities</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Keep contact information updated with the school</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Report any data inaccuracies promptly</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 animate-pulse"></div>
              <span className="text-[#29234B]/80">Follow school policies regarding information sharing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSection;