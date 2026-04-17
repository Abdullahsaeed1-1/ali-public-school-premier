import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img8 from "../../assets/images/pages/playarea.jpeg";
import img9 from "../../assets/images/pages/garden.jpeg";
import img10 from "../../assets/images/pages/studio.jpeg";

const CampusGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const campusImages = [
    {
      id: 1,
      title: "Play Area & Recreation",
      description: "Safe and fun outdoor spaces for children",
      image: img8
    },
    {
      id: 2,
      title: "Nature & Garden",
      description: "Green spaces for environmental awareness",
      image: img9
    },
    {
      id: 3,
      title: "Creative Studio",
      description: "Art and music facilities for creative expression",
      image: img10
    }
  ];

  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % campusImages.length);
  };

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
          Campus Gallery
        </h2>
        <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
          Explore our modern learning spaces and facilities
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden mb-6">
          <img
            src={campusImages[activeImage].image}
            alt={campusImages[activeImage].title}
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <FaChevronRight />
          </button>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold text-white text-lg">{campusImages[activeImage].title}</h3>
              <p className="text-white/80 text-sm">{campusImages[activeImage].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default CampusGallery;