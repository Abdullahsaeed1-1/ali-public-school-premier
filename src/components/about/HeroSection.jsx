import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
        <section className="relative pt-20 md:pt-24 pb-8 md:pb-12 bg-cream overflow-hidden">
            <div className="flex items-center mb-8 animate-slide-in-left">

            </div>
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
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
                    className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
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
                <motion.div
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-4"
                    >
                        About <span className="text-secondary">Ali Public School Premier</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="font-subheading text-lg md:text-xl text-primary/80 mb-6"
                    >
                        Shaping Future Leaders Through Excellence in Education Since 2012
                    </motion.p>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "96px" }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="h-1 w-24 bg-secondary mx-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;