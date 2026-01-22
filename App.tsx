
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { DEFAULT_IMAGES } from './constants';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [images, setImages] = useState<Record<string, string>>(DEFAULT_IMAGES);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} images={images} />
      <main>
        <Hero id="home" images={images} />
        <Benefits id="beneficios" />
        <Features id="incluido" />
        <About id="quem-somos" images={images} />
        <Services id="nossos-servicos" images={images} />
        <TargetAudience images={images} />
        <Vision images={images} />
        <Testimonials images={images} />
        <CTA id="contato" images={images} />
      </main>
      <Footer images={images} />
      <ScrollToTop />
    </div>
  );
};

export default App;
