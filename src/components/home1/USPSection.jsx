import React, { useEffect } from 'react';
import { FaBuilding, FaShapes, FaBrain, FaLeaf } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const USPSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const controls = useAnimation();
  const headingControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      headingControls.start("visible");
      buttonControls.start("visible");
    }
  }, [controls, inView, headingControls, buttonControls]);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, mass: 0.5 }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0, opacity: 0 },
    visible: {
      rotate: 0, scale: 1, opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 15, delay: 0.2 }
    },
    hover: {
      rotate: [0, -10, 10, -10, 0], scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: 48,
      transition: { duration: 0.5, delay: 0.5 }
    }
  };

  const shineEffect = {
    hidden: { x: "-100%" },
    visible: {
      x: "200%",
      transition: { duration: 1, delay: 0.5, ease: "easeInOut" }
    }
  };

  // --- Data from APS Premier Document ---
  const features = [
    {
      icon: <FaBuilding />,
      title: "Purpose-Built Campus",
      desc: "A boutique environment designed specifically for early years learning",
      color: "from-purple-500 to-indigo-500",
      heightClass: "min-h-[300px]"
    },
    {
      icon: <FaShapes />,
      title: "British-Style Design",
      desc: "Modern, calm and distraction-free spaces inspired by UK standards",
      color: "from-secondary to-yellow-400", // Gold theme
      heightClass: "min-h-[300px]"
    },
    {
      icon: <FaBrain />,
      title: "Digital PlayArea",
      desc: "Our Digital Playground works just like a joyful space where children explore, experiment and grow",
      color: "from-cyan-500 to-blue-500",
      heightClass: "min-h-[300px]"
    },
    {
      icon: <FaLeaf />,
      title: "Oxford Curriculum",
      desc: "A world-class, structured approach to education that fosters critical thinking, academic excellence and global perspectives",
      color: "from-emerald-500 to-green-400",
      heightClass: "min-h-[300px]"
    },
  ];

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div variants={headingVariants} initial="hidden" animate={headingControls} className="inline-block mb-4">
            <span className="font-subheading text-secondary font-bold tracking-widest uppercase text-sm">
              Why Choose APS Premier
            </span>
            <motion.div
              className="h-1 w-12 bg-secondary mx-auto mt-2 rounded-full"
              variants={lineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
          </motion.div>

          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={headingControls}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-4 leading-tight"
          >
            THE PREMIER <span className="text-secondary">DIFFERENCE</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="relative flex flex-col">
                <motion.div
                  className={`relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100 hover:border-secondary/30 flex-1 flex flex-col ${feature.heightClass}`}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}></div>

                  {/* Icon container with animation */}
                  <motion.div
                    variants={iconVariants}
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 z-10"
                    whileHover="hover"
                  >
                    <div className={`text-2xl bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.icon}
                    </div>

                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      variants={shineEffect}
                      whileHover="visible"
                      initial="hidden"
                    />
                  </motion.div>

                  <div className="pt-14 pb-8 px-6 text-center flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-heading text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Animated underline on hover */}
                      <motion.div
                        className="h-0.5 bg-secondary mx-auto mb-4 mt-2"
                        initial={{ width: 0 }}
                        whileHover={{ width: 48 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <p className="font-body text-gray-600 text-sm leading-relaxed flex-1">
                      {feature.desc}
                    </p>

                    {/* Learn More Arrow Animation */}
                    <motion.div
                      className="mt-6 pt-4 border-t border-gray-100 group-hover:border-secondary/20 transition-colors duration-300"
                      initial={{ opacity: 0, y: 5 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="inline-flex items-center text-secondary font-bold text-xs uppercase tracking-wider gap-2">
                        Learn More
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.div>
                  </div>

                  {/* Background icon with floating animation */}
                  <motion.div
                    className="absolute bottom-[-10px] right-[-10px] w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  >
                    <div className="text-7xl text-primary">{feature.icon}</div>
                  </motion.div>

                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;