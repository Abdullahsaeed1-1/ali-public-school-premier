import React from 'react';
import { FaInstagram, FaFacebookF, FaStar, FaHandsHelping, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

const NewsGrid = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
            School Life
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold tracking-wide">
            HAPPENING AT APS PREMIER
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[650px]">
          
          {/* --- 1. BIG FEATURE BLOCK: ADMISSIONS  --- */}
          <div className="md:col-span-2 md:row-span-2 bg-primary relative overflow-hidden rounded-2xl group p-10 flex flex-col justify-end shadow-2xl border-t-4 border-secondary">
             
             {/* ✅ Background Logo Watermark (Clean & Subtle) */}
             <div className="absolute -top-10 -right-10 opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
               <img src={logo} alt="Watermark" className="w-80 h-auto grayscale invert" />
             </div>
             
             <div className="relative z-10">
               <span className="inline-block bg-secondary/90 text-primary text-xs font-bold px-3 py-1 rounded mb-4 tracking-wider uppercase backdrop-blur-sm">
                 Admissions 2025
               </span>
               
               <h3 className="font-heading text-3xl md:text-4xl text-white font-bold mb-4 leading-tight">
                 Welcome to APS Premier
               </h3>
               
               <p className="font-body text-gray-300 mb-8 text-base leading-relaxed max-w-md">
                 We are excited to welcome families seeking a nurturing and modern environment. Our admission process is designed to be simple and transparent.
               </p>
               
               <div className="flex gap-4">
                 <Link to="/admissions" className="bg-secondary text-primary font-bold py-3 px-6 rounded shadow-lg hover:bg-white transition-all duration-300 flex items-center gap-2">
                   Apply Now <FaArrowRight className="text-xs" />
                 </Link>
                 <Link to="/contact" className="bg-transparent border border-white/30 text-white font-bold py-3 px-6 rounded hover:bg-white/10 transition-all duration-300">
                   Visit Campus
                 </Link>
               </div>
             </div>
          </div>

          {/* --- 2. IMAGE TILE: Morning Circle  --- */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Morning Circle"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex items-end p-5">
               <div>
                 <span className="text-secondary text-[10px] uppercase font-bold tracking-widest block mb-1">Daily Routine</span>
                 <p className="text-white font-heading text-lg font-bold leading-tight">Morning Circle Time</p>
               </div>
            </div>
          </div>

          {/* --- 3. IMAGE TILE: Buddy Programme  --- */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Buddy Programme"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex items-end p-5">
               <div>
                 <span className="text-secondary text-[10px] uppercase font-bold tracking-widest block mb-1">Character Building</span>
                 <p className="text-white font-heading text-lg font-bold leading-tight">Buddy Programme</p>
               </div>
            </div>
          </div>

          {/* --- 4. TEXT TILE: Values (Kindness) [cite: 393] --- */}
          <div className="md:col-span-1 md:row-span-1 bg-white p-8 rounded-2xl flex flex-col justify-center text-center group hover:bg-secondary transition duration-500 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <FaStar className="text-secondary text-xl group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-heading text-primary text-xl mb-3 font-bold group-hover:text-white transition-colors">
                Our Values
            </h4>
            <p className="text-gray-600 text-sm font-body leading-relaxed group-hover:text-white/90 transition-colors">
              "Curiosity, Kindness, Confidence."<br/>Creating a joyful learning environment.
            </p>
          </div>

           {/* --- 5. IMAGE TILE: Community Service  --- */}
           <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Community Projects"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex items-end p-5">
               <div>
                 <span className="text-secondary text-[10px] uppercase font-bold tracking-widest block mb-1">Active Citizenship</span>
                 <p className="text-white font-heading text-lg font-bold leading-tight">Community Help Projects</p>
               </div>
            </div>
            {/* Social Icon Overlay */}
             <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-secondary transition-colors">
              <FaInstagram className="text-white text-sm" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsGrid;