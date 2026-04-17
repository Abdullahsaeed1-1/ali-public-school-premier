import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import earlyedu from "../../assets/images/pages/schoolfront.png";
import schoolFront from "../../assets/images/campus/talking.png";
import interior from "../../assets/images/campus/student.png";
import greenry from "../../assets/images/campus/swings.jpeg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Content updated based on APS Premier Document
  const slides = [
    {
      id: 1,
      image: earlyedu,
      title: "WELCOME TO",
      highlight: "APS PREMIER",
      subtitle: "A modern primary school for a new generation with British-inspired design"
    },
    {
      id: 2,
      image: schoolFront,
      title: "NURTURING",
      highlight: "FUTURE LEADERS",
      subtitle: "Empowering young minds with curiosity, confidence and compassion"
    },
    {
      id: 3,
      image: interior,
      title: "PURPOSE-BUILT",
      highlight: "LEARNING",
      subtitle: "Crafted to give every child the best start in life with smart tools"
    },
    {
      id: 4,
      image: greenry,
      title: "ROOTED IN",
      highlight: "EXCELLENCE",
      subtitle: "Building on 15 years of educational heritage and strong values"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlideIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;

  return (
    // ✅ HEADER KE LIYE SPACE ADD KI HAI
    <section className="relative w-full h-screen overflow-hidden bg-primary pt-16"> {/* pt-16 added */}
      
      {/* --- HEADER SPACE FIX --- */}
      <div className="absolute top-0 left-0 w-full h-16 bg-transparent z-40"></div>

      {/* --- BACKGROUND SLIDES --- */}
      {slides.map((slide, index) => {
        const shouldLoadSlide = index === currentSlide || index === nextSlideIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out overflow-hidden ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Load only current and upcoming slide image to reduce initial page payload. */}
            {shouldLoadSlide && (
              <img
                src={slide.image}
                alt={slide.highlight}
                loading={index === currentSlide ? 'eager' : 'lazy'}
                fetchPriority={index === currentSlide ? 'high' : 'low'}
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-linear ${
                  index === currentSlide ? 'scale-100' : 'scale-100'
                }`}
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
            )}
            {/* Neutral dark overlay */}
            <div
              className="absolute inset-0 w-full h-full bg-black/40 pointer-events-none"
            ></div>
          </div>
        );
      })}

      {/* --- CONTENT CONTAINER --- */}
      <div className="absolute inset-0 flex flex-col justify-center z-20">
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 mt-8"> 
          <div className="w-full md:w-3/4 lg:w-2/3">
            
            {/* Tagline */}
            <p className="font-subheading text-secondary tracking-[0.25em] uppercase font-bold text-xs sm:text-sm md:text-base mb-2 animate-fade-up">
              {/* ALI PUBLIC SCHOOL • PREMIER CAMPUS */}
            </p>
            <div className="h-1 w-16 bg-secondary mb-6 rounded-full"></div>

            {/* Dynamic Headlines */}
            <h1 className="font-heading text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 animate-fade-up delay-100">
              {slides[currentSlide].title}
            </h1>
            <h2 className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200 font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-up delay-200">
              {slides[currentSlide].highlight}
            </h2>

            {/* Subtitle */}
            <p className="font-body text-gray-100 font-light tracking-wide text-sm sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-fade-up delay-300">
              {slides[currentSlide].subtitle}
            </p>


          </div>
        </div>
      </div>

      {/* --- SLIDE CONTROLS (Bottom Right) --- */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center space-x-4 hidden sm:flex">
        {/* Previous */}
        <button 
          onClick={() => setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)}
          className="p-3 border border-white/30 hover:bg-secondary hover:border-secondary hover:text-primary text-white rounded-full transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'bg-secondary w-8' : 'bg-white/50 hover:bg-white w-2'}`}
              style={{ height: 8 }}
            />
          ))}
        </div>

        {/* Next */}
        <button 
          onClick={() => setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1)}
          className="p-3 border border-white/30 hover:bg-secondary hover:border-secondary hover:text-primary text-white rounded-full transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default HeroSection;