
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
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import { DEFAULT_IMAGES } from './constants';

type Page = 'home' | 'privacidade';

const pathToPage = (pathname: string): Page => {
  if (pathname === '/privacidade') return 'privacidade';
  return 'home';
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [images] = useState<Record<string, string>>(DEFAULT_IMAGES);
  const [currentPage, setCurrentPage] = useState<Page>(() => pathToPage(window.location.pathname));

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Sync URL → state when user navigates with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(pathToPage(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const navigateTo = (page: Page | string) => {
    const newPath = page === 'privacidade' ? '/privacidade' : '/';
    window.history.pushState({}, '', newPath);
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => navigateTo('home');

  if (currentPage === 'privacidade') {
    return (
      <PrivacyPolicyPage
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        images={images}
        onNavigateHome={navigateHome}
      />
    );
  }

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
      <Footer images={images} onNavigate={navigateTo} />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default App;
