
import React from 'react';

interface AboutProps {
  id: string;
  images: Record<string, string>;
}

const About: React.FC<AboutProps> = ({ id, images }) => {
  return (
    <section id={id} className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            <img alt="Equipe Cabeceira e Visão" className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-video" src={images.ABOUT} />
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl z-20 max-w-xs border border-slate-100 dark:border-slate-700 hidden md:block">
              <p className="text-primary dark:text-accent font-bold text-lg mb-2">Compromisso Regenerativo</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Transformando a cafeicultura através da ciência e do respeito à terra.</p>
            </div>
          </div>
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Quem é a Cabeceira?</span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-primary dark:text-white mt-4 mb-8">Nossa essência é a terra viva.</h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                A Cabeceira nasceu da necessidade de unir o conhecimento ancestral da terra com a precisão da tecnologia moderna. Somos um ecossistema dedicado a regenerar a cafeicultura brasileira através de cinco frentes fundamentais.
              </p>
              <p>
                Atuamos desde a <strong>Produção de Mudas</strong> de alta performance genética e a conexão com os melhores <strong>Bioinsumos</strong>, até a <strong>Originação de Cafés Especiais</strong> com rastreabilidade total. Nossa expertise em <strong>Sistemas Agroflorestais</strong> permite que o produtor diversifique sua renda enquanto restaura o solo.
              </p>
              <p>
                Não entregamos apenas serviços; construímos parcerias de longo prazo para garantir que cada hectare seja um legado de abundância para as próximas gerações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
