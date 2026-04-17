import React from 'react';

const PrivacyAnimations = () => {
  return (
    <style>{`
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slide-in-left {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slide-in-right {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes scale-in {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      @keyframes pulse-gentle {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.8;
        }
      }
      
      @keyframes pulse-subtle {
        0%, 100% {
          opacity: 0.7;
        }
        50% {
          opacity: 1;
        }
      }
      
      @keyframes pulse-soft {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.3);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
        }
      }
      
      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      @keyframes bounce-slow {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      
      @keyframes bounce-subtle {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-3px);
        }
      }
      
      @keyframes text-focus {
        from {
          letter-spacing: -0.5px;
          opacity: 0.7;
        }
        to {
          letter-spacing: normal;
          opacity: 1;
        }
      }
      
      @keyframes text-slide {
        from {
          transform: translateX(-10px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(212, 175, 55, 0.1);
        }
        50% {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
        }
      }
      
      @keyframes card-float {
        0%, 100% {
          transform: translateY(0) rotate(0);
        }
        50% {
          transform: translateY(-5px) rotate(0.5deg);
        }
      }
      
      @keyframes rotate-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      @keyframes row-enter {
        from {
          opacity: 0;
          transform: translateX(20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes section-enter {
        from {
          opacity: 0;
          transform: translateY(30px) scale(0.98);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .animate-slide-in-left {
        animation: slide-in-left 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .animate-slide-in-right {
        animation: slide-in-right 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .animate-scale-in {
        animation: scale-in 0.5s ease-out forwards;
        opacity: 0;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-pulse-gentle {
        animation: pulse-gentle 2s ease-in-out infinite;
      }
      
      .animate-pulse-subtle {
        animation: pulse-subtle 3s ease-in-out infinite;
      }
      
      .animate-pulse-soft {
        animation: pulse-soft 2s infinite;
      }
      
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
      
      .animate-bounce-slow {
        animation: bounce-slow 2s ease-in-out infinite;
      }
      
      .animate-bounce-subtle {
        animation: bounce-subtle 2s ease-in-out infinite;
      }
      
      .animate-text-focus {
        animation: text-focus 0.8s ease-out forwards;
      }
      
      .animate-text-slide {
        animation: text-slide 0.8s ease-out forwards;
        opacity: 0;
      }
      
      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }
      
      .animate-card-float {
        animation: card-float 3s ease-in-out infinite;
      }
      
      .animate-rotate-slow {
        animation: rotate-slow 30s linear infinite;
      }
      
      .animate-row-enter {
        animation: row-enter 0.5s ease-out forwards;
        opacity: 0;
      }
      
      .animate-section-enter {
        animation: section-enter 0.7s ease-out forwards;
      }
      
      .prose h3 {
        color: #29234B;
        font-weight: 600;
        margin-top: 1.5em;
        margin-bottom: 0.5em;
      }
      
      .prose p {
        margin-bottom: 1em;
        line-height: 1.6;
      }
    `}</style>
  );
};

export default PrivacyAnimations;