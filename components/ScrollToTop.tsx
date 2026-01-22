import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 2x viewport height
      if (window.scrollY > window.innerHeight * 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

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
        fixed bottom-8 right-8 z-50 
        p-4 rounded-full shadow-2xl 
        bg-primary text-white dark:bg-accent dark:text-primary 
        transition-all duration-300 transform 
        hover:scale-110 hover:shadow-primary/30 
        flex items-center justify-center
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
      `}
      aria-label="Voltar ao topo"
    >
      <span className="material-icons-round text-2xl">arrow_upward</span>
    </button>
  );
};

export default ScrollToTop;
