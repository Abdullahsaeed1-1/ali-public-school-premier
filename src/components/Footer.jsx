import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaFilePdf,
  FaDownload,
  FaChevronRight
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import logo from '../assets/images/logo.png';
// NEW IMPORT: Importing the PDF file from assets
import prospectusFile from '../assets/prospectus.pdf';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(null);
  const mapDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=33.99053350641758,71.49571067960983&travelmode=driving&dir_action=navigate";

  return (
    <footer className="bg-white text-primary relative overflow-hidden border-t border-gray-200">

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-secondary blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary blur-3xl"></div>
      </div>

      {/* --- MAIN FOOTER CONTENT --- */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Brand Info */}
          <div className="space-y-2 animate-fade-in-up">
            <Link to="/" className="flex flex-col items-start gap-2 group">
              <img
                src={logo}
                alt="APS Premier Logo"
                className="h-20 w-auto filter drop-shadow-md"
              />

              <div>
                <span className="block font-heading text-lg font-bold tracking-wider text-primary">
                  ALI PUBLIC SCHOOL
                </span>
                <span className="block font-subheading text-xs text-secondary font-bold tracking-[0.3em] uppercase mt-1">
                  Premier
                </span>
              </div>
            </Link>

            <div className="flex gap-3 pt-2">
              {[
                { icon: FaFacebookF, href: 'https://www.facebook.com/share/1AkGpWRL7L/?mibextid=wwXIfr' },
                { icon: FaInstagram, href: 'https://www.instagram.com/apspremier.official?igsh=aGNjeWZzMnV0czd2&utm_source=qr' },
                { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/ali-public-school-premier-campus/' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="font-heading text-base font-bold text-primary mb-6 relative pb-3">
              <span className="relative">
                Quick Links
                <span className="absolute -bottom-3 left-0 w-12 h-1 bg-secondary rounded-full"></span>
              </span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Our Heritage', link: '/aboutpage' },
                { name: 'Academic Programs', link: '/academicspage' },
                { name: 'Admissions Process', link: '/campusadmissionspage' },
                { name: 'Legacy', link: '/aboutpage' },
              ].map((item, idx) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="flex items-center gap-3 font-subheading text-gray-600 hover:text-secondary py-2 group transition-all duration-300"
                  >
                    <FaChevronRight size={10} className="text-secondary opacity-50 group-hover:opacity-100 transition-all" />
                    <span className="flex-1 border-b border-transparent group-hover:border-gray-200 transition-all duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information & Downloads */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="font-heading text-base font-bold text-primary mb-6 relative pb-3">
              <span className="relative">
                Information
                <span className="absolute -bottom-3 left-0 w-12 h-1 bg-secondary rounded-full"></span>
              </span>
            </h3>
            <ul className="space-y-4">

              <li>
                <Link to="/faqs" className="flex items-center gap-3 font-subheading text-gray-600 hover:text-secondary group py-2 transition-colors duration-300">
                  <FaChevronRight size={10} className="text-secondary" />
                  <span>FAQs</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-3 font-subheading text-gray-600 hover:text-secondary group py-2 transition-colors duration-300">
                  <FaChevronRight size={10} className="text-secondary" />
                  <span>Contact</span>
                </Link>
              </li>

              {/* Download Card - UPDATED WITH PDF LINK */}
              <li className="pt-2">
                <div className="relative group overflow-hidden rounded-xl border border-gray-200 hover:border-secondary transition-all duration-300 bg-gray-50 hover:shadow-md">
                  <div className="relative p-4">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <FaFilePdf className="text-red-600 text-3xl z-10 relative" />
                      </div>
                      <div className="flex-1">
                        <span className="block font-subheading text-primary font-bold text-sm mb-1">Download Prospectus</span>
                        <span className="block font-subheading text-gray-500 text-xs mb-2">{currentYear}-{currentYear + 1} Session</span>
                        <a
                          href={prospectusFile}
                          download="APS_Premier_Prospectus.pdf"
                          className="flex items-center gap-2 font-subheading text-secondary hover:text-primary text-sm font-bold group transition-colors"
                        >
                          <FaDownload />
                          <span>Download PDF</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h3 className="font-heading text-base font-bold text-primary mb-6 relative pb-3">
              <span className="relative">
                Contact Us
                <span className="absolute -bottom-3 left-0 w-12 h-1 bg-secondary rounded-full"></span>
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="relative mt-1">
                  <FaMapMarkerAlt className="text-secondary text-xl z-10 relative" />
                </div>
                <div>
                  <span className="block font-subheading text-primary font-bold text-sm mb-1">Our Campus</span>
                  <span className="font-subheading text-gray-600 text-sm">
                    29 C 17 Circular Road,<br />
                    University Town,<br />
                    Peshawar, Pakistan, 25000
                  </span>
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 font-subheading text-secondary hover:text-primary text-sm font-semibold transition-colors duration-300"
                  >
                    Open in Maps
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="relative">
                  <FaPhoneAlt className="text-secondary text-lg z-10 relative" />
                </div>
                <div>
                  <span className="block font-subheading text-primary font-bold text-sm mb-1">Phone</span>
                  <a href="tel:+923340813562" className="font-subheading text-gray-600 hover:text-secondary text-sm transition-colors duration-300">
                    +92 334 0813562
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="relative">
                  <FiMail className="text-secondary text-lg z-10 relative" />
                </div>
                <div>
                  <span className="block font-subheading text-primary font-bold text-sm mb-1">Email</span>
                  <a href="mailto:info@apspremier.com" className="font-subheading text-gray-600 hover:text-secondary text-sm transition-colors duration-300">
                    info@apspremier.com
                  </a>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="bg-gray-50 border-t border-gray-200 py-4 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-subheading text-gray-500 text-sm">
                © {currentYear} Ali Public School Premier. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="text-gray-500 hover:text-primary text-sm font-medium transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;