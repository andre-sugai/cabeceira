
import React from 'react';

interface FooterProps {
  images: Record<string, string>;
}

const Footer: React.FC<FooterProps> = ({ images }) => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-200 dark:border-slate-800 pt-12">
          <div className="flex items-center gap-4">
            <img alt="Cabeceira Logo Small" className="h-8 w-auto grayscale dark:invert opacity-50" src={images.LOGO} />
            <span className="text-slate-400 font-medium">© 2024 Cabeceira Digital. Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-8 text-slate-400 font-medium">
            <a className="hover:text-primary dark:hover:text-accent transition-colors" href="#">Termos de Uso</a>
            <a className="hover:text-primary dark:hover:text-accent transition-colors" href="#">Privacidade</a>
            <a className="hover:text-primary dark:hover:text-accent transition-colors" href="#">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
