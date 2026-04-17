import React from 'react';

const CampusMap = () => {
  const mapDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=33.99053350641758,71.49571067960983&travelmode=driving&dir_action=navigate";

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#29234B]">Our Location</h2>
        <p className="text-gray-500">Find us in University Town, Peshawar</p>
      </div>
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto p-3 sm:p-4 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="relative overflow-hidden rounded-[15px] h-[300px] sm:h-80 md:h-96 lg:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d799.2655111141356!2d71.49571067960983!3d33.99053350641758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1776427635174!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="absolute left-0 w-full"
            style={{ border: 0, top: '-56px', height: 'calc(100% + 56px)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Campus Location"
          ></iframe>
        </div>
        <div className="mt-4 flex justify-center">
          <a
            href={mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center px-5 py-3 bg-[#29234B] text-white font-semibold rounded-lg hover:bg-[#1f1a3a] transition-colors duration-300"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
};

export default CampusMap;