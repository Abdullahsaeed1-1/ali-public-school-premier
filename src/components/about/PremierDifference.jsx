import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChalkboardTeacher, FaHeart, FaShieldAlt, FaLaptop, FaLightbulb } from 'react-icons/fa';

const PremierDifference = () => {
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
        },
        hover: {
            y: -12,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(41, 35, 75, 0.12)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 15
            }
        }
    };

    const differences = [
        {
            icon: <FaChalkboardTeacher />,
            title: "Innovative Pedagogy",
            description: "Student-centered learning for critical thinking",
            color: "bg-gradient-to-r from-primary/20 to-primary/10"
        },
        {
            icon: <FaHeart />,
            title: "Pastoral Care",
            description: "Comprehensive support for student well-being",
            color: "bg-gradient-to-r from-accent/20 to-accent/10"
        },
        {
            icon: <FaShieldAlt />,
            title: "Ethos & Values",
            description: "Islamic values with global citizenship",
            color: "bg-gradient-to-r from-secondary/20 to-secondary/10"
        },
        {
            icon: <FaLaptop />,
            title: "Technology Integration",
            description: "Digital tools for future-ready education",
            color: "bg-gradient-to-r from-blue-400/20 to-cyan-300/10"
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
                    <motion.div variants={itemVariants} className="text-center mb-10">
                        <div className="inline-flex items-center justify-center gap-3 mb-3">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <FaLightbulb className="text-2xl text-secondary" />
                            </motion.div>
                            <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold">
                                The Premier Difference
                            </h2>
                        </div>
                        <p className="font-subheading text-lg text-primary/70 max-w-3xl mx-auto">
                            Holistic development through innovative teaching approaches
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {differences.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover="hover"
                                custom={index}
                                className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-5 border border-secondary/20"
                            >
                                <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-3`}>
                                    <motion.div
                                        className="text-xl text-primary"
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>
                                <h3 className="font-heading text-base font-bold text-primary mb-2">
                                    {item.title}
                                </h3>
                                <p className="font-body text-primary/80 text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PremierDifference;