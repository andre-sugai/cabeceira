
import React from 'react';

interface TargetAudienceProps {
  images: Record<string, string>;
}

const TargetAudience: React.FC<TargetAudienceProps> = ({ images }) => {
  const targets = [
    <span key="t1"><strong>Quem é inexperiente:</strong> Quer começar a produzir café e não sabe por onde começar.</span>,
    <span key="t2"><strong>Quem quer fazer a transição:</strong> Deseja fazer a transição de monocultura no plantio para sistemas agroflorestais.</span>,
    <span key="t3"><strong>Quer saber a saúde do solo:</strong> Agricultores que não sabem como está a saúde do seu solo.</span>,
    <span key="t4"><strong>Quer reduzir veneno no plantio:</strong> Quer melhorar a qualidade do café e reduzir o veneno no plantio.</span>,
  ];

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent/10 dark:bg-slate-800/50 rounded-[3rem] p-10 lg:p-20 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary dark:text-white mb-10">Para quem é o Diagnóstico?</h2>
            <ul className="space-y-6">
              {targets.map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="material-icons-round text-primary dark:text-accent mt-1">check_circle</span>
                  <span className="text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full max-w-md">
            <img alt="Farmer touching soil" className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 w-full object-cover aspect-square" src={images.TARGET_AUDIENCE} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
