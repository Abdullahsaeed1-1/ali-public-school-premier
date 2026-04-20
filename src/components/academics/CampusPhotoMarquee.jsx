import React from 'react';
import campusClassroom from '../../assets/images/campus/classroom.jpeg';
import campusActivities from '../../assets/images/campus/activities.jpeg';
import campusSwings from '../../assets/images/campus/swings.jpeg';
import classroom from '../../assets/images/classroom.jpeg';
import kgClass from '../../assets/images/kg.jpeg';

const CampusPhotoMarquee = () => {
  const photos = [campusClassroom, campusActivities, campusSwings, classroom, kgClass];
  const loopedPhotos = [...photos, ...photos];

  return (
    <div className="mb-16 sm:mb-20 md:mb-24 overflow-hidden">
      <div className="relative rounded-2xl border border-gray-100 bg-gray-50 p-3 sm:p-4 md:p-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-14 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-14 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <div
          className="flex w-max gap-3 sm:gap-4 campus-scroll-desktop"
          style={{ animation: 'campus-photo-scroll 24s linear infinite' }}
        >
          {loopedPhotos.map((imageSrc, index) => (
            <div
              key={`${imageSrc}-${index}`}
              className="shrink-0 w-36 h-24 sm:w-56 sm:h-36 md:w-72 md:h-44 rounded-xl overflow-hidden border border-white shadow-sm"
            >
              <img
                src={imageSrc}
                alt="Campus"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes campus-photo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (min-width: 640px) {
          .campus-scroll-desktop {
            animation-duration: 32s;
          }
        }
      `}</style>
    </div>
  );
};

export default CampusPhotoMarquee;
