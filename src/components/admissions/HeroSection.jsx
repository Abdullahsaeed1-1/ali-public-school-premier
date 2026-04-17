import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-cream py-12 md:py-16 lg:py-24 border-b border-gold-10">
      <br/>
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-5 md:bottom-20 md:left-10 w-24 h-24 md:w-48 md:h-48 bg-secondary/5 rounded-full animate-float opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6 md:mb-8 animate-slide-down">
            <div className="w-8 h-1 md:w-16 md:h-1 bg-gradient-to-r from-primary to-secondary mr-2 md:mr-4"></div>


            
            <div className="flex items-center mb-8 animate-slide-in-left">

            </div>
            
            <span className="px-4 py-2 md:px-6 md:py-2 bg-white text-primary font-subheading font-semibold rounded-full border border-gold-10 shadow-sm text-sm md:text-base">
              ADMISSIONS
            </span>
            <div className="w-8 h-1 md:w-16 md:h-1 bg-gradient-to-r from-secondary to-primary ml-2 md:ml-4"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4 md:mb-6 leading-tight">
            Welcome to <span className="text-secondary relative inline-block">
              APS Premier
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-secondary to-emerald animate-pulse"></span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-body max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed px-4 animate-slide-up animation-delay-300">
            We are excited to welcome families seeking a nurturing and modern environment for their child's education and development.
          </p>


          {/* Responsive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-8 md:mt-12 lg:mt-16 max-w-3xl mx-auto animate-slide-up animation-delay-700">
            <div className="text-center p-3 md:p-4 bg-white rounded-xl border border-gold-10 shadow-sm">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">4</div>
              <div className="text-xs md:text-sm text-gray-600">Campuses</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white rounded-xl border border-gold-10 shadow-sm">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-xs md:text-sm text-gray-600">Years</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white rounded-xl border border-gold-10 shadow-sm">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">5000+</div>
              <div className="text-xs md:text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white rounded-xl border border-gold-10 shadow-sm">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-xs md:text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;