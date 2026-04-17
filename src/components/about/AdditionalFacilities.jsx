import React from 'react';
import { FaUserTie, FaDoorOpen, FaTint, FaPuzzlePiece, FaChalkboard, FaDesktop, FaTree } from 'react-icons/fa';
import activities from "../../assets/images/campus/activities.jpeg";
import canteen from "../../assets/images/campus/canteen.jpeg";
import classroomImg from "../../assets/images/campus/classroom.jpeg";
import gardenImg from "../../assets/images/campus/greenlearning.jpeg";
import kgImg from "../../assets/images/campus/kg.jpeg";
import learningImg from "../../assets/images/campus/talking.png";
import playareaImg from "../../assets/images/campus/swings.jpeg";
import principalOffice from "../../assets/images/pages/principaloffice.png";
import schoolOverview from "../../assets/images/pages/schoolfront.png";

const AdditionalFacilities = () => {
  const facilities = [
    {
      title: "Activities",
      icon: FaUserTie,
      description: "Engaging activities for all students",
      image: activities
    },
    {
      title: "Cafeteria",
      icon: FaDoorOpen,
      description: "Healthy meal options and dining area",
      image: canteen
    },
    {
      title: "Smart Classrooms",
      icon: FaTint,
      description: "Modern learning spaces with technology",
      image: classroomImg
    },
    {
      title: "Garden Area",
      icon: FaPuzzlePiece,
      description: "Nature learning and eco-friendly space",
      image: gardenImg
    },
    {
      title: "Learning Corner",
      icon: FaChalkboard,
      description: "Interactive learning spaces for students",
      image: learningImg
    },
    {
      title: "KG Classes",
      icon: FaDesktop,
      description: "Specialized early childhood spaces",
      image: kgImg
    },
    {
      title: "Principal's Office",
      icon: FaUserTie,
      description: "Administrative center for school leadership",
      image: principalOffice
    },
    {
      title: "School Entrance",
      icon: FaDoorOpen,
      description: "Welcoming entrance with secure access",
      image: schoolOverview
    },
    {
      title: "Play Area & Swings",
      icon: FaTree,
      description: "Safe outdoor play and recreation space",
      image: playareaImg
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
            Additional Facilities
          </h2>
          <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
            Supporting every aspect of student development and well-being
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-start p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-10 h-10 rounded-lg ${index % 3 === 0 ? 'bg-gradient-to-br from-[#29234B]/10 to-[#29234B]/5' :
                  index % 3 === 1 ? 'bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5' :
                    'bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5'
                  } flex items-center justify-center mr-4 flex-shrink-0`}>
                  <facility.icon className={`text-lg ${index % 3 === 0 ? 'text-[#29234B]' :
                    index % 3 === 1 ? 'text-[#D4AF37]' :
                      'text-[#10B981]'
                    }`} />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-[#29234B] mb-1">{facility.title}</h4>
                  <p className="text-[#29234B]/60 text-sm">{facility.description}</p>
                  {facility.image && (
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="mt-3 w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg shadow-sm border border-gray-100"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFacilities;