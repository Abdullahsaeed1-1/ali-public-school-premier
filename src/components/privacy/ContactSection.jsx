import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 animate-scale-in">
      <h2 className="font-heading text-3xl font-bold text-[#29234B] mb-6 animate-text-focus">
        Contact Our Privacy Team
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-[#FAFAFA] to-transparent rounded-xl p-6 hover:shadow-lg transition-all duration-500 animate-slide-in-left border border-gray-200">
          <h3 className="font-bold text-xl text-[#29234B] mb-4 flex items-center">
            <FiMail className="text-[#D4AF37] mr-3 animate-pulse" />
            Email Queries
          </h3>
          <p className="text-[#29234B]/80 mb-4">
            For privacy-related questions or data access requests:
          </p>
          <a 
            href="mailto:dpo@alipublicschool.edu.pk" 
            className="inline-block bg-gradient-to-r from-[#29234B] to-[#3D366A] text-white px-6 py-3 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-lg border border-[#D4AF37]/20 animate-pulse-soft"
          >
            Contact Data Protection Officer
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl p-6 hover:shadow-lg transition-all duration-500 animate-slide-in-left border border-gray-200" style={{ animationDelay: '100ms' }}>
          <h3 className="font-bold text-xl text-[#29234B] mb-4 flex items-center">
            <FiPhone className="text-[#D4AF37] mr-3 animate-pulse" />
            Phone Support
          </h3>
          <p className="text-[#29234B]/80 mb-4">
            Available during school hours (8 AM - 4 PM):
          </p>
          <a 
            href="tel:+923340813562" 
            className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#C19C2E] text-[#29234B] px-6 py-3 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-bold shadow-lg border border-[#D4AF37]/30 animate-pulse-soft"
          >
            Call: +92 334 0813562
          </a>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in-up">
        <p className="text-[#29234B]/60 text-sm">
          <strong className="text-[#29234B]">Response Time:</strong> We aim to respond to all privacy-related inquiries within 48 hours during school days.
        </p>
      </div>
    </div>
  );
};

export default ContactSection;