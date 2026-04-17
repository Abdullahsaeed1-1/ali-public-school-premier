import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChild, FaBookReader, FaHashtag, FaComments, FaPalette, FaHeart } from 'react-icons/fa';
import campusImage from '../../assets/images/campus/student.png';

const EarlyYearsSection = () => {
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
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
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

    const coreFocus = [
        {
            icon: <FaBookReader className="text-xl" />,
            text: "Early literacy and phonics"
        },
        {
            icon: <FaHashtag className="text-xl" />,
            text: "Basic numeracy skills"
        },
        {
            icon: <FaComments className="text-xl" />,
            text: "Language and communication development"
        },
        {
            icon: <FaPalette className="text-xl" />,
            text: "Creative activities and structured play"
        },
        {
            icon: <FaHeart className="text-xl" />,
            text: "Social and emotional development"
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
                    {/* Main Card with Premium Branding */}
                    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">

                        {/* Header Section */}
                        <div className="bg-[#29234B] px-8 py-10 text-center md:text-left relative">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <FaChild className="text-9xl text-white" />
                            </div>
                            <div className="relative z-10">
                                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
                                    Foundation Phase
                                </span>
                                <h2 className="font-heading text-3xl md:text-5xl text-white font-bold mb-4">
                                    EARLY YEARS PROGRAMME
                                </h2>
                                <p className="text-gray-300 font-medium text-lg tracking-wide uppercase">
                                    Playgroup – Kindergarten
                                </p>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                                {/* Left: Text Content */}
                                <motion.div variants={cardVariants}>
                                    <h3 className="font-heading text-2xl text-[#29234B] font-bold mb-6">
                                        Supporting Holistic Development
                                    </h3>
                                    <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                                        The early years programme is specifically designed to support the holistic development of young learners, building the foundational skills necessary for future academic success.
                                    </p>

                                    <div className="grid grid-cols-1 gap-4">
                                        {coreFocus.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                variants={cardVariants}
                                                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border-l-4 border-[#D4AF37] group hover:bg-[#29234B] transition-all duration-300"
                                            >
                                                <div className="text-[#D4AF37] group-hover:text-white transition-colors">
                                                    {item.icon}
                                                </div>
                                                <span className="font-body font-bold text-[#29234B] group-hover:text-white transition-colors">
                                                    {item.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Right: Visual Impact */}
                                <motion.div variants={cardVariants} className="relative flex justify-center">
                                    <div className="relative">
                                        <img 
                                            src={campusImage} 
                                            alt="Campus" 
                                            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl shadow-2xl object-cover border-4 border-[#D4AF37]"
                                        />
                                    </div>
                                </motion.div>

                            </div>

                            {/* Tagline Footer */}
                            <motion.div
                                variants={cardVariants}
                                className="mt-16 py-6 border-t border-gray-100 text-center italic text-[#29234B] font-medium"
                            >
                                Where curious minds grow into confident learners.
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EarlyYearsSection;