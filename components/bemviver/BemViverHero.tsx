import React from 'react';

interface BemViverHeroProps {
  images: Record<string, string>;
}

const BemViverHero: React.FC<BemViverHeroProps> = ({ images }) => {
  return (
    <section id="home" className="relative overflow-hidden py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
              ATER Bem Viver
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Autonomia e sustentabilidade no{' '}
              <span className="text-accent">campo.</span>
            </h1>

            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              O projeto ATER Bem Viver promove assistência técnica e extensão rural
              para famílias agricultoras, fortalecendo a produção sustentável,
              a agroecologia e a autonomia das comunidades rurais na região de Araraquara e entorno.
            </p>

            <a
              href="#objetivo"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              Conheça o Projeto
              <span className="material-icons-round">arrow_forward</span>
            </a>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <img
                src={images.HERO_BEMVIVER || images.HERO}
                alt="ATER Bem Viver"
                className="w-full aspect-square object-cover rounded-[3rem] border-4 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BemViverHero;
