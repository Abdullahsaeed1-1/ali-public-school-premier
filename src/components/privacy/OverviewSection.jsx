import React from 'react';
import { FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const OverviewSection = ({ privacyPoints }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-700 animate-section-enter">
      <div className="flex items-center mb-8 animate-glow">
        <div className="w-16 h-16 rounded-2xl bg-[#FAFAFA] flex items-center justify-center mr-6 animate-pulse-subtle border border-[#D4AF37]/20">
          <FaShieldAlt className="text-[#29234B] text-2xl" />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold text-[#29234B] mb-2 animate-text-focus">
            Overview & Commitment
          </h2>
          <p className="text-[#29234B]/70 animate-text-slide">
            Our dedication to protecting your privacy
          </p>
        </div>
      </div>
      
      <div className="prose max-w-none">
        <p className="text-[#29234B]/80 text-lg mb-6 leading-relaxed animate-fade-in-up">
          At <span className="font-bold text-[#29234B]">Ali Public School</span>, we are committed to protecting 
          the privacy and security of all personal information collected from students, 
          parents, guardians, staff, and visitors.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {privacyPoints.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1 animate-card-float bg-gradient-to-br from-white to-[#FAFAFA]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="font-bold text-xl text-[#29234B] mb-4 flex items-center animate-text-focus">
                <FaCheckCircle className="text-[#D4AF37] mr-3 animate-spin-slow" />
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.points.map((point, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start animate-fade-in-up"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 animate-pulse"></div>
                    <span className="text-[#29234B]/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;