import React from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa';

const LegacyVision = () => {
  return (
    <section className="py-24 bg-light relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center bg-white rounded-3xl p-12 md:p-20 shadow-xl border-t-8 border-secondary">
          <div className="inline-block p-4 bg-light rounded-full shadow-inner mb-6">
            <FaHandHoldingHeart className="text-4xl text-secondary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-6">
            World-Class Quality, Local Heart
          </h2>
          <p className="font-body text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            When Ali Public School was founded, the goal was simple: To offer the same high-quality syllabus 
            and teaching methodologies found in elite international schools, but at an economical cost. 
            We believe that <span className="text-primary font-bold">excellence is a right, not a privilege.</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-light p-8 md:p-10 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-primary text-lg mb-2 font-heading">Oxford Syllabus</h4>
              <p className="text-sm text-gray-600 font-body">Curriculum designed for global competitiveness and critical thinking.</p>
            </div>
            <div className="bg-light p-8 md:p-10 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-primary text-lg mb-2 font-heading">Accessibility</h4>
              <p className="text-sm text-gray-600 font-body">Fees structure consciously designed for the community's ease.</p>
            </div>
            <div className="bg-light p-8 md:p-10 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-primary text-lg mb-2 font-heading">Values Driven</h4>
              <p className="text-sm text-gray-600 font-body">Modern education deeply rooted in strong moral and ethical values.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LegacyVision;