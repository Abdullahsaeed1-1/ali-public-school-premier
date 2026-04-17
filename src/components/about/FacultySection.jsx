import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaStar, FaAward, FaBook, FaChevronLeft, FaChevronRight, FaUniversity, FaBuilding } from 'react-icons/fa';

const FacultyCard = ({ faculty, index }) => {
    const facultyCardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: custom * 0.15
            }
        }),
        hover: {
            y: -5,
            scale: 1.02,
            boxShadow: "0 10px 25px rgba(41, 35, 75, 0.1)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    const getIconColor = (role) => {
        if (role.includes("Founder")) return "text-primary";
        if (role.includes("Principal")) return "text-accent";
        return "text-secondary";
    };

    return (
        <motion.div
            variants={facultyCardVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            custom={index}
            className="flex-shrink-0 w-72 md:w-80 bg-white rounded-xl shadow-lg border border-secondary/20 hover:shadow-xl transition-all duration-300 mx-2"
        >
            {/* Faculty Header */}
            <div className="p-5 border-b border-secondary/10">
                <div className="flex items-start justify-between mb-3">
                    <motion.div
                        className={`w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center`}
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={getIconColor(faculty.role)}>
                            <FaGraduationCap className="text-xl" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="text-secondary text-xs font-bold px-2 py-1 rounded-full bg-secondary/10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        {faculty.experience}
                    </motion.div>
                </div>

                <h3 className="font-heading text-lg font-bold text-primary mb-1">
                    {faculty.name}
                </h3>

                <p className={`font-body ${getIconColor(faculty.role)} font-medium text-sm`}>
                    {faculty.role}
                </p>
            </div>

            {/* Faculty Details */}
            <div className="p-5">
                <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                        <FaUniversity className={`text-secondary mt-0.5 flex-shrink-0 ${getIconColor(faculty.role)}`} />
                        <div>
                            <p className="font-body text-primary/90 text-xs font-semibold mb-0.5">Education:</p>
                            <p className="font-body text-primary/80 text-[11px] leading-relaxed">
                                {faculty.qualification}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <FaStar className={`text-secondary mt-0.5 flex-shrink-0 ${getIconColor(faculty.role)}`} />
                        <div>
                            <p className="font-body text-primary/90 text-xs font-semibold mb-0.5">Expertise:</p>
                            <p className="font-body text-primary/80 text-[11px] leading-relaxed">
                                {faculty.expertise}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="border-t border-secondary/10 pt-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className={`h-0.5 w-6 bg-secondary`}></div>
                        <h4 className="font-heading text-sm font-bold text-primary">Key Highlights</h4>
                    </div>

                    <ul className="space-y-2">
                        {faculty.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 bg-secondary`}></div>
                                <span className="font-body text-primary/80 text-[11px] leading-relaxed">
                                    {achievement}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const FacultySection = () => {
    const scrollContainerRef = useRef(null);

    const facultyMembers = [
        {
            name: "Ali Afridi FCA",
            role: "Founder",
            qualification: "British-educated Chartered Accountant (UK)",
            expertise: "Governance, Strategy & Organisational Leadership",
            experience: "Global Career",
            achievements: [
                "Former Senior Leader at KPMG UK",
                "Leadership roles at Cisco Systems",
                "Saudi Telecom Company (stc) Executive",
                "Expert in International Educational Standards"
            ]
        },
        {
            name: "Ms. Anum Imtiaz",
            role: "Principal",
            qualification: "MA Economics, MA English (UoP), CA Professional Studies",
            expertise: "Academic Guidance & Subject Leadership",
            experience: "5+ Years",
            achievements: [
                "Former Head of Business Studies (The City School)",
                "Senior O-Level Tutor",
                "Corporate Management & Academic Mentoring",
                "Expert in Student Engagement"
            ]
        },
        {
            name: "Head of Sciences",
            role: "Senior Faculty",
            qualification: "MSc Physics, Cambridge University",
            expertise: "STEM Education & Research",
            experience: "22 Years",
            achievements: ["National Science Award Winner", "Patent Holder", "STEM Workshop Leader"]
        },
        {
            name: "Head of Humanities",
            role: "Senior Faculty",
            qualification: "MA English Literature, Harvard University",
            expertise: "Critical Thinking & Creative Writing",
            experience: "16 Years",
            achievements: ["Author of 3 Books", "Debate Champion Trainer", "Literature Festival Organizer"]
        }
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center gap-3 mb-3">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <FaGraduationCap className="text-2xl text-secondary" />
                            </motion.div>
                            <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold">
                                Distinguished Leadership & Faculty
                            </h2>
                        </div>
                        <p className="font-subheading text-lg text-primary/70 max-w-3xl mx-auto">
                            Meet the visionaries and educators shaping the future at APS Premier
                        </p>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <p className="font-body text-sm text-primary/60">Scroll to view our team</p>
                        <div className="flex gap-2">
                            <motion.button onClick={scrollLeft} className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-primary hover:bg-secondary/10 shadow-sm"><FaChevronLeft /></motion.button>
                            <motion.button onClick={scrollRight} className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-primary hover:bg-secondary/10 shadow-sm"><FaChevronRight /></motion.button>
                        </div>
                    </div>

                    <div className="relative">
                        <div ref={scrollContainerRef} className="flex overflow-x-auto pb-6 gap-6 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
                            {facultyMembers.map((faculty, index) => (
                                <FacultyCard key={index} faculty={faculty} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacultySection;