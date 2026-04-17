import React from 'react';

const UpdatesSection = ({ policyUpdates }) => {
  return (
    <div className="bg-gradient-to-r from-[#29234B] via-[#3D366A] to-[#29234B] rounded-2xl p-8 mb-8 animate-pulse-gentle">
      <h2 className="font-heading text-3xl font-bold text-white mb-6 animate-text-focus">
        Policy Updates & History
      </h2>
      
      <div className="space-y-4">
        {policyUpdates.map((update, index) => (
          <div 
            key={index}
            className="bg-white/10 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:bg-white/15 hover:border-[#D4AF37]/30 transition-all duration-500 animate-slide-in-left"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-[#D4AF37] font-bold animate-text-focus">{update.date}</span>
              <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-sm rounded-full animate-pulse border border-[#D4AF37]/30">
                Update
              </span>
            </div>
            <p className="text-white">{update.change}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/20 animate-fade-in-up">
        <p className="text-white/90 text-lg">
          We notify all stakeholders of significant policy changes through:
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          {['Email notifications', 'Parent portal announcements', 'School newsletter', 'Website updates'].map((method, idx) => (
            <div 
              key={idx} 
              className="flex items-center px-4 py-2 bg-white/10 rounded-full hover:bg-white/15 transition-all duration-300 animate-bounce-subtle border border-white/20"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2 animate-pulse"></div>
              <span className="text-white">{method}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatesSection;