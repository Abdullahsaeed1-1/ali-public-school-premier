import React from 'react';
import { FaBookReader, FaUserTie, FaSchool } from 'react-icons/fa';

import founderImg from "../../assets/images/pages/founder.jpeg";

const LegacyStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* --- Chapter 1: The Beginning --- */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
          <div className="w-full md:w-1/3">
            <div className="bg-light p-8 rounded-2xl border-l-4 border-secondary shadow-sm">
              <FaBookReader className="text-4xl text-primary mb-4" />
              <h3 className="font-heading text-2xl text-primary font-bold mb-2">Humble Roots</h3>
              <p className="text-gray-600 text-sm">A commitment born from personal experience.</p>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="font-heading text-3xl text-primary font-bold mb-6">The Dream of a Son</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
              The story of Ali Public School is not just about buildings or books; it is a story of grit and determination.
              Our founder grew up in a household where education was a distant dream. His father, a hardworking man,
              could not read or write. He saw the struggles of a life without education firsthand.
            </p>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              But he had a vision. He promised himself that he would not only educate himself but would one day
              make quality education accessible to every child in his community, regardless of their background.
            </p>
          </div>
        </div>

        {/* --- Chapter 2: Bridging Continents & Founder's Vision --- */}
        <div className="bg-light rounded-2xl p-8 md:p-16 flex flex-col md:flex-row-reverse items-center gap-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">

          {/* --- Image Side (RIGHT) --- */}
          <div className="w-full md:w-2/5 flex justify-center relative">
            <div className="relative w-64 h-96 md:w-80 md:h-[28rem]">
              <img
                src={founderImg}
                alt="Ali Afridi FCA - Founder Ali Public School"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* --- Text Side (LEFT) --- */}
          <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
            <div>
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-2 block">
                Founder's Vision
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                BRIDGING CONTINENTS
              </h2>
            </div>

            <p className="font-body text-gray-600 text-lg md:text-xl leading-relaxed">
              Ali Afridi FCA is the Founder of Ali Public School – Premier Campus and a British-educated Chartered Accountant with extensive international professional experience.
              Mr. Afridi completed his education in the United Kingdom, progressing through the IGCSE academic framework before qualifying as a Chartered Accountant. His professional formation in the UK instilled in him a deep appreciation for structured learning, disciplined institutional standards and the role that high-quality schooling plays in shaping future leaders.
              <br /><br />
              Inspired by these experiences, Mr. Afridi established Ali Public School – Premier Campus with the goal of bringing high standards of education, discipline and institutional integrity to young learners in Peshawar.
            </p>

            <div className="pt-4 border-t border-gray-200 inline-block md:block">
              <h4 className="font-heading text-xl font-bold text-primary">
                Ali Afridi FCA
              </h4>
            </div>
          </div>

        </div>



      </div>
    </section>
  );
};

export default LegacyStory;