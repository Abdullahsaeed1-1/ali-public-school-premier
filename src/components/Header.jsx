import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

// --- CONFIGURATION CONSTANTS ---
const SCROLL_BREAKPOINT = 50; // Pixels to scroll before header changes
const LOGO_SIZE_LARGE = "h-16 w-16 md:h-20 md:w-20"; // Top Position Size
const LOGO_SIZE_SMALL = "h-12 w-12 md:h-14 md:w-14"; // Scrolled Position Size

// --- NAVIGATION DATA ---
const NAV_LINKS = [
  { 
    id: 1, 
    path: "/home1", 
    label: "Home", 
    icon: "🏠" 
  },
  { 
    id: 2, 
    path: "/aboutpage", 
    label: "About Us", 
    icon: "🎓" 
  },
  { 
    id: 3, 
    path: "/legacypage", 
    label: "Legacy", 
    icon: "🏛️" 
  },
  { 
    id: 4, 
    path: "/academicspage", 
    label: "Academics", 
    icon: "📚" 
  },
  { 
    id: 5, 
    path: "/campusadmissionspage", 
    label: "Admissions", 
    icon: "📝" 
  },
  { 
    id: 6, 
    path: "/contact", 
    label: "Contact", 
    icon: "📞" 
  }
];

const Header = () => {
  // ==========================================================================
  //  STATE MANAGEMENT
  // ==========================================================================
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  
  // Router Hooks
  const location = useLocation();
  const currentPath = location.pathname;

  // ==========================================================================
  //  SCROLL HANDLER
  // ==========================================================================
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > SCROLL_BREAKPOINT) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // ==========================================================================
  //  ROUTE CHANGE HANDLER
  // ==========================================================================
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
    setIsScrolled(false);
  }, [location]);

  // ==========================================================================
  //  MOBILE MENU HANDLERS
  // ==========================================================================
  const toggleMobileMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "unset";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  // ==========================================================================
  //  RENDER HELPERS
  // ==========================================================================
  
  // Header Container Classes
  const headerClasses = `
    fixed top-0 left-0 right-0 z-[999] 
    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${isScrolled 
      ? "bg-white shadow-xl py-2"
      : "bg-transparent py-5"
    }
    ${isMenuOpen ? "!bg-[#29234B]" : ""}
  `;

  // Text Color Logic
  const getTextColor = (isActive) => {
    if (isMenuOpen) return "text-white";
    if (isActive) return "text-[#D4AF37]";
    if (isScrolled) return "text-[#29234B] hover:text-[#D4AF37]";
    return "text-white hover:text-[#D4AF37]";
  };

  return (
    <>
      <style>{`
        /* Underline Expansion Animation */
        @keyframes expandLine {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .nav-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #D4AF37;
          border-radius: 2px;
          animation: expandLine 0.3s ease-out forwards;
        }

        /* Mobile Menu Items Slide In */
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .mobile-item-enter {
          animation: slideIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}</style>

      <header className={headerClasses}>
        
        {/* Optional Gradient Overlay for Readability on Top */}
        {!isScrolled && !isMenuOpen && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none -z-10 transition-opacity duration-700"></div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* LOGO & BRANDING */}
            <Link 
              to="/home1" 
              className="flex items-center gap-3 group relative z-50 focus:outline-none"
              onClick={closeMobileMenu}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={logo}
                  alt="Ali Public School Logo"
                  className={`
                    object-contain transition-all duration-500 ease-in-out transform origin-left
                    ${isScrolled ? LOGO_SIZE_SMALL : LOGO_SIZE_LARGE}
                  `}
                />
              </div>

              <div className="flex flex-col justify-center gap-0">
                <h1 className={`
                  font-heading font-bold tracking-wide leading-none whitespace-nowrap
                  transition-colors duration-300
                  ${isScrolled 
                    ? "text-[#29234B] text-base md:text-xl" 
                    : "text-white text-lg md:text-2xl drop-shadow-md"
                  }
                  ${isMenuOpen ? "!text-white" : ""}
                `}>
                  ALI PUBLIC SCHOOL
                </h1>

                <span className={`
                  font-subheading font-bold uppercase tracking-[0.2em]
                  transition-colors duration-300
                  ${isScrolled 
                    ? "text-[#D4AF37] text-[10px] md:text-xs" 
                    : "text-gray-200 text-[10px] md:text-xs drop-shadow-sm"
                  }
                  ${isMenuOpen ? "!text-white/70" : ""}
                `}>
                  Premier
                </span>

                <span className={`
                  font-subheading italic font-medium tracking-wide
                  transition-colors duration-300 text-[8px] md:text-[9px] leading-tight
                  ${isScrolled 
                    ? "text-gray-700" 
                    : "text-white drop-shadow-md"
                  }
                  ${isMenuOpen ? "!text-white/60" : ""}
                `}>
                  Circular Road, University Town, Peshawar
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={`
                      relative px-4 py-2.5 rounded-lg group overflow-hidden
                      transition-all duration-300
                      ${isActive ? "nav-underline" : ""}
                    `}
                    onMouseEnter={() => setIsHovered(link.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div className={`
                      absolute inset-0 transition-transform duration-300 origin-center scale-x-0 group-hover:scale-x-100 rounded-lg
                      ${isScrolled ? "bg-[#29234B]/5" : "bg-white/10"}
                    `}></div>

                    <span className={`
                      relative font-subheading font-bold text-sm uppercase tracking-wider
                      transition-colors duration-300
                      ${getTextColor(isActive)}
                    `}>
                      {link.label}
                    </span>
                  </Link>
                );
              })}

            </nav>

            {/* MOBILE TOGGLE BUTTON */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors focus:outline-none"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="relative w-7 h-5 flex flex-col justify-between items-center">
                <span className={`
                  w-full h-0.5 rounded-full transition-all duration-300 transform origin-left
                  ${isMenuOpen 
                    ? "bg-[#D4AF37] rotate-45 translate-x-1" 
                    : isScrolled ? "bg-[#29234B]" : "bg-white"
                  }
                `}></span>
                
                <span className={`
                  w-full h-0.5 rounded-full transition-all duration-300
                  ${isMenuOpen 
                    ? "opacity-0 translate-x-full" 
                    : isScrolled ? "bg-[#29234B]" : "bg-white"
                  }
                `}></span>
                
                <span className={`
                  w-full h-0.5 rounded-full transition-all duration-300 transform origin-left
                  ${isMenuOpen 
                    ? "bg-[#D4AF37] -rotate-45 translate-x-1" 
                    : isScrolled ? "bg-[#29234B]" : "bg-white"
                  }
                `}></span>
              </div>
            </button>

          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`
            fixed inset-0 z-40 lg:hidden bg-[#29234B]
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isMenuOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-full"}
          `}
          style={{ paddingTop: '100px' }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="container mx-auto px-6 h-full flex flex-col relative z-10 overflow-y-auto pb-10">
            
            <nav className="flex-1 flex flex-col space-y-3 mt-4">
              {NAV_LINKS.map((link, index) => {
                const isActive = currentPath === link.path;
                return (
                  <Link
                    key={link.id}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`
                      mobile-item-enter flex items-center gap-5 p-4 rounded-xl
                      transition-all duration-300 border border-transparent
                      ${isActive
                        ? "bg-white/10 border-l-4 border-l-[#D4AF37] text-[#D4AF37]"
                        : "text-white hover:bg-white/5"
                      }
                    `}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className={`text-2xl ${isActive ? "text-[#D4AF37]" : "text-white/60"}`}>
                      {link.icon}
                    </span>
                    <span className="font-heading font-bold text-xl tracking-wide">
                      {link.label}
                    </span>
                    
                    {isActive && (
                      <div className="ml-auto w-2.5 h-2.5 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]"></div>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-white/10 space-y-6">
              <div className="text-center space-y-2">
                <p className="text-white/60 text-xs font-bold tracking-widest uppercase">Contact Us</p>
                <a href="tel:+923340813562" className="block text-white text-lg font-bold hover:text-[#D4AF37]">+92 334 0813562</a>
                <p className="text-white/40 text-[10px] pt-4">
                  © {new Date().getFullYear()} Ali Public School & College
                </p>
              </div>
            </div>

          </div>
        </div>

      </header>
    </>
  );
};

export default Header;