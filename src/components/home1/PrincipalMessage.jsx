import React from 'react';
import principalProfile from "../../assets/images/pages/k.jpeg";

const PrincipalMessage = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Background Decorative Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-secondary blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-light rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">

          {/* --- Image Side --- */}
          <div className="w-full md:w-2/5 flex justify-center relative">
            <div className="relative w-64 h-96 md:w-80 md:h-[28rem]">
              <img
                src={principalProfile}
                alt="Principal Ms. Anum Imtiaz"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* --- Text Side --- */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
            <div>
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-2 block">
                Leadership Vision
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                MESSAGE FROM THE PRINCIPAL
              </h2>
            </div>

            {/* EXACT QUOTE FROM DOCUMENT */}
            <p className="font-body text-gray-600 text-lg md:text-xl leading-relaxed">
              For me, the early years of education are incredibly important in shaping a child's confidence, curiosity and lifelong love for learning.
              <br /><br />
              At Ali Public School Premier Campus, my aim is to help create a warm, nurturing and structured environment where every child feels encouraged, supported and inspired to do their best.
              <br /><br />
              I believe that when schools and families work closely together, children benefit the most.
              <br /><br />
              I warmly welcome you to APS Premier Campus and look forward to working together to support the growth and development of every child.
            </p>

            <div className="pt-4 border-t border-gray-200 inline-block md:block">
              {/* Name: Mr. Ali */}
              <h4 className="font-heading text-xl font-bold text-primary">
                Ms. Anum Imtiaz
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;