import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import video
import activitiesVideo from '../../assets/videos/activities.mp4';

const ActivitiesSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const videoRef = useRef(null);

    const videoVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const toggleFullscreen = () => {
        if (!videoRef.current) return;

        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            videoRef.current.requestFullscreen().catch(err => {
                console.error('Error attempting to enable fullscreen:', err);
            });
        }
    };

    return (
        <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mb-4">
                        School Activities & Programs
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100px" } : { width: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-secondary to-primary mx-auto mb-6 rounded-full"
                    />
                    <p className="text-primary/70 text-lg max-w-2xl mx-auto">
                        Discover the vibrant and diverse activities that make our school a hub of learning,
                        growth and excellence
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    variants={videoVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-auto max-h-[50vh] md:max-h-[80vh] object-cover"
                            controls
                            preload="metadata"
                            aria-label="School activities video"
                            autoPlay
                            loop
                            muted
                        >
                            <source src={activitiesVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Fullscreen Button */}
                        <button
                            onClick={toggleFullscreen}
                            className="hidden md:block absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                            aria-label="Toggle fullscreen"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 3l-6 6m0 0V4m0 5h5M3 21l6-6m0 0v5m0-5H4"
                                />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mt-16"
                >
                </motion.div>
            </div>
        </section>
    );
};

export default ActivitiesSection;
