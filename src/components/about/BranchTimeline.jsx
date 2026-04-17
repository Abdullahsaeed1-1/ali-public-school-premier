import React, { useState, useEffect, useRef } from 'react';

const BranchTimeline = () => {
  const [activeMarker, setActiveMarker] = useState("2012");
  const [isMobile, setIsMobile] = useState(false);
  const roadContainerRef = useRef(null);
  
  const timelineEvents = [
    {
      year: "2012",
      title: "School Founded",
      achievements: [
        "Established as APS Premier School",
        "First campus in central location",
        "Started with 200 students",
        "CBSE curriculum introduced"
      ],
      highlight: true,
      icon: "🎓"
    },
    {
      year: "2015",
      title: "Junior Section Expanded",
      achievements: [
        "New junior wing inaugurated",
        "Play-based learning introduced",
        "Special activity rooms added",
        "Student capacity doubled to 400"
      ],
      icon: "👶"
    },
    {
      year: "2018",
      title: "New Senior & College Building",
      achievements: [
        "State-of-the-art senior building opened",
        "Science labs and computer labs established",
        "College section launched",
        "Library with 5000+ books"
      ],
      icon: "🏢"
    },
    {
      year: "2021",
      title: "Digital Learning Adoption",
      achievements: [
        "Smart classrooms implemented",
        "Online learning platform launched",
        "Digital assessment system",
        "Virtual labs for science subjects"
      ],
      icon: "💻"
    },
    {
      year: "2025",
      title: "Premier Branch Opening",
      achievements: [
        "Exclusive campus for high-income area",
        "International curriculum options",
        "Premium facilities and infrastructure",
        "Personalized learning programs"
      ],
      future: true,
      icon: "🌟"
    }
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-cream py-8 px-4 font-body">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-3">
            Our Journey Through Years
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to becoming an educational landmark
          </p>
        </div>

        {/* Mobile: Scrollable Horizontal Road */}
        {isMobile ? (
          <div className="relative mb-10">
            <div className="overflow-x-auto pb-6" ref={roadContainerRef}>
              <div className="relative min-w-[850px] h-[200px]">
                
                {/* Twisted Road Path - MODIFIED: Thicker & More Curvy */}
                <div className="absolute top-1/2 left-0 right-0 h-20">
                  {/* Road Base */}
                  <div className="absolute top-1/2 left-0 right-0 h-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-full transform -translate-y-1/2 shadow-xl"></div>
                  
                  {/* Curved Road SVG - MODIFIED: More Twisted & Thicker */}
                  <svg className="absolute top-1/2 left-0 w-full h-20 transform -translate-y-1/2" viewBox="0 0 850 80">
                    {/* Base Road - Thicker */}
                    <path 
                      d="M0,40 Q100,20 140,50 Q180,70 220,30 Q260,10 320,40 Q380,60 440,30 Q500,10 560,40 Q620,70 680,30 Q740,10 800,40" 
                      fill="none" 
                      stroke="#0f172a" 
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    {/* Yellow Dashed Line - Thicker */}
                    <path 
                      d="M0,40 Q100,20 140,50 Q180,70 220,30 Q260,10 320,40 Q380,60 440,30 Q500,10 560,40 Q620,70 680,30 Q740,10 800,40" 
                      fill="none" 
                      stroke="#f59e0b" 
                      strokeWidth="5"
                      strokeDasharray="12,8"
                      strokeLinecap="round"
                    >
                      <animate 
                        attributeName="stroke-dashoffset" 
                        from="0" 
                        to="25" 
                        dur="1.2s" 
                        repeatCount="indefinite" 
                      />
                    </path>
                  </svg>
                </div>

                {/* Red Flags on Road */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full">
                  {timelineEvents.map((event, index) => (
                    <div
                      key={event.year}
                      className="absolute transform -translate-x-1/2"
                      style={{ left: `${(index * 20) + 10}%` }}
                      onClick={() => setActiveMarker(event.year)}
                    >
                      {/* Flag Pole - Longer */}
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-32 ${
                        activeMarker === event.year ? 'bg-secondary' : 'bg-gray-800'
                      } rounded-t-lg`}></div>
                      
                      {/* Red Flag - Larger */}
                      <div className={`
                        absolute -top-14 left-1/2 transform -translate-x-1/2
                        w-24 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-r-lg shadow-2xl
                        ${activeMarker === event.year ? 'animate-flag-wave' : ''}
                        cursor-pointer transition-transform duration-300 hover:scale-125
                      `}>
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-gray-900"></div>
                        <div className="text-white text-base font-bold px-3 pt-4 flex items-center gap-2">
                          <span>{event.icon}</span>
                          <span>{event.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Year Labels Below */}
                <div className="absolute bottom-4 left-0 w-full">
                  {timelineEvents.map((event, index) => (
                    <div
                      key={event.year}
                      className="absolute transform -translate-x-1/2 text-center"
                      style={{ left: `${(index * 20) + 10}%` }}
                    >
                      <div className={`text-sm font-semibold px-4 py-2 rounded-lg ${
                        activeMarker === event.year 
                          ? 'bg-primary text-white shadow-lg transform scale-110' 
                          : 'bg-gray-100 text-gray-700'
                      } transition-all duration-300`}>
                        {event.title.split(' ')[0]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                <span className="animate-bounce">←</span>
                <span>Scroll to explore</span>
                <span className="animate-bounce animation-delay-300">→</span>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop: More Twisted & Thicker Road */
          <div className="relative mb-12">
            <div className="relative h-[250px]">
              
              {/* Twisted Road for Desktop - MODIFIED: More Twisted & Thicker */}
              <div className="absolute top-1/2 left-6 right-6 h-28">
                <svg className="absolute top-1/2 left-0 w-full h-28 transform -translate-y-1/2" viewBox="0 0 1000 120">
                  {/* Base Road - Much Thicker & More Curvy */}
                  <path 
                    d="M0,60 Q120,20 200,70 Q280,100 360,40 Q440,0 520,60 Q600,100 680,30 Q760,0 840,60 Q920,100 1000,60" 
                    fill="none" 
                    stroke="#0f172a" 
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  {/* Yellow Dashed Line - Thicker */}
                  <path 
                    d="M0,60 Q120,20 200,70 Q280,100 360,40 Q440,0 520,60 Q600,100 680,30 Q760,0 840,60 Q920,100 1000,60" 
                    fill="none" 
                    stroke="#fbbf24" 
                    strokeWidth="7"
                    strokeDasharray="16,12"
                    strokeLinecap="round"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="0" 
                      to="35" 
                      dur="1.2s" 
                      repeatCount="indefinite" 
                    />
                  </path>
                </svg>

                {/* Road Side Shadows - Added for 3D effect */}
                <div className="absolute top-1/2 left-0 w-full h-32 transform -translate-y-1/2 -z-10">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-900/20 via-gray-800/30 to-gray-900/20 blur-sm"></div>
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-900/20 via-gray-800/30 to-gray-900/20 blur-sm"></div>
                </div>

                {/* Red Flags on Road - Larger */}
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20"
                    style={{ left: `${(index * 20) + 10}%` }}
                    onMouseEnter={() => setActiveMarker(event.year)}
                    onClick={() => setActiveMarker(event.year)}
                  >
                    {/* Flag Pole - Thicker & Longer */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-40 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent rounded-t-lg"></div>
                    
                    {/* Red Flag - Larger */}
                    <div className={`
                      relative w-28 h-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-r-lg shadow-3xl
                      ${activeMarker === event.year ? 'animate-flag-wave' : ''}
                      cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-4xl
                    `}>
                      <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-10 border-b-10 border-l-10 border-transparent border-l-gray-900"></div>
                      <div className="text-white font-bold px-5 pt-5 flex items-center justify-between">
                        <span className="text-xl">{event.icon}</span>
                        <span className="text-lg">{event.year}</span>
                      </div>
                      {/* Flag Detail */}
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-white/30"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Road Labels - More Prominent */}
            <div className="flex justify-between px-8 mt-32">
              {timelineEvents.map((event) => (
                <div
                  key={event.year}
                  className={`text-center cursor-pointer transition-all duration-300 ${
                    activeMarker === event.year ? 'scale-125' : ''
                  }`}
                  onClick={() => setActiveMarker(event.year)}
                >
                  <div className={`text-base font-bold px-5 py-3 rounded-xl shadow-lg ${
                    activeMarker === event.year 
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-xl transform -translate-y-2' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl'
                  } transition-all duration-300`}>
                    {event.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Display */}
        <div className="bg-white rounded-2xl shadow-xl border border-gold-20 p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary">
                Achievements in <span className="text-secondary">{activeMarker}</span>
              </h2>
              <p className="text-gray-600 mt-1">
                {timelineEvents.find(e => e.year === activeMarker)?.title}
              </p>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              {timelineEvents.map((event) => (
                <button
                  key={event.year}
                  onClick={() => setActiveMarker(event.year)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeMarker === event.year
                      ? event.future
                        ? 'bg-emerald text-white shadow-lg'
                        : event.highlight
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-secondary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {event.year}
                </button>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className={`
            grid gap-4
            ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-4'}
          `}>
            {timelineEvents
              .find(event => event.year === activeMarker)
              ?.achievements.map((achievement, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-light to-white p-4 rounded-xl border border-gold-10 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0
                      ${activeMarker === "2025" ? 'bg-emerald-20 text-emerald' :
                        activeMarker === "2012" ? 'bg-primary/10 text-primary' :
                        'bg-secondary/10 text-secondary'}
                      text-lg
                    `}>
                      ✓
                    </div>
                    <p className="text-gray-800">{achievement}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl shadow border border-gold-10 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold font-heading text-primary mb-2">13+</div>
            <div className="text-gray-600 font-medium">Years of Excellence</div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow border border-gold-10 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold font-heading text-secondary mb-2">5</div>
            <div className="text-gray-600 font-medium">Major Milestones</div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow border border-gold-10 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold font-heading text-emerald mb-2">3</div>
            <div className="text-gray-600 font-medium">Campuses</div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow border border-gold-10 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold font-heading text-primary mb-2">2000+</div>
            <div className="text-gray-600 font-medium">Students Educated</div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes flagWave {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          25% { transform: translateX(-50%) rotate(8deg); }
          75% { transform: translateX(-50%) rotate(-8deg); }
        }
        
        .animate-flag-wave {
          animation: flagWave 1.5s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        
        .shadow-4xl {
          box-shadow: 0 35px 60px rgba(0, 0, 0, 0.25);
        }
        
        /* Custom scrollbar for mobile road */
        .overflow-x-auto::-webkit-scrollbar {
          height: 10px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 5px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #D4AF37, #b8941f);
          border-radius: 5px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #b8941f, #9c7c1a);
        }
        
        /* Road 3D effect */
        .road-shadow {
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
        }
      `}</style>
    </div>
  );
};

export default BranchTimeline;