import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFlask, FaUserTie, FaGraduationCap, FaBullseye, FaRocket } from 'react-icons/fa';

const CollegeSection = () => {
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

    const streams = [
        {
            title: "F.Sc. (Pre-Medical)",
            subjects: ["Biology", "Chemistry", "Physics"],
            color: "from-red-50/70 to-pink-50/70",
            border: "border-red-100"
        },
        {
            title: "F.Sc. (Pre-Engineering)",
            subjects: ["Mathematics", "Chemistry", "Physics"],
            color: "from-blue-50/70 to-indigo-50/70",
            border: "border-blue-100"
        },
        {
            title: "F.A. (Arts/Humanities)",
            subjects: ["Economics", "Sociology", "Psychology"],
            color: "from-purple-50/70 to-violet-50/70",
            border: "border-purple-100"
        }
    ];

    const features = [
        {
            icon: <FaUserTie className="text-xl" />,
            text: "Specialist faculty"
        },
        {
            icon: <FaFlask className="text-xl" />,
            text: "Modern labs"
        },
        {
            icon: <FaGraduationCap className="text-xl" />,
            text: "Career guidance"
        },
        {
            icon: <FaBullseye className="text-xl" />,
            text: "Exam preparation systems"
        },
        {
            icon: <FaRocket className="text-xl" />,
            text: "Confidence-building programs"
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
                    <div className="bg-gradient-to-r from-purple-50/70 to-pink-50/70 rounded-2xl overflow-hidden border border-purple-100 shadow-lg">
                        {/* Header - Cream background */}
                        <div className="bg-cream px-6 md:px-8 py-4 border-b border-purple-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    >
                                        <FaGraduationCap className="text-2xl text-secondary" /> {/* Gold color */}
                                    </motion.div>
                                    <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold"> {/* Navy Blue */}
                                        COLLEGE (F.SC. / FA / PRE-MED / PRE-ENG)
                                    </h2>
                                </div>
                                <div className="hidden md:block">
                                    <span className="font-heading text-secondary text-lg font-bold"> {/* Gold color */}
                                        Specialization Phase
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content - Lightened */}
                        <div className="p-6 md:p-8 bg-gradient-to-b from-white/90 to-purple-50/30">
                            <motion.div
                                variants={containerVariants}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                            >
                                {/* Left: Visual/Age Range */}
                                <motion.div variants={cardVariants} className="flex justify-center order-2 lg:order-1">
                                    <div className="relative">
                                        {/* College Building Icon */}
                                        <div className="w-64 h-64 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-6xl md:text-7xl mb-4">🏛️</div>
                                                <div className="font-heading text-2xl text-primary font-bold"> {/* Navy Blue */}
                                                    College Level
                                                </div>
                                                <div className="font-body text-primary/80 text-sm mt-2"> {/* Navy Blue with opacity */}
                                                    Advanced Studies
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

                                {/* Right: Description */}
                                <motion.div variants={cardVariants} className="order-1 lg:order-2">
                                    <h3 className="font-heading text-xl md:text-2xl text-primary font-bold mb-4"> {/* Navy Blue */}
                                        Specialized Academic Pathways
                                    </h3>
                                    <p className="font-body text-primary/80 text-lg leading-relaxed mb-6"> {/* Navy Blue with opacity */}
                                        Advanced education with career-focused curriculum and professional guidance.
                                    </p>
                                    
                                    {/* Features Grid */}
                                    <div className="space-y-3 mb-6">
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
                            </motion.div>

                            {/* Streams Section - Lightened */}
                            <motion.div
                                variants={containerVariants}
                                className="mt-8 pt-6 border-t border-purple-100"
                            >
                                <h4 className="font-heading text-lg text-primary font-bold mb-6 text-center"> {/* Navy Blue */}
                                    Academic Streams Offered
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {streams.map((stream, index) => (
                                        <motion.div
                                            key={index}
                                            variants={cardVariants}
                                            className={`bg-gradient-to-r ${stream.color} rounded-xl p-5 border ${stream.border}`}
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                        >
                                            <h5 className="font-heading text-lg font-bold text-primary mb-3"> {/* Navy Blue */}
                                                {stream.title}
                                            </h5>
                                            <div className="space-y-2">
                                                {stream.subjects.map((subject, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> {/* Gold dot */}
                                                        <span className="font-body text-primary/80 text-sm"> {/* Navy Blue with opacity */}
                                                            {subject}
                                                        </span>
                                                    </div>
                                                ))}
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
export default CollegeSection;