import React from 'react';
import { FaCheckCircle, FaHistory } from 'react-icons/fa';
import campusImg1 from "../../assets/images/old_campus/old1.jpeg";
import campusImg2 from "../../assets/images/old_campus/old2.png";
import campusImg3 from "../../assets/images/old_campus/old3.png";

const WhoWeAre = () => {
  // Key Highlights from your text
  const highlights = [
    "Smart Classrooms & Digital Tools",
    "Safe, Green & Spacious Campuses",
    "Strong Parent-School Partnership"
  ];

  return (
    <section className="py-24 bg-light relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white -skew-x-12 transform translate-x-20 pointer-events-none opacity-60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- Left: Image Gallery --- */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              
              {/* Large Image - Top Left */}
              <div className="col-span-2 md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden shadow-xl border-4 border-white hover:shadow-2xl transition-shadow duration-500 group">
                <img 
                  src={campusImg1}
                  alt="APS Campus Heritage 1" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Small Image - Top Right */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white hover:shadow-2xl transition-shadow duration-500 group h-48 md:h-auto">
                <img 
                  src={campusImg2}
                  alt="APS Campus Heritage 2" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Small Image - Bottom Right */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white hover:shadow-2xl transition-shadow duration-500 group h-48 md:h-auto">
                <img 
                  src={campusImg3}
                  alt="APS Campus Heritage 3" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Decorative Back Box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-secondary rounded-2xl z-0 opacity-50"></div>
          </div>

          {/* --- Right: Content (Updated Text) --- */}
          <div className="w-full lg:w-1/2 space-y-8">
            
            {/* Tagline */}
            <div>
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold leading-tight">
                NURTURING FUTURE <br/>
                <span className="text-secondary">LEADERS</span>
              </h2>
            </div>

            {/* Main Description */}
            <div className="space-y-4 font-body text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2012, Ali Public School & College began with a simple belief that every child deserves access to exceptional education close to home.
              </p>
              <p>
                Today, we stand as one of Peshawar's most respected community schools, offering world-class learning from Early Years to College level. Our purpose-built campuses combine modern teaching, technology and strong values.
              </p>
            </div>

            {/* Key Highlights List */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm">
              <h4 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <FaHistory className="text-secondary" /> Key Highlights
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <FaCheckCircle className="text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
\

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;