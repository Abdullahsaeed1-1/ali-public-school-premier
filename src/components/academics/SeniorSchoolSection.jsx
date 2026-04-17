import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaUserGraduate, FaBook, FaUserTie, FaHandsHelping } from 'react-icons/fa';

const SeniorSchoolSection = () => {
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
        hidden: { opacity: 0, x: -30 },
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

    const features = [
        {
            icon: <FaChartLine className="text-xl" />,
            text: "Structured exam preparation"
        },
        {
            icon: <FaUserGraduate className="text-xl" />,
            text: "Board examination focus"
        },
        {
            icon: <FaUserTie className="text-xl" />,
            text: "Personalized mentoring"
        },
        {
            icon: <FaBook className="text-xl" />,
            text: "Subject specialist faculty"
        },
        {
            icon: <FaHandsHelping className="text-xl" />,
            text: "Academic counselling"
        }
    ];

    return (
        <section ref={ref} className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-6xl mx-auto"
                >
                    {/* Main Card - Lightened */}
                    <div className="bg-gradient-to-r from-green-50/70 to-emerald-50/70 rounded-2xl overflow-hidden border border-emerald-100 shadow-lg">
                        {/* Header - Cream background */}
                        <div className="bg-cream px-6 md:px-8 py-4 border-b border-emerald-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <FaUserGraduate className="text-2xl text-secondary" /> {/* Gold color */}
                                    </motion.div>
                                    <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold"> {/* Navy Blue */}
                                        SENIOR SCHOOL (AGES 13–16)
                                    </h2>
                                </div>
                                <div className="hidden md:block">
                                    <span className="font-heading text-secondary text-lg font-bold"> {/* Gold color */}
                                        Preparation Phase
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content - Lightened */}
                        <div className="p-6 md:p-8 bg-gradient-to-b from-white/90 to-emerald-50/30">
                            <motion.div
                                variants={containerVariants}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                            >
                                {/* Left: Description */}
                                <motion.div variants={cardVariants}>
                                    <h3 className="font-heading text-xl md:text-2xl text-primary font-bold mb-4"> {/* Navy Blue */}
                                        Academic Excellence Focus
                                    </h3>
                                    <p className="font-body text-primary/80 text-lg leading-relaxed mb-6"> {/* Navy Blue with opacity */}
                                        Rigorous academic preparation with comprehensive support systems for board examinations and future success.
                                    </p>
                                    
                                    {/* Features Grid */}
                                    <div className="space-y-3">
                                        {features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                variants={cardVariants}
                                                custom={index}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                                                    <div className="text-secondary"> {/* Gold color */}
                                                        {feature.icon}
                                                    </div>
                                                </div>
                                                <span className="font-body text-primary/90"> {/* Navy Blue with opacity */}
                                                    {feature.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Right: Visual/Age Range */}
                                <motion.div variants={cardVariants} className="flex justify-center">
                                    <div className="relative">
                                        {/* Age Circle - Lightened */}
                                        <div className="w-64 h-64 rounded-full border-2 border-secondary/30 flex items-center justify-center bg-gradient-to-br from-white to-emerald-50/50 shadow-sm">
                                            <div className="text-center">
                                                <div className="font-heading text-5xl md:text-6xl text-primary font-bold mb-2"> {/* Navy Blue */}
                                                    13-16
                                                </div>
                                                <div className="font-body text-primary/80 text-sm"> {/* Navy Blue with opacity */}
                                                    Years Old
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Decorative Elements - Lightened */}
                                        <motion.div
                                            className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-secondary/30"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 0.8, 0.5]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity
                                            }}
                                        />
                                        <motion.div
                                            className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-secondary/20"
                                            animate={{
                                                scale: [1, 1.3, 1],
                                                opacity: [0.4, 0.7, 0.4]
                                            }}
                                            transition={{
                                                duration: 2.5,
                                                repeat: Infinity,
                                                delay: 0.5
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Exam Support - Lightened */}
                            <motion.div
                                variants={containerVariants}
                                className="mt-8 pt-6 border-t border-emerald-100"
                            >
                                <h4 className="font-heading text-lg text-primary font-bold mb-4 text-center"> {/* Navy Blue */}
                                    Examination Support System
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { support: "Mock Tests", color: "bg-secondary/10" },
                                        { support: "Revision Classes", color: "bg-accent/10" },
                                        { support: "Study Plans", color: "bg-primary/5" },
                                        { support: "Stress Management", color: "bg-emerald-50" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={cardVariants}
                                            className={`${item.color} rounded-lg p-3 text-center border border-secondary/10`}
                                        >
                                            <div className="font-body text-primary/90 text-sm font-semibold"> {/* Navy Blue with opacity */}
                                                {item.support}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SeniorSchoolSection;