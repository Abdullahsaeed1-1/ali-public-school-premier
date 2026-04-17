import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import campusVideo from '../../assets/videos/campus.mp4';
import classroomPoster from '../../assets/images/campus/classroom.jpeg';

const CampusVideoSection = () => {
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
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#FAFAFA] to-white">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    variants={videoVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <motion.h2
                            className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Experience Our Campus
                        </motion.h2>
                        <motion.p
                            className="text-lg text-[#29234B]/70 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                        </motion.p>
                    </div>

                    {/* Video Container */}
                    <motion.div
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-auto max-h-[50vh] md:max-h-[95vh] object-cover"
                            controls
                            preload="metadata"
                            poster={classroomPoster}
                            aria-label="Campus tour video"
                            autoPlay
                            loop
                            muted
                        >
                            <source src={campusVideo} type="video/mp4" />
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

                    {/* Additional Info */}
                    <motion.div
                        className="mt-8 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-[#29234B]/60">
                            Discover our state-of-the-art facilities, modern classrooms and vibrant learning spaces
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CampusVideoSection;