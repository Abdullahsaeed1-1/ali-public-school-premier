import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Data States
  const [count1, setCount1] = useState(0); // 13 Years
  const [count2, setCount2] = useState(0); // 5 Pillars
  const [count3, setCount3] = useState(0); // 8 Spaces
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      // Professional Count-Up Logic (Smooth)
      const animateCount = (target, setter) => {
        let start = 0;
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / target));
        
        const timer = setInterval(() => {
          start += 1;
          setter(start);
          if (start === target) clearInterval(timer);
        }, Math.max(stepTime, 50)); // Ensure it's not too fast for small numbers
      };

      animateCount(15, setCount1);
      animateCount(6, setCount2);
      animateCount(4, setCount3);
    }
  }, [inView, controls]);

  // Clean Animations (No spinning/bouncing)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    // Background WHITE (As requested)
    <section className="py-20 bg-white border-b border-gray-100" ref={ref}>
      
      <div className="container mx-auto px-6 text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Heading - Deep Purple */}
          <motion.h2 variants={itemVariants} className="font-heading text-3xl md:text-4xl text-primary font-bold tracking-wide mb-3">
            A LEGACY OF EXCELLENCE
          </motion.h2>
          
          <motion.div variants={itemVariants} className="h-1 w-20 bg-secondary mx-auto mb-16 rounded-full"></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* --- STAT 1 --- */}
            <motion.div 
              variants={itemVariants} 
              className="p-8 rounded-2xl bg-light hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-secondary/20"
            >
              {/* Number - Gold */}
              <div className="text-6xl md:text-7xl font-heading font-bold text-secondary mb-2">
                {count1}+
              </div>
              
              {/* Label - Deep Purple */}
              <h3 className="text-lg font-bold uppercase tracking-widest text-primary mb-3">
                Years of Heritage
              </h3>
              
              {/* Divider */}
              <div className="h-0.5 w-12 bg-primary/10 mx-auto mb-3"></div>
              
            </motion.div>

            {/* --- STAT 2 --- */}
            <motion.div 
              variants={itemVariants} 
              className="p-8 rounded-2xl bg-light hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-secondary/20"
            >
              <div className="text-6xl md:text-7xl font-heading font-bold text-secondary mb-2">
                {count2}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-primary mb-3">
                Core Values
              </h3>
              <div className="h-0.5 w-12 bg-primary/10 mx-auto mb-3"></div>
              
            </motion.div>

            {/* --- STAT 3 --- */}
            <motion.div 
              variants={itemVariants} 
              className="p-8 rounded-2xl bg-light hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-secondary/20"
            >
              <div className="text-6xl md:text-7xl font-heading font-bold text-secondary mb-2">
                {count3}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-primary mb-3">
                Campuses
              </h3>
            </motion.div>

          </div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default StatsSection;