import React from 'react';

const LegacyHero = () => {
  return (
    <div className="relative bg-cream pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-emerald"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Subtitle */}
          <div className="mb-4 md:mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-secondary font-bold tracking-[0.2em] uppercase text-sm md:text-base">
              <div className="w-8 h-0.5 bg-secondary"></div>
              <div className="flex items-center mb-8 animate-slide-in-left">

              </div>
              OUR JOURNEY
              <div className="w-8 h-0.5 bg-secondary"></div>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6 leading-tight animate-fade-in-up delay-100">
            A LEGACY OF <span className="text-secondary">TRANSFORMATION</span>
          </h1>

          {/* Description */}
          <p className="font-body text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
            How one man's journey from a family unable to read, to the halls of UK universities, changed the future of education in Peshawar.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up delay-300">
            <div className="w-16 h-1 bg-primary/30 rounded-full"></div>
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <div className="w-16 h-1 bg-primary/30 rounded-full"></div>
          </div>

          {/* Stats or Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in-up delay-400">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
              <div className="text-xs md:text-sm text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">1000+</div>
              <div className="text-xs md:text-sm text-gray-600">Students Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">3</div>
              <div className="text-xs md:text-sm text-gray-600">Generations Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">1</div>
              <div className="text-xs md:text-sm text-gray-600">Visionary Dream</div>
            </div>
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