import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 p-3 rounded-xl glass-card 
        border-horizon-sky/20 text-horizon-sky shadow-2xl
        hover:scale-110 active:scale-95 transition-all duration-150
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" strokeWidth={2.5} />
      <div className="absolute inset-0 rounded-xl bg-horizon-sky/5 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
    </button>
  );
};

export default ScrollToTop;