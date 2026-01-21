
import React from 'react';

interface VisionProps {
  images: Record<string, string>;
}

const Vision: React.FC<VisionProps> = ({ images }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img alt="Nature inspired agriculture" className="rounded-[4rem] shadow-2xl w-full h-auto" src={images.VISION} />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-primary dark:text-white mb-8">Nossa visão de agricultura</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 italic mb-8 border-l-4 border-accent pl-8 py-2 leading-relaxed">
              "Produzir alimento de qualidade não precisa custar a saúde do planeta. A tecnologia deve ser a ferramenta que nos reconecta aos ciclos da natureza."
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Na Cabeceira, acreditamos que o futuro da cafeicultura é regenerativo. Nosso diagnóstico é o primeiro passo para transformar sua propriedade em um ecossistema produtivo, resiliente e lucrativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
