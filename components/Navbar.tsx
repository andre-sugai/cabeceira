
import React from 'react';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  images: Record<string, string>;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode, images }) => {
  return (
    <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img alt="Cabeceira Logo" className="h-10 w-auto rounded-lg" src={images.LOGO} />
            <span className="text-xl font-extrabold tracking-tight text-primary dark:text-accent">Cabeceira</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="hover:text-primary dark:hover:text-accent font-medium transition-colors" href="#beneficios">Benefícios</a>
            <a className="hover:text-primary dark:hover:text-accent font-medium transition-colors" href="#incluido">O que inclui</a>
            <a className="hover:text-primary dark:hover:text-accent font-medium transition-colors" href="#nossos-servicos">Serviços</a>
            <a className="hover:text-primary dark:hover:text-accent font-medium transition-colors" href="#quem-somos">Sobre Nós</a>
            
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
            
            <a 
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20" 
              href="#contato"
            >
              Fazer Diagnóstico
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
