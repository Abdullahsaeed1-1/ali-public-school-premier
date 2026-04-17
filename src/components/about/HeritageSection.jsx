import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHistory, FaSchool, FaAward, FaGraduationCap } from 'react-icons/fa';

const HeritageSection = () => {
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

    const heritageItems = [
        {
            icon: <FaSchool />,
            title: "Community Impact",
            description: "Serving as an educational hub impacting thousands of families"
        },
        {
            icon: <FaAward />,
            title: "Premier Branch",
            description: "Elevated educational experience with cutting-edge facilities"
        },
        {
            icon: <FaGraduationCap />,
            title: "25+ Years Excellence",
            description: "Proven track record of academic success and holistic development"
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
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <FaHistory className="text-2xl text-secondary" />
                            </motion.div>
                            <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold">
                                Our Heritage & Legacy
                            </h2>
                        </div>
                        <p className="font-subheading text-lg text-primary/70 max-w-3xl mx-auto">
                            For over 25 years, transforming lives through educational excellence
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {heritageItems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover="hover"
                                custom={index}
                                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-secondary/20"
                            >
                                <motion.div
                                    className="text-4xl text-secondary mb-3"
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="font-heading text-lg font-bold text-primary mb-2">
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

export default HeritageSection;