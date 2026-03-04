import React from 'react';

interface BemViverAboutProps {
  images: Record<string, string>;
}

const BemViverAbout: React.FC<BemViverAboutProps> = ({ images }) => {
  return (
    <section id="objetivo" className="relative py-24 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <img
              src={images.ABOUT}
              alt="Equipe Cabeceira"
              className="w-full aspect-[4/3] object-cover rounded-[3rem] shadow-xl"
            />

            {/* Floating card - hidden mobile */}
            <div className="hidden lg:flex absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-5 items-center gap-3 border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary dark:text-accent text-2xl">eco</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Compromisso</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Regenerativo</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Qual é o objetivo do projeto?
            </h2>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
              O ATER Bem Viver tem como objetivo fortalecer a agricultura familiar
              por meio de assistência técnica qualificada, promovendo práticas
              agroecológicas, a recuperação ambiental e a autonomia produtiva das
              famílias assentadas na região central do estado de São Paulo.
            </p>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
              Atuando em assentamentos e comunidades rurais, o projeto busca
              integrar saberes tradicionais com tecnologias sustentáveis,
              garantindo a segurança alimentar, a geração de renda e o
              fortalecimento das organizações locais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BemViverAbout;
