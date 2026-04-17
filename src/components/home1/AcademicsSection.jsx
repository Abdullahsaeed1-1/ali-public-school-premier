import React from 'react';
import { FaShapes, FaBookOpen, FaPalette, FaArrowRight, FaChild } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AcademicsSection = () => {
  // Updated Levels: Strictly Pre-Nursery to Class 5
  const levels = [
    {
      title: "Early Years",
      age: "Pre-Nursery & Nursery",
      desc: "Focus on sensory play and social skills",
      icon: <FaChild />
    },
    {
      title: "Foundation",
      age: "KG & Prep",
      desc: "Introducing phonics, basic numeracy and creative expression",
      icon: <FaShapes />
    },
    {
      title: "Lower Primary",
      age: "Class 1 - 3",
      desc: "Building strong foundations in Mathematics,Languages(English & Urdu) and Sciences(Natural & Social)",
      icon: <FaPalette />
    },
    {
      title: "Upper Primary",
      age: "Class 4 - 5",
      desc: "Developing critical thinking, project-based learning and academic discipline",
      icon: <FaBookOpen />
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            The Foundation Years
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#29234B] font-bold mb-6">
            ACADEMIC PATHWAYS
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            Learning at APS Premier is about more than books. It’s about building a solid foundation through exploration and creativity.
          </p>
        </div>

        {/* --- Levels Offered Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {levels.map((level, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-100 p-8 rounded-2xl text-center group hover:shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto bg-[#29234B]/5 rounded-2xl flex items-center justify-center text-3xl text-[#29234B] mb-6 group-hover:bg-[#29234B] group-hover:text-[#D4AF37] transition-all duration-300 transform group-hover:rotate-6">
                {level.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-[#29234B] mb-2">
                {level.title}
              </h3>
              <p className="font-body text-[#D4AF37] font-bold text-xs tracking-widest uppercase mb-4">
                {level.age}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {level.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Button --- */}
        <div className="text-center">
          <Link 
            to="/academicspage" 
            className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#29234B] font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-[#29234B] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Full Curriculum <FaArrowRight className="text-sm" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AcademicsSection;