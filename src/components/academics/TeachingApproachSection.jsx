import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaLightbulb, FaBrain, FaComments, FaChalkboardTeacher, FaCheckCircle } from 'react-icons/fa';

const TeachingApproachSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    const philosophyPoints = [
        {
            icon: <FaComments />,
            title: "Interactive Learning",
            description: "APS Premier adopts modern methods designed to support the learning needs of young students through active participation."
        },
        {
            icon: <FaBrain />,
            title: "Concept Mastery",
            description: "Our philosophy focuses on concept-based teaching rather than rote memorisation for deeper understanding."
        },
        {
            icon: <FaLightbulb />,
            title: "Curiosity & Inquiry",
            description: "Encouraging curiosity and questioning to help students explore the world around them with an open mind."
        },
        {
            icon: <FaUserGraduate />,
            title: "Confident Communication",
            description: "Developing confidence in communication and public speaking from a very early age."
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-6xl mx-auto"
                >
                    {/* --- Section Header --- */}
                    <motion.div variants={cardVariants} className="text-center mb-16">
                        <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                            Our Methodology
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl text-[#29234B] font-bold mb-6">
                            TEACHING APPROACH
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            APS Premier adopts modern and effective teaching methods that are specifically designed to support the unique learning needs of young students.
                        </p>
                    </motion.div>

                    {/* --- Philosophy Grid --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {philosophyPoints.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="flex gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D4AF37]/50 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#29234B] text-[#D4AF37] flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#29234B] text-xl mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- Teachers & Mentorship Section --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={cardVariants} className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                {/* Placeholder for Teacher-Student interaction image */}
                                <img 
                                    src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800" 
                                    alt="Mentorship at APS" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-6 rounded-2xl shadow-xl hidden md:block">
                                <p className="text-[#29234B] font-bold text-center">
                                    <span className="text-3xl block">100%</span>
                                    Individual Attention
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={cardVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#29234B] mb-6">
                                    The Role of Mentors
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Teachers play an important role not only in delivering lessons but also in <strong>mentoring students</strong> and supporting their overall academic and personal development.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    "Individual attention to every student",
                                    "Mentorship & character building",
                                    "Support for academic development",
                                    "Safe and nurturing learning environment"
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#D4AF37] flex-shrink-0" />
                                        <span className="text-[#29234B] font-semibold">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default TeachingApproachSection;