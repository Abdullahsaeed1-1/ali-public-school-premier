import React from 'react';
import {
  MdClass,
  MdToys,
  MdHealthAndSafety
} from 'react-icons/md';
import { FaBook, FaPaintBrush, FaTree, FaLaptop, FaChalkboardTeacher } from 'react-icons/fa';

const CampusHighlights = () => {
  const highlights = [
    {
      title: "8 Bright Classrooms",
      icon: MdClass,
      description: "Spacious, well-lit classrooms with modern furniture and learning aids",
      features: ["Natural lighting", "Smart boards", "Comfortable seating", "Learning corners"],
      color: "from-[#29234B] to-[#3D366A]"
    },
    {
      title: "Early Years Discovery Room",
      icon: MdToys,
      description: "Specialized space for sensory play and early childhood development",
      features: ["Sensory toys", "Soft play area", "Interactive walls", "Creative zones"],
      color: "from-[#D4AF37] to-[#C19C2E]"
    },
    {
      title: "Reading Loft/Library",
      icon: FaBook,
      description: "Cozy reading space with extensive collection of age-appropriate books",
      features: ["Comfortable seating", "Digital catalog", "Storytelling area", "Quiet zones"],
      color: "from-[#10B981] to-[#0DA271]"
    },
    {
      title: "Art & Imagination Studio",
      icon: FaPaintBrush,
      description: "Creative space for artistic expression with various art materials",
      features: ["Art supplies", "Display walls", "Wash stations", "Project space"],
      color: "from-[#29234B] to-[#3D366A]"
    },
    {
      title: "Outdoor Learning Garden",
      icon: FaTree,
      description: "Safe outdoor area with eco-grass, rubber flooring and shaded deck",
      features: ["Eco-friendly grass", "Rubber safety flooring", "Shaded areas", "Learning stations"],
      color: "from-[#D4AF37] to-[#C19C2E]"
    },
    {
      title: "AI & Digital Learning Corner",
      icon: FaLaptop,
      description: "Technology hub with interactive boards and supervised learning",
      features: ["Interactive whiteboards", "Tablet stations", "Coding tools", "Supervised access"],
      color: "from-[#10B981] to-[#0DA271]"
    },
    {
      title: "Medical & Wellness Room",
      icon: MdHealthAndSafety,
      description: "Fully equipped medical facility with trained staff",
      features: ["First aid supplies", "Resting beds", "Health monitoring", "Emergency protocols"],
      color: "from-[#29234B] to-[#3D366A]"
    },
    {
      title: "Teacher Workroom",
      icon: FaChalkboardTeacher,
      description: "Dedicated space for teacher planning and collaboration",
      features: ["Planning stations", "Resource library", "Meeting area", "Technology access"],
      color: "from-[#D4AF37] to-[#C19C2E]"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
            Campus Highlights
          </h2>
          <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
            Comprehensive infrastructure supporting every aspect of school life
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${highlight.color} text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <highlight.icon className="text-2xl mr-3" />
                  <h3 className="font-bold text-lg">{highlight.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{highlight.description}</p>
                <ul className="space-y-1">
                  {highlight.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusHighlights;