import React from 'react';
import campusTour from "../../assets/videos/campustour (1).mp4";
import brochureImg from "../../assets/images/brochure.png";

import { Link } from 'react-router-dom';

const VisitUs = () => {
    const mapDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=33.99053350641758,71.49571067960983&travelmode=driving&dir_action=navigate";

    return (
        /* Padding ko mobile par thoda kam kiya hai taake screen space bache */
        <div className="py-12 md:py-20 lg:py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                



                
                {/* Grid: Mobile pe 1 column, LG pe 2 columns. Gap ko screens ke mutabiq adjust kiya hai */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    
                    {/* --- Left Column: Text Content --- */}
                    <div className="order-2 lg:order-1 animate-slide-up">
                        <div className="inline-flex items-center mb-4 md:mb-6">
                            <div className="w-8 h-1 md:w-12 bg-secondary mr-3"></div>
                            <span className="text-secondary font-bold text-xs md:text-sm tracking-widest uppercase">VISIT US</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6 leading-tight">
                            Explore Our <span className="text-secondary">Purpose-Built</span> Campus
                        </h2>

                        <p className="text-gray-600 mb-8 font-body text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                            Schedule an appointment to tour our modern facilities designed for 21st-century learning. Experience the environment where your child's future begins.
                        </p>

                        {/* Icons List: Icons ka size aur spacing mobile ke liye adjust ki hai */}
                        <div className="space-y-6 md:space-y-8">
                            
                            {/* Location Item */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-white shadow-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-gold-10 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-base md:text-lg">Premier Campus Location</h4>
                                    <p className="text-gray-600 text-sm leading-snug">29 C 17 Circular Road, near KFC, University Town, Peshawar</p>
                                    <a
                                        href={mapDirectionsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex mt-2 text-secondary hover:text-[#29234B] text-sm font-semibold transition-colors duration-300"
                                    >
                                        Open in Maps
                                    </a>
                                </div>
                            </div>

                            {/* Timings Item */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-white shadow-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-gold-10 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">🕒</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-base md:text-lg">Visiting Hours</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                                        <p className="text-gray-600 text-sm">Mon-Fri: 8:00 AM - 4:00 PM</p>
                                        <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Item */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-white shadow-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-gold-10 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">📞</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-base md:text-lg">Direct Contact</h4>
                                    <p className="text-gray-600 text-sm font-semibold">+92 334 0813562</p>
                                    <p className="text-gray-600 text-xs md:text-sm">principal@apspremier.com</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button: Mobile pe Full width ho sakta hai agar aap chahen, abhi inline hai */}
                        <div className="mt-10">
                            <Link to="/aboutpage" className="inline-block w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#29234B] text-white font-bold rounded-xl hover:bg-[#D4AF37] hover:text-[#29234B] transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                                    <span>View Campus Highlights</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* --- Right Column: Video Card --- */}
                    <div className="order-1 lg:order-2 relative animate-fade-in">
                        {/* Decorative Background Element */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
                        
                        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gold-10 overflow-hidden relative z-10">
                            {/* Video Header */}
                            <div className="bg-[#29234B] p-5 md:p-6 text-center">
                                <h3 className="text-xl md:text-2xl font-heading font-bold text-white tracking-wide">
                                    Virtual Campus Tour
                                </h3>
                                <p className="text-white/70 text-xs md:text-sm mt-1 uppercase tracking-widest">Ali Public School Premier</p>
                            </div>

                            {/* Video Container: Aspect ratio lock kiya hai taake mobile pe kharab na ho */}
                            <div className="p-4 md:p-6">
                                <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-inner border border-gray-100">
                                    <video
                                        className="w-full h-full object-cover"
                                        src={campusTour}
                                        preload="none"
                                        loop
                                        muted
                                        controls
                                        playsInline
                                    />
                                </div>

                                {/* Bottom Buttons: Mobile pe 1 column, Tablet+ pe 2 columns */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                                    <Link to="/aboutpage" className="w-full">
                                        <button className="w-full py-3 px-4 bg-gray-50 text-primary font-bold rounded-xl border border-gray-200 hover:border-secondary hover:bg-white transition-all text-sm">
                                            🖼️ Photo Gallery
                                        </button>
                                    </Link>

                                    <a href={brochureImg} download className="w-full">
                                        <button className="w-full py-3 px-4 bg-gray-50 text-primary font-bold rounded-xl border border-gray-200 hover:border-secondary hover:bg-white transition-all text-sm">
                                            📄 Download Brochure
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VisitUs;