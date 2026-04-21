import React from 'react';
import { motion } from 'framer-motion';
import randomApsVideo from '../../assets/videos/random aps.mp4';

const AcademicsVideoSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-10 md:mb-14"
    >
      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-3 sm:p-4 md:p-5 shadow-sm">
        <div className="aspect-video overflow-hidden rounded-xl bg-black">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={randomApsVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </motion.div>
  );
};

export default AcademicsVideoSection;
