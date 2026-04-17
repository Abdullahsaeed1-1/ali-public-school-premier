import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Inquiry",
      description: "Complete our online inquiry form to begin the journey",
      icon: "📝",
      duration: "1-2 days"
    },
    {
      number: "02",
      title: "School Tour",
      description: "Visit our purpose-built campus and experience facilities",
      icon: "🏫",
      duration: "Flexible"
    },
    {
      number: "03",
      title: "Parent Meeting",
      description: "Meet with admissions team to discuss needs",
      icon: "🤝",
      duration: "45 min"
    },
    {
      number: "04",
      title: "Child Interaction",
      description: "Interactive session to understand potential",
      icon: "🎯",
      duration: "1 hour"
    },
    {
      number: "05",
      title: "Offer & Registration",
      description: "Receive admission offer and complete registration",
      icon: "🎉",
      duration: "48 hours"
    }
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4">
            Admission <span className="text-secondary">Procedure</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
            A seamless journey towards your child's educational success
          </p>
        </div>

        <div className="relative">
          {/* Grid Container - All boxes same size */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group animate-slide-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Card - Fixed Height */}
                <div className="relative bg-white rounded-xl md:rounded-2xl p-6 shadow-lg border border-gold-10 hover:shadow-xl transition-all duration-500 group-hover:border-secondary overflow-hidden h-full flex flex-col">
                  
                  {/* Step Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-105 transition-all duration-500">
                      <div className="w-14 h-14 md:w-18 md:h-18 bg-gradient-to-br from-primary to-navy-80 rounded-full flex items-center justify-center">
                        <span className="text-2xl md:text-3xl text-white">{step.icon}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      Step {step.number}
                    </span>
                  </div>
                  
                  {/* Step Content - Flex grow for equal height */}
                  <div className="flex-grow text-center flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 font-body leading-relaxed flex-grow">
                      {step.description}
                    </p>
                    
                    {/* Duration Badge */}
                    <div className="inline-flex items-center justify-center px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mx-auto">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {step.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Process Note - Below all boxes */}
          <div className="mt-10 md:mt-12 lg:mt-16 animate-fade-in animation-delay-1000">
            <div className="bg-cream rounded-xl md:rounded-2xl p-6 border border-gold-10 shadow-sm">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <span className="text-3xl md:text-4xl text-emerald">💡</span>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-primary mb-2 text-lg md:text-xl">Rolling Admissions</h4>
                  <p className="text-gray-600 text-base md:text-lg">
                    Applications are accepted throughout the year based on availability. 
                    Early submission recommended for preferred session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default ProcessSteps;