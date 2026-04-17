import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import schoolFront from "../assets/images/pages/schoolfront.png";

const Home = () => {
  useEffect(() => {
    // Simple scroll animation using Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={schoolFront}
            alt="Ali Public School Campus"
            className="w-full h-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/30"></div>

          <div className="absolute top-1/4 left-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-secondary/20 rounded-full blur-lg animate-float"></div>
          <div
            className="absolute top-2/3 right-1/4 w-8 h-8 sm:w-10 sm:h-10 bg-white/5 rounded-full blur-lg animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-4 h-4 sm:w-6 sm:h-6 bg-secondary/30 rounded-full blur-lg animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 animate-fade-in">
          <div className="mb-3 sm:mb-4 md:mb-6 animate-scale-in">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto group hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mb-3 sm:mb-4 md:mb-6 animate-slide-up w-full">
            <p className="font-subheading text-secondary uppercase font-bold tracking-wide text-xs sm:text-sm md:text-base">
              Excellence in Education Since 2012
            </p>
          </div>

          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 animate-scale-in w-full px-2 sm:px-4">
            <h1 className="font-heading text-white font-bold mx-auto max-w-4xl">
              <span className="block text-3xl md:text-5xl text-primary">ALI PUBLIC SCHOOL</span>
              <span className="block text-xl md:text-3xl text-secondary mt-2">PREMIER CAMPUS</span>
            </h1>

            <div className="mt-4 h-0.5 w-28 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"></div>
          </div>

          <p className="font-body text-gray-100 text-sm md:text-base max-w-md mx-auto animate-slide-up">
            GUIDE US TO THE RIGHT PATH
          </p>

          <div className="flex flex-col items-center gap-3 mt-6 animate-bounce-in w-full max-w-xs">
            <Link
              to="/admissions"
              className="group bg-gradient-to-r from-secondary to-yellow-500 text-primary font-bold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">🎓 APPLY FOR ADMISSION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>

            <Link
              to="/home1"
              className="group border border-white/50 text-white font-bold rounded-full px-8 py-3 hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              🔍 DISCOVER OUR CAMPUS
            </Link>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <span className="text-white/60 text-xs block">Scroll</span>
            <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center mt-1">
              <div className="w-1 h-3 bg-secondary mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-12 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading text-primary font-bold text-2xl">Why Choose APS?</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-2 mb-4"></div>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Experience excellence in education with our state-of-the-art facilities and curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🏆",
                title: "Academic Excellence",
                desc: "Consistent top results in board examinations",
              },
              {
                icon: "👨‍🏫",
                title: "Expert Faculty",
                desc: "Highly qualified and experienced teaching staff",
              },
              {
                icon: "🌳",
                title: "Green Campus",
                desc: "Eco-friendly, peaceful learning environment",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                <h3 className="font-heading text-primary font-bold text-lg mb-2 group-hover:text-secondary">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>

                <div className="relative z-10 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-secondary font-semibold">Learn More →</span>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* <ProspectusFlipbook /> */}

      

      {/* ANIMATION CSS */}
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes slideUp {
          from { transform: translateY(15px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .animate-scale-in {
          animation: scaleIn 0.8s ease-out;
        }

        @keyframes bounceIn {
          0% { transform: scale(0.9); opacity: 0; }
          50% { transform: scale(1.03); }
          70% { transform: scale(0.98); }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
};

export default Home;
