import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaLayerGroup, 
  FaBalanceScale,
  FaPeace,
  FaUserCheck,
  FaStar
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 15 }
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(41, 35, 75, 0.15)",
      transition: { type: "spring", stiffness: 400, damping: 17 }
    }
  };

  // Brochure ke mutabiq exactly 6 points
  const features = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Strong Academic Foundation",
      description: "A solid starting point for early learners, focusing on critical intellectual abilities.",
      color: "bg-blue-50",
      iconColor: "text-[#29234B]"
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl" />,
      title: "Experienced Teaching Staff",
      description: "Dedicated educators committed to providing thoughtful guidance and mentorship.",
      color: "bg-amber-50",
      iconColor: "text-[#D4AF37]"
    },
    {
      icon: <FaLayerGroup className="text-3xl" />,
      title: "Structured Teaching Methods",
      description: "Effective and organized classroom methods designed for optimal learning.",
      color: "bg-blue-50",
      iconColor: "text-[#29234B]"
    },
    {
      icon: <FaBalanceScale className="text-3xl" />,
      title: "Discipline & Respect",
      description: "Strong emphasis on responsibility, respect and character development.",
      color: "bg-amber-50",
      iconColor: "text-[#D4AF37]"
    },
    {
      icon: <FaPeace className="text-3xl" />,
      title: "Calm Academic Environment",
      description: "A focused and serene atmosphere that allows students to excel in their studies.",
      color: "bg-blue-50",
      iconColor: "text-[#29234B]"
    },
    {
      icon: <FaUserCheck className="text-3xl" />,
      title: "Individual Attention",
      description: "Personalized focus for every student during their critical formative years.",
      color: "bg-amber-50",
      iconColor: "text-[#D4AF37]"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center justify-center gap-3 mb-4"
            >
              <FaStar className="text-xl text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Our Distinction</span>
              <FaStar className="text-xl text-[#D4AF37]" />
            </motion.div>
            
            <h2 className="font-heading text-3xl md:text-5xl text-[#29234B] font-bold mb-6">
              Why Choose <span className="text-[#D4AF37]">APS Premier</span>
            </h2>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              At Ali Public School – Premier Campus, our goal is to provide an educational environment that combines academic rigour with thoughtful guidance and character development.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <div className={feature.iconColor}>
                    {feature.icon}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#29234B] mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-20 p-8 md:p-12 bg-[#29234B] rounded-[2rem] text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-body italic leading-relaxed">
                "We believe that the early years of education play a critical role in shaping a child's intellectual abilities, confidence and character."
              </p>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full -ml-16 -mb-16"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;