import React from 'react';

const LegacyHero = () => {
  return (
    <div className="relative bg-cream pt-28 md:pt-36 lg:pt-40 pb-10 md:pb-14 overflow-hidden">
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-emerald"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Subtitle */}
          <div className="mb-4 md:mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-secondary font-bold tracking-[0.2em] uppercase text-sm md:text-base">
              <div className="w-8 h-0.5 bg-secondary"></div>
              OUR JOURNEY
              <div className="w-8 h-0.5 bg-secondary"></div>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-bold leading-[1.05] tracking-tight max-w-6xl mx-auto mb-5 md:mb-6 animate-fade-in-up delay-100">
            <span className="block">A LEGACY OF</span>
            <span className="block text-secondary mt-1 sm:mt-2">TRANSFORMATION</span>
          </h1>

          {/* Description */}
          <p className="font-body text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-6 md:mb-8 px-1 sm:px-0 animate-fade-in-up delay-200">
            How one man's journey from a family unable to read, to the halls of UK universities, changed the future of education in Peshawar.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-2 animate-fade-in-up delay-300">
            <div className="w-16 h-1 bg-primary/30 rounded-full"></div>
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <div className="w-16 h-1 bg-primary/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default LegacyHero;