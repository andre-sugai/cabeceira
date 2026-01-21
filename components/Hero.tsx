
import React from 'react';

interface HeroProps {
  id: string;
  images: Record<string, string>;
}

const Hero: React.FC<HeroProps> = ({ id, images }) => {
  return (
    <section id={id} className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 dark:bg-accent/5 rounded-l-full blur-3xl transform translate-x-1/4"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary dark:text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary dark:bg-accent animate-pulse"></span>
              Diagnóstico Digital Cabeceira
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary dark:text-white leading-[1.1] mb-8">
              Entenda de verdade como está sua <span className="text-accent">terra</span> e seu <span className="text-accent">cafezal</span>.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed">
              A ciência de dados e o conhecimento regenerativo unidos para transformar sua produção. Descubra o equilíbrio exato para uma colheita mais rentável e sustentável.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Investimento único</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary dark:text-white">R$ 360</span>
                  <span className="text-slate-400 line-through">R$ 450</span>
                </div>
              </div>
              <a 
                className="w-full sm:w-auto text-center bg-primary dark:bg-accent text-white dark:text-primary text-lg font-bold px-8 py-5 rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-primary/20 dark:shadow-accent/10" 
                href="#contato"
              >
                Quero fazer o Diagnóstico
              </a>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 lg:col-span-5 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img alt="Beautiful Coffee Plantation" className="w-full aspect-[4/5] object-cover" src={images.HERO} />
              <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-icons-round text-accent text-3xl">verified</span>
                  <div>
                    <p className="font-bold text-white">Certificado de Regeneração</p>
                    <p className="text-sm text-slate-200">Em conformidade com padrões globais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
