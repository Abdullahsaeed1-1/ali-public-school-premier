import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserTie, FaLightbulb, FaBrain, FaHeart, FaUsers } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';

const LeadershipSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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

    const philosophyPoints = [
        {
            icon: <FaBrain className="text-xl" />,
            title: "Academic Excellence",
            description: "Rigorous curriculum combined with innovative teaching methods"
        },
        {
            icon: <FaHeart className="text-xl" />,
            title: "Character Building",
            description: "Developing integrity, empathy and strong moral values"
        },
        {
            icon: <FaLightbulb className="text-xl" />,
            title: "Creative Thinking",
            description: "Encouraging innovation, curiosity and problem-solving"
        },
        {
            icon: <FaUsers className="text-xl" />,
            title: "Community Engagement",
            description: "Active participation and service to society"
        }
    ];

    return (
        <section ref={ref} className="py-12 md:py-16 bg-gradient-to-b from-light to-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-6xl mx-auto"
                >
                    {/* Philosophy Section */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center gap-3 mb-4">
                                <GiBookCover className="text-3xl text-primary" />
                                <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                                    OUR PHILOSOPHY
                                </h2>
                            </div>
                            <p className="font-body text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                                We believe that true education balances <span className="font-semibold text-primary">academics</span>, 
                                <span className="font-semibold text-secondary"> character</span>, 
                                <span className="font-semibold text-emerald"> creativity</span> and 
                                <span className="font-semibold text-purple-600"> community engagement</span>.
                            </p>
                        </div>

                        {/* Philosophy Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                            {philosophyPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        y: -8,
                                        scale: 1.02,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                    className="bg-white rounded-xl p-6 shadow-lg border border-gold-20 hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`
                                            w-14 h-14 rounded-full flex items-center justify-center mb-4
                                            ${index === 0 ? 'bg-primary/10 text-primary' : 
                                              index === 1 ? 'bg-secondary/10 text-secondary' :
                                              index === 2 ? 'bg-emerald/10 text-emerald' :
                                              'bg-purple-100 text-purple-600'}
                                        `}>
                                            {point.icon}
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-gray-800 mb-2">
                                            {point.title}
                                        </h3>
                                        <p className="font-body text-gray-600 text-sm">
                                            {point.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Leadership Section */}
                    <motion.div variants={itemVariants} className="mt-16">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center gap-3 mb-4">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <FaUserTie className="text-3xl text-secondary" />
                                </motion.div>
                                <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                                    LEADERSHIP
                                </h2>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-primary/5 via-white to-secondary/5 rounded-2xl p-8 md:p-10 shadow-xl border border-gold-20">
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                                {/* Principal's Photo/Icon */}
                                <div className="lg:w-2/5 flex flex-col items-center">
                                    <motion.div
                                        className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                                            <FaUserTie className="text-5xl text-primary" />
                                        </div>
                                        {/* Decorative Rings */}
                                        <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-pulse"></div>
                                        <div className="absolute -inset-6 border-2 border-secondary/20 rounded-full"></div>
                                    </motion.div>
                                    <div className="text-center mt-6">
                                        <h3 className="font-heading text-xl font-bold text-primary">
                                            Mr Ali Ahmad
                                        </h3>
                                        <p className="font-body text-primary/80 text-sm mb-2">
                                            Principal & Director
                                        </p>
                                        <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                                            <span>20+ Years Experience</span>
                                            <span>•</span>
                                            <span>Educational Leadership</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="lg:w-3/5">
                                    <div className="relative">
                                        <div className="absolute -top-4 -left-4 text-6xl text-primary/20">"</div>
                                        <blockquote className="font-body text-lg text-gray-800 leading-relaxed italic pl-6">
                                            "Education is a partnership between the school, parents and community. 
                                            Our role is to inspire, guide and nurture each child while creating an 
                                            environment where learning feels joyful and meaningful."
                                        </blockquote>
                                        <div className="absolute -bottom-4 -right-4 text-6xl text-secondary/20">"</div>
                                    </div>
                                    
                                    <div className="mt-8 pt-6 border-t border-secondary/20">
                                        <div className="flex flex-wrap gap-4">
                                            <div className="flex-1 min-w-[200px]">
                                                <h4 className="font-heading font-bold text-primary mb-2">Vision</h4>
                                                <p className="font-body text-gray-600 text-sm">
                                                    To create lifelong learners who contribute positively to society
                                                </p>
                                            </div>
                                            <div className="flex-1 min-w-[200px]">
                                                <h4 className="font-heading font-bold text-secondary mb-2">Mission</h4>
                                                <p className="font-body text-gray-600 text-sm">
                                                    Provide holistic education that balances academics with character development
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Leadership Team Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                            {[
                                { number: "15+", label: "Years Experience", color: "#29234B" },
                                { number: "50+", label: "Faculty Members", color: "#D4AF37" },
                                { number: "100%", label: "Certified Teachers", color: "#10B981" },
                                { number: "24/7", label: "Parent Support", color: "#7C3AED" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white rounded-xl p-5 shadow-lg border border-gold-10 text-center"
                                >
                                    <div 
                                      className="text-3xl font-bold font-heading mb-2"
                                      style={{ color: stat.color }}
                                    >
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 font-medium text-sm">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default LeadershipSection;