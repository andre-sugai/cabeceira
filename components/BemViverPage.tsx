import React from 'react';
import Navbar from './Navbar';
import BemViverHero from './bemviver/BemViverHero';
import BemViverAbout from './bemviver/BemViverAbout';
import BemViverServices from './bemviver/BemViverServices';
import BemViverTargetAudience from './bemviver/BemViverTargetAudience';
import BemViverFooter from './bemviver/BemViverFooter';
import ScrollToTop from './ScrollToTop';

interface BemViverPageProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  images: Record<string, string>;
  onNavigateHome: () => void;
  onNavigate: (page: string) => void;
}

const BemViverPage: React.FC<BemViverPageProps> = ({
  toggleDarkMode,
  isDarkMode,
  images,
  onNavigateHome,
  onNavigate,
}) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col">
      <Navbar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        images={images}
        onNavigateHome={onNavigateHome}
        onNavigate={onNavigate}
      />

      {/* Submenu */}
      <div className="sticky top-20 z-40 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 h-12 overflow-x-auto text-sm font-medium">
            <a className="whitespace-nowrap hover:text-primary dark:hover:text-accent transition-colors" href="#objetivo">Objetivo</a>
            <a className="whitespace-nowrap hover:text-primary dark:hover:text-accent transition-colors" href="#mudanca">O que muda?</a>
            <a className="whitespace-nowrap hover:text-primary dark:hover:text-accent transition-colors" href="#locais">Onde acontece?</a>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <BemViverHero images={images} />
        <BemViverAbout images={images} />
        <BemViverServices images={images} />
        <BemViverTargetAudience images={images} />
      </main>
      <BemViverFooter images={images} onNavigate={onNavigate} />
      <ScrollToTop />
    </div>
  );
};

export default BemViverPage;
