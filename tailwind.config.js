/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ✅ COLORS UPDATED (Golden Background Removed)
      colors: {
        // Main theme colors
        primary: '#29234B',        // Deep Purple-Blue (Unique Identity)
        secondary: '#D4AF37',      // Golden Yellow (Sirf Buttons/Text ke liye)
        accent: '#10B981',         // Emerald Green
        
        // ✨ BACKGROUNDS CHANGED TO WHITE ✨
        light: '#FAFAFA',          // Snow White (Thora sa off-white, aankhon ke liye acha)
        cream: '#FFFFFF',          // PURE WHITE (Jo pehle cream tha, ab White hai)
        
        // Additional custom colors
        'deep-navy': '#29234B',    
        'gold': '#D4AF37',        
        'emerald': '#10B981',      
        
        // Opacity variants
        'navy-90': 'rgba(41, 35, 75, 0.9)',
        'navy-80': 'rgba(41, 35, 75, 0.8)',
        'navy-70': 'rgba(41, 35, 75, 0.7)',
        'gold-30': 'rgba(212, 175, 55, 0.3)',
        'gold-20': 'rgba(212, 175, 55, 0.2)',
        'gold-10': 'rgba(212, 175, 55, 0.1)',
        'gold-5': 'rgba(212, 175, 55, 0.05)',
        'emerald-20': 'rgba(16, 185, 129, 0.2)',
        'emerald-10': 'rgba(16, 185, 129, 0.1)',
      },
      
      // ✅ FONT FAMILY
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        subheading: ['Montserrat', 'sans-serif'],
        body: ['Merriweather', 'serif'],
      },
      
      // ✅ BACKGROUND IMAGES
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37)',
        'text-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)',
      },
      
      // ✅ ANIMATIONS
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'text-shimmer': 'textShimmer 3s linear infinite',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #D4AF37, 0 0 10px #D4AF37' },
          '50%': { boxShadow: '0 0 20px #D4AF37, 0 0 30px #D4AF37' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'transparent', boxShadow: '0 0 5px #D4AF37' },
          '50%': { borderColor: '#D4AF37', boxShadow: '0 0 20px #D4AF37' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-100% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
}