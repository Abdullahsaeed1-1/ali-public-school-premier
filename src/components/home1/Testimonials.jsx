import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  // Content based on School Values (Integrity, Excellence, Safety) from Document
  const reviews = [
    { 
      name: "Mrs. Rabia Khan", 
      role: "Parent, Grade 3", 
      text: "APS Premier isn't just about grades. I see my daughter growing in confidence and kindness every day. The balance between character building and academics is exactly what we needed." 
    },
    { 
      name: "Mr. Taimoor Shah", 
      role: "Parent, Early Years", 
      text: "The facilities at the new campus are world-class. It's a relief knowing my son is in such a safe, modern and values-driven environment. The teachers are truly mentors." 
    },
    { 
      name: "Dr. Sarah Ahmed", 
      role: "Mother of two APS students", 
      text: "We chose APS Premier for its British-inspired curriculum and smart classrooms. Seeing my children excited to go to school every morning is the best feedback I can give." 
    }
  ];

  return (
    // Background WHITE as requested
    <section className="py-20 bg-white relative">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4 tracking-wide">
            WHAT PARENTS SAY
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-light p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-secondary group hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-primary/20 text-4xl mb-6 group-hover:text-secondary transition-colors" />
              
              {/* Review Text - Dark Grey for readability */}
              <p className="font-body text-gray-600 italic text-sm md:text-base mb-8 leading-relaxed">
                "{review.text}"
              </p>
              
              {/* Author Details */}
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                {/* Initials Circle */}
                <div className="w-10 h-10 bg-primary text-secondary rounded-full flex items-center justify-center font-heading font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                
                {/* Name & Role */}
                <div>
                  <h4 className="font-heading font-bold text-primary text-base">
                    {review.name}
                  </h4>
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-subheading">
                    {review.role}
                  </span>
                </div>
              </div>

              {/* 5 Stars Decoration */}
              <div className="flex gap-1 text-secondary/40 text-xs mt-4 group-hover:text-secondary transition-colors">
                 {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;