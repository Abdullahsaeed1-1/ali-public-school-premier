import React from 'react';

const CampusMap = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#29234B]">Our Location</h2>
        <p className="text-gray-500">Find us in University Town, Peshawar</p>
      </div>
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto p-3 sm:p-4 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3564!2d71.482!3d33.999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d910d6!2sUniversity+Town+Peshawar!5e0!3m2!1sen!2spk!4v1710000000000"
          width="100%"
          height="300"
          className="sm:h-80 md:h-96 lg:h-[400px]"
          style={{ border: 0, borderRadius: '15px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Campus Location"
        ></iframe>
      </div>
    </div>
    </div>
    </section>
  )
};

export default CampusMap;