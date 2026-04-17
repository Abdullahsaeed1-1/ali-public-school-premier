import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

import img1 from "../../assets/images/pages/DSC08720.JPG.jpeg";
import img2 from "../../assets/images/pages/DSC08724.JPG.jpeg";
import img3 from "../../assets/images/pages/DSC08725.JPG.jpeg";
import img4 from "../../assets/images/pages/DSC08738.JPG.jpeg";
import img5 from "../../assets/images/pages/DSC08739.JPG.jpeg";
import img6 from "../../assets/images/pages/DSC08742.JPG.jpeg";
import img7 from "../../assets/images/pages/classroom.jpeg";
import img8 from "../../assets/images/pages/playarea.jpeg";
import img9 from "../../assets/images/pages/garden.jpeg";
import img10 from "../../assets/images/pages/interior.jpeg";
import img11 from "../../assets/images/pages/studio.jpeg";
import img12 from "../../assets/images/pages/artstudio.jpeg";



const OptimizedImage = ({ src, alt, className, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => setIsLoaded(true), []);
  const handleError = useCallback(() => setHasError(true), []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

const CampusGallery = () => {
  // 1. Delays remove kar diye, ab images browser ki speed pe load hongi
  // 2. Critical images ko render hote hi fetch karne ke liye useMemo ya simple array
  const facilities = useMemo(() => [
    { img: img1, colSpan: "md:col-span-2 md:row-span-2", height: "h-96", priority: true },
    { img: img2, colSpan: "md:col-span-1", height: "h-48", priority: true },
    { img: img3, colSpan: "md:col-span-1", height: "h-48", priority: true },
    { img: img4, colSpan: "md:col-span-2", height: "h-48" },
    { img: img5, colSpan: "md:col-span-1", height: "h-48" },
    { img: img6, colSpan: "md:col-span-1 md:row-span-2", height: "h-96" },
    { img: img7, colSpan: "md:col-span-1", height: "h-48" },
    { img: img8, colSpan: "md:col-span-2", height: "h-48" },
    { img: img9, colSpan: "md:col-span-1", height: "h-48" },
    { img: img10, colSpan: "md:col-span-1", height: "h-48" },
    { img: img11, colSpan: "md:col-span-2 md:row-span-2", height: "h-96" },
    { img: img12, colSpan: "md:col-span-1", height: "h-48" }
  ], []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-2">Campus Highlights</span>
          <h2 className="text-3xl md:text-5xl text-primary font-bold">Our Beautiful Campus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "100px" }} // Image nazar aane se pehle hi load start karde
              className={`group relative rounded-xl shadow-md ${item.colSpan} ${item.height}`}
            >
              <OptimizedImage
                src={item.img}
                alt="Campus"
                className="w-full h-full object-cover"
                priority={item.priority}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/aboutpage" className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-white font-bold rounded-full">
            Explore Full Gallery <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;