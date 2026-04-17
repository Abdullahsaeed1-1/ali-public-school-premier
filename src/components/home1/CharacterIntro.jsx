import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaUsers,
  FaShieldAlt,
  FaStar,
  FaTrophy,
  FaArrowRight
} from 'react-icons/fa';
import { GiStoneBlock } from 'react-icons/gi';

const CharacterIntro = () => {
  const coreValues = [
    { icon: FaShieldAlt, title: "Confidence", color: "text-[#29234B]" },
    { icon: FaHeart, title: "Empathy", color: "text-[#D4AF37]" },
    { icon: FaStar, title: "Honesty", color: "text-[#10B981]" },
    { icon: FaUsers, title: "Cooperation", color: "text-[#29234B]" },
    { icon: GiStoneBlock, title: "Resilience", color: "text-[#D4AF37]" },
    { icon: FaTrophy, title: "Leadership", color: "text-[#10B981]" }
  ];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#29234B]/5 to-[#D4AF37]/5 rounded-full mb-6 border border-[#D4AF37]/20">
            <FaHeart className="mr-2 text-[#D4AF37]" />
            <span className="font-semibold text-[#29234B]">Character Building</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
            CHARACTER & VALUES
          </h2>
          <p className="text-xl text-[#29234B]/70 max-w-3xl mx-auto leading-relaxed animate-text-slide">
            Growing Kinder, Braver, Better Humans
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-full hover:shadow-xl transition-all duration-500">
              <h3 className="font-heading text-2xl font-bold text-[#29234B] mb-6">
                Holistic Development
              </h3>
              <p className="text-[#29234B]/80 mb-6 leading-relaxed">
                At APS, we educate the whole child — mind, heart and character.
                Academic excellence is strengthened by leadership, responsibility and compassion.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#29234B]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FaUsers className="text-[#29234B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#29234B] mb-1">House System</h4>
                    <p className="text-[#29234B]/70 text-sm">
                      Healthy competitions fostering teamwork, discipline and community identity
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FaTrophy className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#29234B] mb-1">Leadership Roles</h4>
                    <p className="text-[#29234B]/70 text-sm">
                      Head boy/girl, prefects, class monitors and event leadership opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FaHeart className="text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#29234B] mb-1">Community Service</h4>
                    <p className="text-[#29234B]/70 text-sm">
                      Cleanliness drives, charity events, tree-planting and civic responsibility
                    </p>
                  </div>
                </div>
              </div>
              {/*               
              <Link 
                to="/charactervalues"
                className="inline-flex items-center bg-gradient-to-r from-[#29234B] to-[#3D366A] text-white px-6 py-3 rounded-lg font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group shadow-lg"
              >
                Explore Character Programme
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link> */}
            </div>
          </div>

          {/* Right Content - Core Values */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-full">
              <h3 className="font-heading text-2xl font-bold text-[#29234B] mb-6">
                Our Core Values
              </h3>
              <p className="text-[#29234B]/80 mb-6">
                Six pillars that form the foundation of our character education programme
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-gray-200 hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${value.color === 'text-[#29234B]' ? 'from-[#29234B]/10 to-[#29234B]/5' :
                        value.color === 'text-[#D4AF37]' ? 'from-[#D4AF37]/10 to-[#D4AF37]/5' :
                          'from-[#10B981]/10 to-[#10B981]/5'
                      } flex items-center justify-center mb-3 mx-auto`}>
                      <value.icon className={`text-lg ${value.color}`} />
                    </div>
                    <h4 className={`font-bold text-center ${value.color}`}>
                      {value.title}
                    </h4>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Activities Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Buddy Programme",
              desc: "Older students mentor younger ones",
              color: "from-[#29234B] to-[#3D366A]"
            },
            {
              title: "Morning Circle",
              desc: "Daily community building time",
              color: "from-[#D4AF37] to-[#C19C2E]"
            },
            {
              title: "Community Projects",
              desc: "Real-world service learning",
              color: "from-[#10B981] to-[#0DA271]"
            },
            {
              title: "Reading Sessions",
              desc: "Literature for character growth",
              color: "from-[#29234B] to-[#3D366A]"
            }
          ].map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${activity.color} mb-4`}></div>
              <h4 className="font-bold text-[#29234B] mb-2 group-hover:text-[#29234B] transition-colors duration-300">
                {activity.title}
              </h4>
              <p className="text-[#29234B]/70 text-sm">
                {activity.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes text-focus {
          from {
            letter-spacing: -0.5px;
            opacity: 0.7;
          }
          to {
            letter-spacing: normal;
            opacity: 1;
          }
        }
        
        @keyframes text-slide {
          from {
            transform: translateX(-10px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-text-focus {
          animation: text-focus 0.8s ease-out forwards;
        }
        
        .animate-text-slide {
          animation: text-slide 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default CharacterIntro;