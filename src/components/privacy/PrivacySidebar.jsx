import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaChevronRight } from 'react-icons/fa';

const PrivacySidebar = ({ sections, activeSection, onSectionClick }) => {
  return (
    <div className="lg:w-1/4">
      <div className="sticky top-24 bg-white rounded-xl shadow-lg border border-gray-200 p-6 animate-slide-in-right">
        <h3 className="font-heading text-xl font-bold text-[#29234B] mb-6 flex items-center">
          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mr-3">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
          </div>
          Policy Sections
        </h3>
        <nav className="space-y-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-500 animate-fade-in-up ${
                activeSection === section.id
                  ? 'bg-[#29234B] text-white shadow-lg scale-[1.02] border border-[#D4AF37]/30'
                  : 'text-[#29234B] hover:bg-[#29234B]/5 hover:text-[#29234B] hover:scale-[1.01] border border-transparent hover:border-[#D4AF37]/20'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center">
                <section.icon className={`mr-3 transition-all duration-300 ${
                  activeSection === section.id ? 'text-[#D4AF37] scale-110' : 'text-[#29234B]/60'
                }`} />
                <span className="font-medium">{section.title}</span>
              </div>
              <FaChevronRight className={`transform transition-all duration-300 ${
                activeSection === section.id ? 'rotate-90 text-[#D4AF37]' : 'text-[#29234B]/40'
              }`} />
            </button>
          ))}
        </nav>
        
        <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <h4 className="font-bold text-[#29234B] mb-4">Quick Contact</h4>
          <div className="space-y-3">
            <a 
              href="mailto:privacy@alipublicschool.edu.pk" 
              className="flex items-center text-[#29234B]/70 hover:text-[#29234B] transition-all duration-300 group"
            >
              <FiMail className="mr-3 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="group-hover:translate-x-1 transition-transform">privacy@alipublicschool.edu.pk</span>
            </a>
            <a 
              href="tel:+923340813562" 
              className="flex items-center text-[#29234B]/70 hover:text-[#29234B] transition-all duration-300 group"
            >
              <FiPhone className="mr-3 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="group-hover:translate-x-1 transition-transform">+92 334 0813562</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySidebar;