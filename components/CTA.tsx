
import React from 'react';
import { CONTACT_WHATSAPP } from '../constants';

interface CTAProps {
  id: string;
  images: Record<string, string>;
}

const CTA: React.FC<CTAProps> = ({ id, images }) => {
  return (
    <section id={id} className="py-24 bg-slate-50 dark:bg-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-10 lg:p-20 text-center text-white relative overflow-hidden mb-20 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <img alt="Logo Pattern" className="w-full h-full object-cover scale-150 rotate-12" src={images.PATTERN} />
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 relative z-10">Pronto para transformar sua terra?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto relative z-10">
            Invista R$ 360 no futuro da sua produção e colha os benefícios de uma cafeicultura de precisão e regenerativa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a 
              href="https://buy.stripe.com/test_5kQbJ296q9WJcF78hS6oo00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent text-primary px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl inline-block"
            >
              Começar Agora
            </a>
            <a 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-5 rounded-2xl font-bold transition-colors" 
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-icons-round">chat</span>
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
