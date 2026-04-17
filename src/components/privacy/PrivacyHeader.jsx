import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaArrowLeft } from 'react-icons/fa';

const PrivacyHeader = () => {
    return (

        <div className="relative bg-gradient-to-r from-[#FAFAFA] via-white to-[#FAFAFA] text-[#29234B] py-16 px-4 md:px-8 overflow-hidden border-b border-[#E5E7EB]">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/10 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#10B981]/10 animate-float"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* ✅ BACK BUTTON ADD KI HAI TOP PAR */}
                <div className="flex items-center mb-8 animate-slide-in-left">
                    "    "
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 animate-pulse-gentle border border-[#D4AF37]/30 shadow-sm">
                            <FaShieldAlt className="mr-2 text-[#D4AF37]" />
                            <span className="font-semibold text-[#D4AF37]">Privacy & Security</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-text-focus text-[#29234B]">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-[#29234B]/90 max-w-3xl leading-relaxed animate-text-slide">
                            Protecting your privacy and ensuring the security of personal information
                            is our highest priority at Ali Public School.
                        </p>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#D4AF37]/30 transition-all duration-500 animate-scale-in shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#29234B]/5 flex items-center justify-center mr-4 animate-rotate-slow">
                                <FaLock className="text-[#29234B] text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#29234B]">Last Updated</h3>
                                <p className="text-[#D4AF37] font-semibold animate-pulse-soft">March 15, 2024</p>
                            </div>
                        </div>
                        <p className="text-[#29234B]/80 text-sm">
                            This policy is reviewed and updated annually to ensure compliance
                            with the latest data protection regulations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyHeader;