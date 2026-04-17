import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaBullseye, FaRocket } from 'react-icons/fa';

const IntroductionSection = () => {
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
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 15
            }
        }
    };

    return (
        <section ref={ref} className="pt-4 md:pt-6 pb-12 md:pb-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-8">
                        <h2 className="font-heading text-3xl md:text-4xl text-[#29234B] font-bold mb-4">
                            Our Academic Philosophy
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full"
                        />
                    </motion.div>

                    {/* Main Content Card */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-gradient-to-r from-[#29234B]/5 to-[#D4AF37]/5 rounded-2xl p-8 md:p-10 border border-[#D4AF37]/20 shadow-lg"
                    >
                        <div className="text-center mb-8">
                            <motion.div
                                className="inline-flex items-center justify-center gap-3 mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                
                            </motion.div>
                            
                            <p className="font-subheading text-lg md:text-xl text-[#29234B]/80 italic leading-relaxed max-w-4xl mx-auto">
                                Our academic journey is designed to help students learn confidently, think independently and pursue excellence with purpose.
                            </p>
                        </div>

                        {/* Pillars */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            {[
                                {
                                    icon: <FaBrain className="text-2xl" />,
                                    title: "Confident Learning",
                                    description: "Building self-assurance through progressive skill development"
                                },
                                {
                                    icon: <FaBullseye className="text-2xl" />,
                                    title: "Independent Thinking",
                                    description: "Encouraging critical analysis and problem-solving abilities"
                                },
                                {
                                    icon: <FaRocket className="text-2xl" />,
                                    title: "Purposeful Excellence",
                                    description: "Achieving goals with meaning and intentionality"
                                }
                            ].map((pillar, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 text-center border border-[#D4AF37]/10 shadow-sm"
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                >
                                    <div className="text-[#D4AF37] mb-3">
                                        {pillar.icon}
                                    </div>
                                    <h4 className="font-heading text-lg font-bold text-[#29234B] mb-2">
                                        {pillar.title}
                                    </h4>
                                    <p className="font-body text-[#29234B]/80 text-sm">
                                        {pillar.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default IntroductionSection;