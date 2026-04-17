import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaPenNib, FaBrain, FaBookOpen, FaUsers, FaGraduationCap } from 'react-icons/fa';
import gardenImage from '../../assets/images/campus/garden.jpeg';

const JuniorSchoolSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const academicFocus = [
        {
            icon: <FaGraduationCap className="text-xl" />,
            text: "Structured academic progression"
        },
        {
            icon: <FaPenNib className="text-xl" />,
            text: "Development of writing and comprehension"
        },
        {
            icon: <FaBrain className="text-xl" />,
            text: "Logical reasoning and mathematical thinking"
        },
        {
            icon: <FaUserGraduate className="text-xl" />,
            text: "Encouraging independent study habits"
        },
        {
            icon: <FaUsers className="text-xl" />,
            text: "Confidence in classroom participation"
        }
    ];

    return (
        <section ref={ref} className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-6xl mx-auto"
                >
                    {/* Main Card with Junior School Theme */}
                    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">
                        
                        {/* Header - Navy Background */}
                        <div className="bg-[#29234B] px-8 py-10 text-center md:text-left relative">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <FaBookOpen className="text-9xl text-white" />
                            </div>
                            <div className="relative z-10">
                                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
                                    Development Phase
                                </span>
                                <h2 className="font-heading text-3xl md:text-5xl text-white font-bold mb-4">
                                    PRIMARY YEARS PROGRAMME
                                </h2>
                                <p className="text-gray-300 font-medium text-lg tracking-wide uppercase">
                                    Grades 1 – 5
                                </p>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                
                                {/* Left: Visual Age Identifier */}
                                <motion.div variants={cardVariants} className="flex justify-center order-2 lg:order-1">
                                    <div className="relative">
                                        <img 
                                            src={gardenImage} 
                                            alt="School Garden" 
                                            className="w-64 h-64 md:w-80 md:h-80 rounded-3xl shadow-xl object-cover border-4 border-[#D4AF37]"
                                        />
                                    </div>
                                </motion.div>

                                {/* Right: Programme Emphasis */}
                                <motion.div variants={cardVariants} className="order-1 lg:order-2">
                                    <h3 className="font-heading text-2xl text-[#29234B] font-bold mb-6">
                                        Independence in Learning
                                    </h3>
                                    <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                                        During the primary years, students gradually develop greater independence in learning and stronger academic discipline, preparing them for future success.
                                    </p>
                                    
                                    <div className="space-y-4">
                                        {academicFocus.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                variants={cardVariants}
                                                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border-r-4 border-[#29234B] group hover:bg-[#D4AF37] transition-all duration-300"
                                            >
                                                <div className="text-[#29234B] group-hover:text-white transition-colors">
                                                    {item.icon}
                                                </div>
                                                <span className="font-body font-bold text-[#29234B] group-hover:text-white transition-colors text-sm">
                                                    {item.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Curriculum Note */}
                            <motion.div 
                                variants={cardVariants}
                                className="mt-16 py-6 border-t border-gray-100 text-center"
                            >
                                <p className="text-[#29234B] font-semibold">
                                    Following the <span className="text-[#D4AF37]">Oxford Curriculum</span> for Global Standards
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default JuniorSchoolSection;