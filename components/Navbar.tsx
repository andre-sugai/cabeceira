
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
            <a className="hover:text-primary dark:hover:text-accent font-medium transition-colors cursor-pointer" onClick={() => onNavigate?.('home')}>Quem somos</a>
            <a className="hover:text-primary dark:hover:text-accent font-medium transition-colors cursor-pointer" onClick={() => onNavigate?.('bemviver')}>Ater bem viver</a>
            <a className="hover:text-primary dark:hover:text-accent font-medium transition-colors cursor-pointer" href="#contato">Diagnóstico Digital</a>
            
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
          <div className="flex flex-col p-4 space-y-4">
            <a onClick={() => { setIsMenuOpen(false); onNavigate?.('home'); }} className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer">Home</a>
            <a onClick={() => { setIsMenuOpen(false); onNavigate?.('home'); }} className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer">Quem somos</a>
            <a onClick={() => { setIsMenuOpen(false); onNavigate?.('bemviver'); }} className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer">Ater bem viver</a>
            <a 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors cursor-pointer" 
              href="#contato"
            >
              Diagnóstico Digital
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
