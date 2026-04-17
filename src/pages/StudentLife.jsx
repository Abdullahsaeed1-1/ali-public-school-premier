import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaSchool,
    FaFlask,
    FaDesktop,
    FaBook,
    FaPaintBrush,
    FaFutbol,
    FaTint,
    FaShieldAlt,
    FaUsers,
    FaMicrophone,
    FaCrown,
    FaSun,
    FaBell,
    FaHeart,
    FaArrowLeft,
    FaStar,
    FaCheckCircle,
    FaGraduationCap,
    FaTree,
    FaMusic,
    FaLightbulb
} from 'react-icons/fa';
import { GiBasketballBall, GiSoccerBall, GiRunningShoe, GiBookshelf } from 'react-icons/gi';
import { MdScience, MdSportsCricket, MdTheaterComedy } from 'react-icons/md';

const StudentLife = () => {
    const facilities = [
        {
            title: "Modern Classrooms",
            icon: FaSchool,
            description: "Bright, airy classrooms with smart boards and comfortable seating",
            features: ["Natural lighting", "Smart boards", "Ergonomic furniture", "Interactive displays"]
        },
        {
            title: "Science Laboratories",
            icon: FaFlask,
            description: "Fully equipped labs for Physics, Chemistry, and Biology",
            features: ["Modern equipment", "Safety protocols", "Hands-on experiments", "Lab technicians"]
        },
        {
            title: "Computer Suites",
            icon: FaDesktop,
            description: "Latest computer systems with high-speed internet access",
            features: ["Latest hardware", "Software training", "Coding labs", "Digital literacy"]
        },
        {
            title: "Library & Reading Room",
            icon: FaBook,
            description: "Extensive collection of books, journals, and reading materials",
            features: ["Quiet study areas", "Digital resources", "Book clubs", "Research assistance"]
        },
        {
            title: "Art & Activity Rooms",
            icon: FaPaintBrush,
            description: "Creative spaces for art, music, and performing arts",
            features: ["Art supplies", "Musical instruments", "Drama studio", "Exhibition space"]
        },
        {
            title: "Sports Facilities",
            icon: FaFutbol,
            description: "Playgrounds and courts for various sports activities",
            features: ["Football field", "Basketball court", "Cricket pitch", "Athletics track"]
        },
        {
            title: "Health & Hygiene",
            icon: FaTint,
            description: "Clean drinking water and modern sanitation facilities",
            features: ["Water purifiers", "Modern toilets", "First aid room", "Health checks"]
        },
        {
            title: "Security & Safety",
            icon: FaShieldAlt,
            description: "CCTV surveillance and trained security staff",
            features: ["24/7 CCTV", "Security personnel", "Emergency protocols", "Safe campus"]
        }
    ];

    const clubs = [
        {
            name: "Science Club",
            icon: MdScience,
            description: "Explore scientific wonders through experiments and projects",
            activities: ["Science fairs", "Lab experiments", "Research projects", "Guest lectures"]
        },
        {
            name: "Reading Club",
            icon: GiBookshelf,
            description: "Cultivate love for literature and improve reading skills",
            activities: ["Book discussions", "Reading challenges", "Author visits", "Storytelling"]
        },
        {
            name: "Sports Club",
            icon: GiRunningShoe,
            description: "Develop physical fitness and team sports skills",
            activities: ["Team practices", "Inter-school matches", "Sports days", "Fitness training"]
        },
        {
            name: "Arts Society",
            icon: FaPaintBrush,
            description: "Express creativity through various art forms",
            activities: ["Art exhibitions", "Drama productions", "Music concerts", "Craft workshops"]
        },
        {
            name: "Debate Club",
            icon: FaMicrophone,
            description: "Enhance public speaking and critical thinking skills",
            activities: ["Debate competitions", "Model UN", "Public speaking", "Discussion forums"]
        },
        {
            name: "Leadership Circle",
            icon: FaCrown,
            description: "Develop leadership qualities and organizational skills",
            activities: ["Leadership workshops", "Event planning", "Peer mentoring", "Community projects"]
        }
    ];

    const dailySchedule = [
        {
            activity: "Morning Assembly",
            icon: FaSun,
            description: "Prayers, national anthem, announcements, and motivational talks",
            color: "from-[#29234B] to-[#3D366A]"
        },
        {
            activity: "Interactive Lessons",
            icon: FaGraduationCap,
            description: "Engaging classroom sessions with modern teaching methods",
            color: "from-[#D4AF37] to-[#C19C2E]"
        },
        {
            activity: "Sports Time",
            icon: GiBasketballBall,
            description: "Physical education and recreational sports activities",
            color: "from-[#10B981] to-[#0DA271]"
        },
        {
            activity: "Club Periods",
            icon: FaUsers,
            description: "Participation in various clubs and societies",
            color: "from-[#29234B] to-[#3D366A]"
        },
        {
            activity: "Moral Values Session",
            icon: FaHeart,
            description: "Discussions on ethics, character building, and social values",
            color: "from-[#D4AF37] to-[#C19C2E]"
        },
        {
            activity: "Reading Hour",
            icon: FaBook,
            description: "Silent reading and library time",
            color: "from-[#10B981] to-[#0DA271]"
        }
    ];

    const specialEvents = [
        {
            title: "Annual Sports Day",
            icon: GiSoccerBall,
            description: "Exciting sports competitions and athletic events",
            month: "February"
        },
        {
            title: "Science Exhibition",
            icon: FaLightbulb,
            description: "Showcasing student innovation and scientific projects",
            month: "March"
        },
        {
            title: "Cultural Festival",
            icon: FaMusic,
            description: "Celebrating arts, music, and cultural diversity",
            month: "April"
        },
        {
            title: "Debate Competition",
            icon: FaMicrophone,
            description: "Inter-school debate and public speaking contest",
            month: "August"
        },
        {
            title: "Art Exhibition",
            icon: FaPaintBrush,
            description: "Display of student artwork and creative projects",
            month: "October"
        },
        {
            title: "Community Service Week",
            icon: FaHeart,
            description: "Outreach programs and community engagement activities",
            month: "November"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-white">
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-[#FAFAFA] via-white to-[#FAFAFA] text-[#29234B] py-20 px-4 md:px-8 overflow-hidden border-b border-[#E5E7EB]">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/10 animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#10B981]/10 animate-float"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 animate-pulse-gentle border border-[#D4AF37]/30 shadow-sm">
                            <FaSchool className="mr-2 text-[#D4AF37]" />
                            <span className="font-semibold text-[#D4AF37]">Campus Experience</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-text-focus text-[#29234B]">
                            STUDENT LIFE
                        </h1>
                        <p className="text-xl md:text-2xl text-[#29234B]/70 mb-6 leading-relaxed animate-text-slide">
                            Vibrant, Inclusive, and Full of Discovery
                        </p>
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto mb-8 animate-fade-in-up border border-gray-200">
                            <p className="text-lg text-[#29234B] leading-relaxed">
                                Life at <span className="font-bold text-[#29234B]">APS</span> is designed to help students discover their interests,
                                develop talents, and grow holistically. Beyond academics, we provide a nurturing
                                environment where every student can thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
                {/* Facilities Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            Campus Facilities
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            State-of-the-art infrastructure supporting holistic development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-section-enter"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FAFAFA] to-gray-100 flex items-center justify-center mb-4">
                                    <facility.icon className="text-[#29234B] text-2xl" />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-[#29234B] mb-3">
                                    {facility.title}
                                </h3>
                                <p className="text-[#29234B]/70 mb-4 text-sm">
                                    {facility.description}
                                </p>
                                <div className="border-t border-gray-100 pt-4">
                                    <h4 className="font-bold text-[#29234B] text-sm mb-2">Features:</h4>
                                    <ul className="space-y-1">
                                        {facility.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-xs text-[#29234B]/60">
                                                <FaCheckCircle className="text-[#10B981] mr-2 text-xs" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clubs & Activities Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            Clubs & Activities
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            Diverse clubs that nurture talents and interests beyond academics
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clubs.map((club, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-slide-in-left"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${index % 3 === 0 ? 'bg-gradient-to-br from-[#29234B]/10 to-[#29234B]/5' :
                                        index % 3 === 1 ? 'bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5' :
                                            'bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5'
                                        } flex items-center justify-center mr-4`}>
                                        <club.icon className={`text-xl ${index % 3 === 0 ? 'text-[#29234B]' :
                                            index % 3 === 1 ? 'text-[#D4AF37]' :
                                                'text-[#10B981]'
                                            }`} />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-[#29234B]">
                                            {club.name}
                                        </h3>
                                        <p className="text-[#29234B]/60 text-sm">
                                            {club.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t border-gray-100 pt-4">
                                    <h4 className="font-bold text-[#29234B] text-sm mb-2">Key Activities:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {club.activities.map((activity, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-[#FAFAFA] text-[#29234B] text-xs rounded-full border border-gray-200"
                                            >
                                                {activity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Daily Life Schedule */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            A Day at APS
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            Morning assembly, interactive lessons, sports time, club periods, moral values sessions, reading hour
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {dailySchedule.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mr-4`}>
                                            <item.icon className="text-white text-lg" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#29234B]">{item.activity}</h3>
                                        </div>
                                    </div>
                                    <p className="text-[#29234B]/70 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#29234B]/10 to-[#29234B]/5 flex items-center justify-center mx-auto mb-4">
                                        <FaStar className="text-[#29234B] text-2xl" />
                                    </div>
                                    <h4 className="font-bold text-[#29234B] mb-2">Balanced Schedule</h4>
                                    <p className="text-[#29234B]/60 text-sm">Academic, physical, and creative activities</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 flex items-center justify-center mx-auto mb-4">
                                        <FaHeart className="text-[#D4AF37] text-2xl" />
                                    </div>
                                    <h4 className="font-bold text-[#29234B] mb-2">Character Building</h4>
                                    <p className="text-[#29234B]/60 text-sm">Daily moral values and ethics sessions</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 flex items-center justify-center mx-auto mb-4">
                                        <FaUsers className="text-[#10B981] text-2xl" />
                                    </div>
                                    <h4 className="font-bold text-[#29234B] mb-2">Social Development</h4>
                                    <p className="text-[#29234B]/60 text-sm">Team activities and collaborative learning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Special Events Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            Annual Events & Celebrations
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            Memorable events that make school life exciting and enriching
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specialEvents.map((event, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-section-enter group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${index % 3 === 0 ? 'bg-gradient-to-br from-[#29234B]/10 to-[#29234B]/5' :
                                        index % 3 === 1 ? 'bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5' :
                                            'bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5'
                                        } flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <event.icon className={`text-xl ${index % 3 === 0 ? 'text-[#29234B]' :
                                            index % 3 === 1 ? 'text-[#D4AF37]' :
                                                'text-[#10B981]'
                                            }`} />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-[#29234B]">
                                            {event.title}
                                        </h3>
                                        <div className="flex items-center mt-1">
                                            <span className="px-2 py-1 bg-[#FAFAFA] text-[#29234B] text-xs rounded border border-gray-200">
                                                {event.month}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[#29234B]/70">
                                    {event.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

            {/* Custom CSS for animations */}
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
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes pulse-soft {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.3);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
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
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(212, 175, 55, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
          }
        }
        
        @keyframes card-float {
          0%, 100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-5px) rotate(0.5deg);
          }
        }
        
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes row-enter {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes section-enter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
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
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-text-focus {
          animation: text-focus 0.8s ease-out forwards;
        }
        
        .animate-text-slide {
          animation: text-slide 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-card-float {
          animation: card-float 3s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 30s linear infinite;
        }
        
        .animate-row-enter {
          animation: row-enter 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-section-enter {
          animation: section-enter 0.7s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default StudentLife;