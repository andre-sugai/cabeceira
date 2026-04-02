
import React from 'react';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  images: Record<string, string>;
  onNavigateHome?: () => void;
  onNavigate?: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode, images, onNavigateHome, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const scrollToSection = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    if (window.location.pathname !== '/') {
      onNavigate?.('home');
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className={`flex items-center gap-3 ${onNavigateHome ? 'cursor-pointer' : ''}`}
            onClick={onNavigateHome}
          >
            <img alt="Cabeceira Logo" className="h-10 w-auto rounded-lg" src={images.LOGO} />
            <span className="text-xl font-extrabold tracking-tight text-primary dark:text-accent">Cabeceira</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a className="hover:text-primary dark:hover:text-accent font-medium transition-colors cursor-pointer" onClick={() => onNavigate?.('home')}>Home</a>
            <a 
              className="hover:text-primary dark:hover:text-accent font-medium transition-colors cursor-pointer" 
              href="#quem-somos"
              onClick={(e) => handleAnchorClick(e, 'quem-somos')}
            >
              Quem somos
            </a>
            
            {/* O que fazemos Dropdown */}
            <div className="relative group">
              <button className="hover:text-primary dark:hover:text-accent font-medium transition-colors cursor-pointer flex items-center gap-1">
                O que fazemos
                <span className="material-icons-round text-[20px]">expand_more</span>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-2">
                <a 
                  href="#nossos-servicos" 
                  onClick={(e) => handleAnchorClick(e, 'nossos-servicos')}
                  className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  Nossos Serviços
                </a>
                <a 
                  href="#nossa-visao" 
                  onClick={(e) => handleAnchorClick(e, 'nossa-visao')}
                  className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  Nossa Visão Agricultura
                </a>
                <a 
                  href="#contato" 
                  onClick={(e) => handleAnchorClick(e, 'contato')}
                  className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  Diagnóstico Digital
                </a>
              </div>
            </div>

            {/* Projetos Dropdown */}
            <div className="relative group">
              <button className="hover:text-primary dark:hover:text-accent font-medium transition-colors cursor-pointer flex items-center gap-1">
                Projetos
                <span className="material-icons-round text-[20px]">expand_more</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-2">
                <a 
                  onClick={() => onNavigate?.('bemviver')}
                  className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                >
                  Ater Bem Viver
                </a>
              </div>
            </div>

            <a 
              href="#depoimentos"
              onClick={(e) => handleAnchorClick(e, 'depoimentos')}
              className="hover:text-primary dark:hover:text-accent font-medium transition-colors cursor-pointer"
            >
              Depoimentos
            </a>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <span className="material-icons-round text-accent">light_mode</span>
              ) : (
                <span className="material-icons-round">dark_mode</span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <span className="material-icons-round text-accent">light_mode</span>
              ) : (
                <span className="material-icons-round">dark_mode</span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-icons-round">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="flex flex-col p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-5rem)]">
            <a onClick={() => { setIsMenuOpen(false); onNavigate?.('home'); }} className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer">Home</a>
            <a 
              href="#quem-somos"
              onClick={(e) => { setIsMenuOpen(false); handleAnchorClick(e, 'quem-somos'); }} 
              className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer"
            >
              Quem somos
            </a>
            
            <div className="flex flex-col space-y-2">
              <span className="px-4 py-2 text-slate-500 font-semibold uppercase tracking-wider text-sm mt-2">O que fazemos</span>
              <a 
                href="#nossos-servicos" 
                onClick={(e) => { setIsMenuOpen(false); handleAnchorClick(e, 'nossos-servicos'); }}
                className="pl-8 pr-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer"
              >
                Nossos Serviços
              </a>
              <a 
                href="#nossa-visao" 
                onClick={(e) => { setIsMenuOpen(false); handleAnchorClick(e, 'nossa-visao'); }}
                className="pl-8 pr-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer"
              >
                Nossa Visão Agricultura
              </a>
              <a 
                href="#contato" 
                onClick={(e) => { setIsMenuOpen(false); handleAnchorClick(e, 'contato'); }}
                className="pl-8 pr-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer"
              >
                Diagnóstico Digital
              </a>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="px-4 py-2 text-slate-500 font-semibold uppercase tracking-wider text-sm mt-2">Projetos</span>
              <a 
                onClick={() => { setIsMenuOpen(false); onNavigate?.('bemviver'); }}
                className="pl-8 pr-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer"
              >
                Ater Bem Viver
              </a>
            </div>

            <a 
              href="#depoimentos"
              onClick={(e) => { setIsMenuOpen(false); handleAnchorClick(e, 'depoimentos'); }} 
              className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer"
            >
              Depoimentos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
