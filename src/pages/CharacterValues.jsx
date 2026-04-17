import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaHeart,
    FaUsers,
    FaHandshake,
    FaShieldAlt,
    FaStar,
    FaLeaf,
    FaBookOpen,
    FaHandsHelping,
    FaTrophy,
    FaArrowLeft,
    FaCheckCircle,
    FaQuoteLeft,
    FaUserFriends,
    FaSchool,
    FaSeedling,
    FaCrown,
    FaTree,
    FaFutbol,
    FaMusic,
    FaGraduationCap,
    FaUsersCog,
    FaMedal,
    FaRibbon,
    FaFlag,
    FaMicrophone,
    FaPaintBrush,
    FaFlask,
    FaRecycle,
    FaDonate,
    FaHandHoldingHeart
} from 'react-icons/fa';
import { GiMedal, GiTargetArrows, GiStoneBlock, GiTrophyCup, GiLaurels } from 'react-icons/gi';
import { MdSportsCricket, MdTheaterComedy, MdScience } from 'react-icons/md';
import { SiQemu } from 'react-icons/si';

const CharacterValues = () => {
    const coreValues = [
        {
            title: "Confidence",
            icon: FaShieldAlt,
            description: "Building self-assurance and belief in one's abilities",
            color: "from-[#29234B] to-[#3D366A]",
            textColor: "text-[#29234B]"
        },
        {
            title: "Empathy",
            icon: FaHeart,
            description: "Understanding and sharing feelings of others",
            color: "from-[#D4AF37] to-[#C19C2E]",
            textColor: "text-[#D4AF37]"
        },
        {
            title: "Honesty",
            icon: FaStar,
            description: "Being truthful and building trust through integrity",
            color: "from-[#10B981] to-[#0DA271]",
            textColor: "text-[#10B981]"
        },
        {
            title: "Cooperation",
            icon: FaUsers,
            description: "Working together for common goals",
            color: "from-[#29234B] to-[#3D366A]",
            textColor: "text-[#29234B]"
        },
        {
            title: "Resilience",
            icon: GiStoneBlock,
            description: "Bouncing back from challenges with strength",
            color: "from-[#D4AF37] to-[#C19C2E]",
            textColor: "text-[#D4AF37]"
        },
        {
            title: "Leadership",
            icon: FaTrophy,
            description: "Leading through kindness and example",
            color: "from-[#10B981] to-[#0DA271]",
            textColor: "text-[#10B981]"
        }
    ];

    const characterActivities = [
        {
            title: "Buddy Programme",
            icon: FaUserFriends,
            description: "Older students mentor younger ones, fostering leadership and care",
            benefits: ["Cross-age friendships", "Leadership development", "Support system"]
        },
        {
            title: "Morning Circle Time",
            icon: FaSchool,
            description: "Daily gatherings to share, reflect and build community spirit",
            benefits: ["Emotional check-ins", "Community building", "Public speaking"]
        },
        {
            title: "House Activities",
            icon: FaHandsHelping,
            description: "Inter-house competitions promoting teamwork and school pride",
            benefits: ["Team spirit", "Healthy competition", "School identity"]
        },
        {
            title: "Community Help Projects",
            icon: FaHandshake,
            description: "Regular outreach programs serving local community needs",
            benefits: ["Social responsibility", "Real-world impact", "Empathy building"]
        },
        {
            title: "Reading-for-Character",
            icon: FaBookOpen,
            description: "Literature-based discussions exploring moral dilemmas and values",
            benefits: ["Critical thinking", "Moral reasoning", "Reading comprehension"]
        },
        {
            title: "Value of the Month",
            icon: GiMedal,
            description: "Monthly focus on a specific value through activities and recognition",
            benefits: ["Value reinforcement", "Consistent learning", "Positive recognition"]
        }
    ];

    const houseSystem = [
        {
            name: "Unity House",
            color: "bg-gradient-to-r from-[#29234B] to-[#3D366A]",
            icon: FaUsers,
            focus: "Teamwork & Collaboration",
            achievements: ["2023 Sports Champion", "Most Community Service Hours"]
        },
        {
            name: "Integrity House",
            color: "bg-gradient-to-r from-[#D4AF37] to-[#C19C2E]",
            icon: FaShieldAlt,
            focus: "Honesty & Responsibility",
            achievements: ["Academic Excellence Award", "Best Behavior Record"]
        },
        {
            name: "Courage House",
            color: "bg-gradient-to-r from-[#10B981] to-[#0DA271]",
            icon: GiStoneBlock,
            focus: "Resilience & Determination",
            achievements: ["Debate Competition Winners", "Most Improved House"]
        },
        {
            name: "Compassion House",
            color: "bg-gradient-to-r from-[#EC4899] to-[#DB2777]",
            icon: FaHeart,
            focus: "Empathy & Service",
            achievements: ["Community Outreach Award", "Peer Support Champions"]
        }
    ];

    const leadershipRoles = [
        {
            role: "Head Boy/Girl",
            icon: FaCrown,
            description: "Overall student leadership representing the school",
            responsibilities: ["Lead student council", "Represent school events", "Mentor younger students"]
        },
        {
            role: "Prefects",
            icon: FaUsersCog,
            description: "Discipline and guidance roles across grades",
            responsibilities: ["Monitor corridors", "Assist teachers", "Organize events"]
        },
        {
            role: "Class Monitors",
            icon: FaGraduationCap,
            description: "Daily classroom leadership and assistance",
            responsibilities: ["Maintain class discipline", "Assist teacher", "Collect assignments"]
        },
        {
            role: "Debate Team Leaders",
            icon: FaMicrophone,
            description: "Lead argumentation and public speaking teams",
            responsibilities: ["Organize debates", "Coach team members", "Represent in competitions"]
        },
        {
            role: "Event Organizers",
            icon: FaRibbon,
            description: "Plan and execute school events and functions",
            responsibilities: ["Event planning", "Coordinating teams", "Managing logistics"]
        },
        {
            role: "Assembly Leaders",
            icon: FaFlag,
            description: "Conduct morning assemblies and presentations",
            responsibilities: ["Lead prayers", "Make announcements", "Present news"]
        }
    ];

    const communityService = [
        {
            activity: "Cleanliness Drives",
            icon: FaRecycle,
            description: "School and neighborhood cleaning campaigns",
            impact: "Promotes civic responsibility and environmental awareness"
        },
        {
            activity: "Charity Events",
            icon: FaDonate,
            description: "Fundraising for local causes and communities",
            impact: "Develops empathy and social responsibility"
        },
        {
            activity: "Tree Planting",
            icon: FaTree,
            description: "Environmental conservation initiatives",
            impact: "Teaches environmental stewardship"
        },
        {
            activity: "Peer Support Program",
            icon: FaHandHoldingHeart,
            description: "Student-led academic and emotional support",
            impact: "Builds empathy and leadership skills"
        },
        {
            activity: "Elderly Visits",
            icon: FaHeart,
            description: "Visits to local senior care facilities",
            impact: "Develops respect and intergenerational understanding"
        },
        {
            activity: "Food Drives",
            icon: FaHandsHelping,
            description: "Collecting and distributing food to needy families",
            impact: "Teaches generosity and community service"
        }
    ];

    const sportsCulture = [
        {
            category: "Sports",
            icon: FaFutbol,
            activities: [
                { name: "Football", icon: FaFutbol },
                { name: "Cricket", icon: MdSportsCricket },
                { name: "Athletics", icon: GiTrophyCup }
            ],
            description: "Promoting physical fitness, teamwork, and sportsmanship"
        },
        {
            category: "Cultural Arts",
            icon: FaPaintBrush,
            activities: [
                { name: "Art Festivals", icon: FaPaintBrush },
                { name: "Drama Clubs", icon: MdTheaterComedy },
                { name: "Music Programs", icon: FaMusic }
            ],
            description: "Nurturing creativity, expression, and cultural appreciation"
        },
        {
            category: "Academic Competitions",
            icon: FaFlask,
            activities: [
                { name: "Science Fairs", icon: MdScience },
                { name: "Quran Recitation", icon: SiQemu },
                { name: "Debate Competitions", icon: FaMicrophone }
            ],
            description: "Encouraging academic excellence and intellectual growth"
        }
    ];

    const testimonials = [
        {
            quote: "The buddy programme helped my child develop incredible leadership skills while learning to care for others.",
            author: "Mrs. Ahmed, Parent",
            role: "Grade 5 Parent"
        },
        {
            quote: "Watching students grow in empathy through community projects has been the most rewarding experience.",
            author: "Mr. Khan, Teacher",
            role: "Social Studies Teacher"
        },
        {
            quote: "Morning circle time taught me to express myself confidently and listen to others with respect.",
            author: "Fatima, Student",
            role: "Grade 7 Student"
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
                    <div className="flex items-center mb-8 animate-slide-in-left">
                        <Link
                            to="/"
                            className="flex items-center text-[#29234B]/80 hover:text-[#29234B] transition-all duration-300 group"
                        >
                            <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
                            Back to Home
                        </Link>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 animate-pulse-gentle border border-[#D4AF37]/30 shadow-sm">
                            <FaHeart className="mr-2 text-[#D4AF37]" />
                            <span className="font-semibold text-[#D4AF37]">Holistic Education</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-text-focus text-[#29234B]">
                            CHARACTER & VALUES
                        </h1>
                        <p className="text-xl md:text-2xl text-[#29234B]/70 mb-6 leading-relaxed animate-text-slide">
                            Growing Kinder, Braver, Better Humans
                        </p>
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto mb-8 animate-fade-in-up border border-gray-200">
                            <p className="text-lg text-[#29234B] leading-relaxed">
                                At <span className="font-bold text-[#29234B]">APS</span>, we educate the whole child — mind, heart, and character.
                                Academic excellence is strengthened by leadership, responsibility, and compassion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
                {/* Core Values Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            Six pillars that form the foundation of our character education programme
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-section-enter"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 mx-auto animate-rotate-slow`}>
                                    <value.icon className="text-white text-2xl" />
                                </div>
                                <h3 className={`font-heading text-2xl font-bold ${value.textColor} text-center mb-3`}>
                                    {value.title}
                                </h3>
                                <p className="text-[#29234B]/70 text-center">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* House System Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            House System
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            Students participate in healthy competitions fostering teamwork, discipline, pride, and community identity
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {houseSystem.map((house, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-slide-in-left"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`h-3 ${house.color}`}></div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-100 flex items-center justify-center mr-4">
                                            <house.icon className={`text-xl ${house.color.split(' ')[1].replace('to-[', '').replace(']', '')}`} />
                                        </div>
                                        <h3 className="font-heading text-xl font-bold text-[#29234B]">
                                            {house.name}
                                        </h3>
                                    </div>
                                    <p className="text-[#29234B]/70 mb-4 font-medium">
                                        Focus: {house.focus}
                                    </p>
                                    <div className="border-t border-gray-100 pt-4">
                                        <h4 className="font-bold text-[#29234B] text-sm mb-2">Recent Achievements:</h4>
                                        <ul className="space-y-1">
                                            {house.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-[#29234B]/60">
                                                    <FaMedal className="text-[#D4AF37] mr-2 text-xs" />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Leadership Opportunities Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            Leadership Opportunities
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            Head boy/girl roles, prefectship, class monitors, debate teams, event leadership, assembly leaders
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leadershipRoles.map((role, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-section-enter"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] flex items-center justify-center mr-4">
                                        <role.icon className="text-[#29234B] text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-[#29234B]">
                                            {role.role}
                                        </h3>
                                        <p className="text-[#29234B]/60 text-sm">
                                            {role.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t border-gray-100 pt-4">
                                    <h4 className="font-bold text-[#29234B] text-sm mb-2">Key Responsibilities:</h4>
                                    <ul className="space-y-1">
                                        {role.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-[#29234B]/60">
                                                <FaCheckCircle className="text-[#10B981] mr-2 text-xs" />
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Community Service Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            Community Service
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            Students engage in cleanliness drives, charity events, tree-planting, peer support, and civic responsibility
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {communityService.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-slide-in-left"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 flex items-center justify-center mr-4">
                                        <service.icon className="text-[#10B981] text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-[#29234B]">
                                            {service.activity}
                                        </h3>
                                        <p className="text-[#29234B]/60 text-sm">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-[#10B981]/5 to-transparent border-l-4 border-[#10B981] p-4 rounded-r-lg">
                                    <p className="text-[#29234B] font-medium">
                                        <span className="font-bold text-[#10B981]">Impact:</span> {service.impact}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sports and Culture Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            Sports & Culture
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            Football, cricket, athletics, art festivals, drama clubs, Quran recitation competitions, science fairs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {sportsCulture.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-section-enter"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className={`w-14 h-14 rounded-xl ${index === 0 ? 'bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5' :
                                        index === 1 ? 'bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5' :
                                            'bg-gradient-to-br from-[#29234B]/10 to-[#29234B]/5'
                                        } flex items-center justify-center mr-4`}>
                                        <category.icon className={`text-xl ${index === 0 ? 'text-[#D4AF37]' :
                                            index === 1 ? 'text-[#10B981]' :
                                                'text-[#29234B]'
                                            }`} />
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-[#29234B]">
                                        {category.category}
                                    </h3>
                                </div>
                                <p className="text-[#29234B]/70 mb-6">
                                    {category.description}
                                </p>
                                <div className="space-y-3">
                                    {category.activities.map((activity, idx) => (
                                        <div key={idx} className="flex items-center p-3 bg-[#FAFAFA] rounded-lg hover:bg-gray-50 transition-all duration-300">
                                            <activity.icon className="text-[#29234B] mr-3" />
                                            <span className="font-medium text-[#29234B]">{activity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Character Activities Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            Character Activities
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            Hands-on programmes that bring our values to life
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {characterActivities.map((activity, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-section-enter group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-[#29234B] group-hover:to-[#3D366A] transition-all duration-300">
                                        <activity.icon className="text-[#29234B] text-xl group-hover:text-white transition-all duration-300" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-[#29234B] group-hover:text-[#29234B] transition-all duration-300">
                                        {activity.title}
                                    </h3>
                                </div>
                                <p className="text-[#29234B]/70 mb-4">
                                    {activity.description}
                                </p>
                                <div className="border-t border-gray-100 pt-4">
                                    <h4 className="font-bold text-[#29234B] text-sm mb-2">Key Benefits:</h4>
                                    <ul className="space-y-1">
                                        {activity.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-[#29234B]/60">
                                                <FaCheckCircle className="text-[#D4AF37] mr-2 text-xs" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
                            Voices from Our Community
                        </h2>
                        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
                            Hear what parents, students, and teachers say about our character programme
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white to-[#FAFAFA] rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-slide-in-left"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <FaQuoteLeft className="text-[#D4AF37] text-2xl mb-4" />
                                <p className="text-[#29234B] italic mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="font-bold text-[#29234B]">{testimonial.author}</p>
                                    <p className="text-[#29234B]/60 text-sm">{testimonial.role}</p>
                                </div>
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

export default CharacterValues;