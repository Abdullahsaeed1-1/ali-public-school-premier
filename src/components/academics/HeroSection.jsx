import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBookOpen, FaLightbulb } from 'react-icons/fa';

const HeroSection = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const heroVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative py-16 md:py-20 bg-cream overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-10 w-64 h-64 bg-[#29234B]/5 rounded-full blur-3xl"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 15, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl"
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -15, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-8 animate-slide-in-left">

                </div>
                <motion.div
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-5xl mx-auto"
                >
                    <div className="flex justify-center gap-4 mb-6">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <FaGraduationCap className="text-3xl text-[#D4AF37]" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
                        >
                            <FaBookOpen className="text-3xl text-[#29234B]" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                        >
                            <FaLightbulb className="text-3xl text-[#10B981]" />
                        </motion.div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#29234B] font-bold mb-4"
                    >
                        ACADEMICS <span className="text-[#D4AF37]">PROGRAMME</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="font-subheading text-xl md:text-2xl text-[#29234B]/80 mb-6 max-w-3xl mx-auto"
                    >
                        Shaping Minds, Building Futures Through Excellence
                    </motion.p>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="h-1 w-24 bg-gradient-to-r from-[#29234B] to-[#D4AF37] mx-auto rounded-full"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;