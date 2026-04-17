import React from 'react';

const DownloadSection = () => {
  const colorMap = {
    primary: 'rgba(41, 35, 75, 0.1)',
    secondary: 'rgba(212, 175, 55, 0.1)',
    emerald: 'rgba(16, 185, 129, 0.1)'
  };

  const downloads = [
    {
      title: "Admissions Prospectus",
      description: "Complete guide to our programs, facilities and curriculum",
      size: "4.2 MB",
      icon: "📚",
      color: "primary"
    },
    {
      title: "Fee Structure",
      description: "Detailed fee breakdown for all grades and programs",
      size: "1.8 MB",
      icon: "💰",
      color: "secondary"
    },
    {
      title: "Academic Calendar",
      description: "Important dates and events for the academic year",
      size: "2.1 MB",
      icon: "📅",
      color: "emerald"
    },
    {
      title: "Application Form",
      description: "Printable application form for offline submission",
      size: "0.9 MB",
      icon: "📝",
      color: "primary"
    }
  ];

  return (
    <div className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Download <span className="text-secondary">Resources</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access all the documents you need for a smooth application process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloads.map((item, index) => (
            <div 
              key={index}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gold-10 h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group-hover:border-secondary">
                <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: colorMap[item.color] }}
              >
                  <span className="text-3xl">{item.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-500">{item.size}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-primary to-navy-80 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center group">
                    <span>Download</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">↓</span>
                  </button>
                </div>
                
                {/* Hover Effect Line */}
                <div className="w-0 h-1 bg-gradient-to-r from-secondary to-emerald mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-slide-up animation-delay-500">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white p-8 rounded-2xl border border-primary/20 shadow-lg">
            <div className="text-5xl animate-float-slow">✨</div>
            <div className="text-left">
              <h4 className="text-2xl font-heading font-bold text-primary mb-2">
                Need Printed Copies?
              </h4>
              <p className="text-gray-700 mb-4">
                Visit our campus to collect printed prospectus and application forms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;