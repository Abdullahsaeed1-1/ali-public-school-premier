import React from 'react';
import { FaGraduationCap, FaLayerGroup, FaBalanceScale, FaShieldAlt, FaChartLine, FaUserCheck } from 'react-icons/fa';

const MissionSection = () => {
  // Core commitments based on the brochure text
  const commitments = [
    { 
      icon: <FaChartLine />, 
      title: "High Academic Standards",
      desc: "Excellence in every lesson"
    },
    { 
      icon: <FaLayerGroup />, 
      title: "Structured Teaching",
      desc: "Effective classroom methods"
    },
    { 
      icon: <FaBalanceScale />, 
      title: "Values and Traditions",
      desc: "Character & ethics focus"
    },
    { 
      icon: <FaShieldAlt />, 
      title: "Disciplined Environment",
      desc: "Safe and secure environment"
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor (Subtle Branding Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#29234B]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- PART 1: VISION & PURPOSE --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            The Foundation of Our School
          </span>
          
          <h2 className="font-heading text-3xl md:text-5xl text-[#29234B] font-bold mb-8">
            A VISION FOR EXCELLENCE
          </h2>
          
          <div className="relative p-8 md:p-12 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
            {/* Decorative Quotes */}
            <span className="absolute top-4 left-4 text-6xl text-[#D4AF37]/20 font-serif">“</span>
            
            <p className="font-body text-xl md:text-2xl text-[#29234B] leading-relaxed font-light italic">
              Ali Public School – Premier Campus has been founded with a clear purpose: to provide young learners with a strong academic foundation in a nurturing and forward-thinking educational environment.
            </p>
            
            <span className="absolute bottom-4 right-4 text-6xl text-[#D4AF37]/20 font-serif transform rotate-180">“</span>
          </div>
          
          <p className="mt-10 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our educational approach is centred on developing well-rounded individuals who are prepared for future academic success and responsible citizenship.
          </p>
        </div>

        {/* --- PART 2: OUR COMMITMENTS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#D4AF37]/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#29234B]/5 rounded-2xl flex items-center justify-center text-[#29234B] text-3xl mb-5 group-hover:bg-[#29234B] group-hover:text-[#D4AF37] transition-all">
                {item.icon}
              </div>
              <h4 className="font-heading text-base font-bold text-[#29234B] tracking-wide text-center mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 text-xs text-center uppercase tracking-widest">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionSection;