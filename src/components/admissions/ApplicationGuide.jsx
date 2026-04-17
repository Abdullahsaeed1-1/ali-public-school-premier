import React from 'react';

const ApplicationGuide = () => {
  const colorMap = {
    primary: 'rgba(41, 35, 75, 0.1)',
    secondary: 'rgba(212, 175, 55, 0.1)',
    emerald: 'rgba(16, 185, 129, 0.1)'
  };

  const applicationPoints = [
    {
      title: "Simple Steps",
      description: "Clear, easy-to-follow application process with guidance at every stage",
      icon: "✅",
      color: "emerald"
    },



    {
      title: "Rolling Admissions",
      description: "Applications accepted year-round based on seat availability",
      icon: "📅",
      color: "secondary"
    },
    {
      title: "Flexible Schedule",
      description: "Multiple admission cycles for your convenience",
      icon: "⚡",
      color: "primary"
    }
  ];

  const keyDates = [
    { 
      month: "January", 
      event: "Spring Session Applications Open",
      status: "current"
    },
    { 
      month: "March", 
      event: "Admission Assessments Begin",
      status: "upcoming"
    },
    { 
      month: "June", 
      event: "Summer Session Enrollment",
      status: "future"
    },
    { 
      month: "September", 
      event: "Fall Session Deadline",
      status: "future"
    },
    { 
      month: "November", 
      event: "Early Bird Registration Opens",
      status: "future"
    }
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4">
            How to <span className="text-secondary">Apply</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base lg:text-lg px-4">
            Our streamlined process ensures a smooth journey from inquiry to enrollment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Application Features */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gold-10 h-full">
              <div className="flex items-center mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4">
                  <span className="text-xl md:text-2xl text-primary">📋</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Application Features</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Designed for your convenience</p>
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {applicationPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-3 md:p-4 bg-cream rounded-lg md:rounded-xl border border-gold-10 hover:border-secondary transition-all duration-300 hover:shadow-md animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0 mr-3 md:mr-4"
                      style={{ backgroundColor: colorMap[point.color] }}
                    >
                      <span className="text-lg md:text-xl">{point.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-primary mb-1">{point.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 md:mt-8 p-3 md:p-4 bg-cream rounded-lg md:rounded-xl border border-primary/10">
                <div className="flex items-start">
                  <span className="text-xl md:text-2xl text-secondary mr-2 md:mr-3">💡</span>
                  <div>
                    <p className="text-primary font-semibold text-sm md:text-base">Pro Tip:</p>
                    <p className="text-gray-600 text-xs md:text-sm">Submit your application early to secure your preferred campus and session.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Dates */}
          <div className="animate-slide-up animation-delay-300">
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gold-10 h-full">
              <div className="flex items-center mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4">
                  <span className="text-xl md:text-2xl text-secondary">📌</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                    Key Dates <span className="text-gray-500 text-xs md:text-sm font-normal">(Tentative)</span>
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">Plan your application timeline</p>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {keyDates.map((date, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 md:p-4 bg-cream rounded-lg md:rounded-xl border border-gold-10 hover:border-secondary transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex flex-col items-center justify-center flex-shrink-0 mr-3 md:mr-4 ${
                      date.status === 'current' ? 'bg-emerald/20' :
                      date.status === 'upcoming' ? 'bg-secondary/20' :
                      'bg-primary/10'
                    }`}>
                      <span className="text-[10px] md:text-xs font-semibold text-gray-600">MONTH</span>
                      <span className="text-base md:text-lg font-bold text-primary">{date.month.slice(0, 3)}</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-primary text-sm md:text-base">{date.event}</h4>
                      <div className="flex flex-wrap items-center mt-1 gap-1 md:gap-2">
                        <span className={`text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full ${
                          date.status === 'current' ? 'bg-emerald/20 text-emerald' :
                          date.status === 'upcoming' ? 'bg-secondary/20 text-secondary' :
                          'bg-primary/10 text-primary'
                        }`}>
                          {date.status.charAt(0).toUpperCase() + date.status.slice(1)}
                        </span>
                        <span className="text-[10px] md:text-xs text-gray-500">Check portal for dates</span>
                      </div>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-secondary transition-colors duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 md:mt-6 text-center">
                <button className="px-4 py-2 md:px-6 md:py-3 bg-white border border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center text-sm md:text-base mx-auto">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Academic Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationGuide;