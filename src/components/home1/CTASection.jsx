import React from 'react';
import { FaWhatsapp, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import prospectus from '../../assets/prospectus.pdf';

const CTASection = () => {
  return (
    // Pura Background WHITE
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      
      {/* Background Decorative Pattern (Subtle) */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-light -skew-x-12 opacity-50 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* --- Text Side --- */}
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-3 block animate-fade-in">
              Join Our Community
            </span>
            
            {/* Heading: Deep Purple */}
            <h2 className="font-heading text-4xl md:text-5xl text-primary font-bold mb-4 leading-tight">
              LIMITED SEATS
            </h2>
            
            <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-8 lg:mb-0">
              Secure your child's future in a purpose-built environment designed for curiosity and confidence. Download our prospectus to learn more.
            </p>
          </div>

          {/* --- Buttons Side --- */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto justify-center">
            
            {/* WhatsApp Button (Gold Background) */}
            <a 
              href="https://wa.me/923340813562" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-secondary text-primary font-subheading font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Prospectus Button (Purple Border, White Bg) */}
            <a 
              href={prospectus} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-white border-2 border-primary text-primary font-subheading font-bold py-4 px-8 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm"
            >
              <FaFileDownload className="text-lg group-hover:animate-bounce" />
              <span>Get Prospectus</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;