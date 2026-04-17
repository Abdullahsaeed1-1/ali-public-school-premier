import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHistory } from 'react-icons/fa';

const LegacyTeaser = () => {
  return (
    // Change 1: Background White
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Pattern (Subtle Grey for White BG) */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-[-100px] top-[-100px] w-96 h-96 rounded-full border-4 border-primary/10"></div>
        <div className="absolute right-[-50px] top-[-50px] w-64 h-64 rounded-full border-2 border-primary/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-secondary text-primary font-bold px-3 py-1 text-xs rounded uppercase tracking-wider">
                Our Origin
              </span>
            </div>
            
            {/* Change 2: Text Deep Purple (Navy) */}
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-6 leading-tight">
              BUILT ON A DREAM, <br />
              <span className="text-secondary">FUELLED BY PASSION</span>
            </h2>
            
            {/* Change 3: Paragraph Text Dark Grey */}
            <p className="font-body text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
              From humble beginnings to bringing UK-standard education to Peshawar. 
              Discover the inspiring journey of our founder who turned a personal dream into a legacy of affordable excellence.
            </p>

            {/* Change 4: Button Style (Navy Background, White Text) & Link Fix */}
            {/* Make sure App.js has: <Route path="/LegacyPage" element={<LegacyPage />} /> */}
            <Link 
              to="/LegacyPage" 
              className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              Read Our Full Story <FaArrowRight />
            </Link>
          </div>

          {/* Decorative Icon/Image Side */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            {/* Change 5: Icon Container adjusted for White BG */}
            <div className="relative w-48 h-48 bg-primary/5 rounded-full flex items-center justify-center border border-primary/10 backdrop-blur-sm animate-float">
              <FaHistory className="text-6xl text-primary opacity-80" />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-secondary text-primary px-4 py-2 rounded-lg font-bold shadow-xl text-sm">
                15+ Years of Success
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LegacyTeaser;