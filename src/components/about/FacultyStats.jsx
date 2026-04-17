import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaStar, FaAward, FaBook } from 'react-icons/fa';

const FacultyStats = () => {
    const [advancedDegrees, setAdvancedDegrees] = useState(0);
    const [yearsExperience, setYearsExperience] = useState(0);
    const [certifications, setCertifications] = useState(0);
    const [researchPapers, setResearchPapers] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const facultyStats = [
        {
            label: "Advanced Degrees",
            value: advancedDegrees,
            icon: <FaGraduationCap />,
            suffix: "%",
            target: 95,
            color: "from-blue-500 to-cyan-400",
            description: "Faculty with Masters or PhD"
        },
        {
            label: "Years Experience",
            value: yearsExperience,
            icon: <FaStar />,
            suffix: "+",
            target: 15,
            color: "from-green-500 to-emerald-400",
            description: "Average teaching experience"
        },
        {
            label: "Intl. Certifications",
            value: certifications,
            icon: <FaAward />,
            suffix: "%",
            target: 80,
            color: "from-purple-500 to-violet-400",
            description: "Internationally certified educators"
        },
        {
            label: "Research Papers",
            value: researchPapers,
            icon: <FaBook />,
            suffix: "+",
            target: 50,
            color: "from-orange-500 to-amber-400",
            description: "Total published research papers"
        }
    ];

    // Start animation when component mounts
    useEffect(() => {
        setIsVisible(true);

        if (!isVisible) return;

        const duration = 3000; // 3 seconds for better visibility
        const startTime = Date.now();

        const animateCounter = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Linear progress for smooth counting
            const linearProgress = progress;

            // Update values based on progress with step-by-step increment
            setAdvancedDegrees(Math.min(95, Math.floor(95 * linearProgress)));
            setYearsExperience(Math.min(15, Math.floor(15 * linearProgress)));
            setCertifications(Math.min(80, Math.floor(80 * linearProgress)));
            setResearchPapers(Math.min(50, Math.floor(50 * linearProgress)));

            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            } else {
                // Set final values
                setAdvancedDegrees(95);
                setYearsExperience(15);
                setCertifications(80);
                setResearchPapers(50);
                setAnimationComplete(true);
            }
        };

        // Small delay before starting animation
        const timer = setTimeout(() => {
            requestAnimationFrame(animateCounter);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [isVisible]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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
                stiffness: 100,
                damping: 15
            }
        }
    };

    // Animation for number increment
    const numberIncrementVariants = {
        initial: { scale: 1 },
        increment: {
            scale: [1, 1.2, 1],
            transition: {
                duration: 0.3,
                times: [0, 0.5, 1]
            }
        }
    };

    return (
        <div className="w-full">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block"
                >
                    <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3">
                        Faculty <span className="text-secondary">Excellence</span> Metrics
                    </h2>
                    <div className="h-1 w-24 bg-secondary mx-auto mb-4"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-body text-gray-600 text-lg max-w-2xl mx-auto px-4"
                >
                    Quantifying the exceptional quality of our distinguished teaching faculty
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10"
            >
                {facultyStats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative bg-white rounded-xl p-5 md:p-6 shadow-lg border border-gray-200 overflow-hidden"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        {/* Counting animation indicator */}
                        <motion.div
                            className="absolute top-2 right-2"
                            animate={{
                                opacity: animationComplete ? 0 : 1,
                                scale: animationComplete ? 0 : 1
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center space-x-1">
                                <motion.div
                                    className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.6, 1, 0.6]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: 0
                                    }}
                                />
                                <motion.div
                                    className="w-1.5 h-1.5 bg-green-500 rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.6, 1, 0.6]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: 0.2
                                    }}
                                />
                                <motion.div
                                    className="w-1.5 h-1.5 bg-yellow-500 rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.6, 1, 0.6]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: 0.4
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                            <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} bg-opacity-10`}>
                                <div className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                    {stat.icon}
                                </div>
                            </div>
                        </div>

                        {/* Number with counting animation */}
                        <div className="text-center mb-2">
                            <div className="relative inline-block">
                                <motion.div
                                    key={stat.value}
                                    variants={numberIncrementVariants}
                                    initial="initial"
                                    animate="increment"
                                    className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
                                >
                                    {stat.value}
                                    <span className="text-secondary text-3xl md:text-4xl ml-1">
                                        {stat.suffix}
                                    </span>
                                </motion.div>

                                {/* Visual counting trail effect */}
                                {stat.value > 0 && stat.value < stat.target && (
                                    <motion.div
                                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Main Label */}
                        <div className="text-center mb-2">
                            <h3 className="font-heading text-lg md:text-xl font-bold text-gray-800">
                                {stat.label}
                            </h3>
                        </div>

                        {/* Description */}
                        <div className="text-center mb-4">
                            <p className="font-body text-gray-600 text-sm">
                                {stat.description}
                            </p>
                        </div>

                        {/* Progress visualization */}
                        <div className="mt-4">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-gray-500">
                                    Current: {stat.value}{stat.suffix}
                                </span>
                                <span className="text-xs text-gray-500">
                                    Target: {stat.target}{stat.suffix}
                                </span>
                            </div>

                            {/* Progress bar */}
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full bg-gradient-to-r ${stat.color}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(stat.value / stat.target) * 100}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>

                            {/* Progress dots */}
                            <div className="flex justify-between mt-1">
                                {[...Array(10)].map((_, i) => {
                                    const threshold = (i + 1) * 10;
                                    const isActive = (stat.value / stat.target) * 100 >= threshold;

                                    return (
                                        <motion.div
                                            key={i}
                                            className={`w-1.5 h-1.5 rounded-full ${isActive ? `bg-gradient-to-r ${stat.color}` : 'bg-gray-300'}`}
                                            animate={isActive ? {
                                                scale: [1, 1.3, 1],
                                                opacity: [0.8, 1, 0.8]
                                            } : {}}
                                            transition={isActive ? {
                                                duration: 1,
                                                repeat: Infinity,
                                                delay: i * 0.1
                                            } : {}}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        {/* Counting status message */}
                        <div className="mt-4 text-center">
                            {!animationComplete ? (
                                <motion.div
                                    className="inline-flex items-center text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <motion.span
                                        className="mr-2"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    >
                                        ↻
                                    </motion.span>
                                    Counting up... {stat.value}{stat.suffix}
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="inline-flex items-center text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <span className="mr-1">✓</span>
                                    Target achieved
                                </motion.div>
                            )}
                        </div>

                        {/* Number flow animation */}
                        {stat.value > 0 && (
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute text-2xl font-bold opacity-10"
                                        initial={{
                                            x: -50,
                                            y: Math.random() * 100,
                                            opacity: 0
                                        }}
                                        animate={{
                                            x: "100%",
                                            y: Math.random() * 100,
                                            opacity: [0, 0.1, 0]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.5,
                                            ease: "linear"
                                        }}
                                        style={{
                                            color: stat.color.includes('blue') ? '#3b82f6' :
                                                stat.color.includes('green') ? '#10b981' :
                                                    stat.color.includes('purple') ? '#8b5cf6' :
                                                        '#f59e0b'
                                        }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>


        </div>
    );
};

export default FacultyStats;