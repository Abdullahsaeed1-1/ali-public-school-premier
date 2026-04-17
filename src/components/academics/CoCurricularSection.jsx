import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFutbol, FaPalette, FaMicrophone, FaUsers, FaShieldAlt, FaSchool, FaHeart, FaBalanceScale } from 'react-icons/fa';
import airyClassroom from "../../assets/images/pages/kgclassroom.jpeg";

const CoCurricularSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    const activities = [
        { icon: <FaPalette />, title: "Creative Activities", desc: "Exploring imagination through art and craft." },
        { icon: <FaMicrophone />, title: "Public Speaking", desc: "Confidence building through presentations." },
        { icon: <FaUsers />, title: "Team Collaboration", desc: "Learning teamwork and mutual respect." },
        { icon: <FaFutbol />, title: "Physical Development", desc: "Structured sports and outdoor activities." }
    ];

    const safetyFeatures = [
        { icon: <FaSchool />, title: "Spacious Classrooms", desc: "Well-designed for optimal learning." },
        { icon: <FaHeart />, title: "Calm Environment", desc: "A respectful and academic atmosphere." },
        { icon: <FaShieldAlt />, title: "Secure Campus", desc: "Supervised and safe school premises." },
        { icon: <FaBalanceScale />, title: "Clear Discipline", desc: "High expectations for behavior." }
    ];

    return (
        <section ref={ref} className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-6xl mx-auto"
                >
                    {/* --- CO-CURRICULAR DEVELOPMENT --- */}
                    <div className="mb-24">
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                                Beyond the Classroom
                            </span>
                            <h2 className="font-heading text-3xl md:text-5xl text-[#29234B] font-bold mb-6">
                                CO-CURRICULAR DEVELOPMENT
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                                Education at APS Premier extends beyond the classroom. Students are encouraged to participate in activities that support confidence building and personal development.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {activities.map((act, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="w-16 h-16 mx-auto bg-[#29234B] text-[#D4AF37] rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                        {act.icon}
                                    </div>
                                    <h3 className="font-bold text-[#29234B] text-xl mb-3">{act.title}</h3>
                                    <p className="text-gray-500 text-sm">{act.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* --- SAFE AND SUPPORTIVE ENVIRONMENT --- */}
                    <div className="mb-24">
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                                Caring Institution
                            </span>
                            <h2 className="font-heading text-3xl md:text-5xl text-[#29234B] font-bold mb-6">
                                SAFE AND SUPPORTIVE ENVIRONMENT
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                                The school provides a secure, disciplined and supportive environment where students feel safe, respected and motivated to learn. We believe that a structured environment allows students to focus on growth.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {safetyFeatures.map((feat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="w-16 h-16 mx-auto bg-[#29234B] text-[#D4AF37] rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                        {feat.icon}
                                    </div>
                                    <h3 className="font-bold text-[#29234B] text-xl mb-3">{feat.title}</h3>
                                    <p className="text-gray-500 text-sm">{feat.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default CoCurricularSection;