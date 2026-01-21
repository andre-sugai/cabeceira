
import React from 'react';

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => (
  <div className="bg-background-light dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
    <div className="w-16 h-16 bg-primary/10 dark:bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
      <span className="material-icons-round text-primary dark:text-accent text-3xl">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

const Benefits: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-primary dark:text-white mb-6">Pra que serve esse diagnóstico?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Mais do que números, entregamos clareza estratégica para sua propriedade prosperar no longo prazo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitItem 
            icon="eco" 
            title="Saúde do Solo" 
            description="Analise a vida biológica, foliar e a estrutura física da sua terra, não apenas a química básica." 
          />
          <BenefitItem 
            icon="balance" 
            title="Identificar Desequilíbrios" 
            description="Saiba exatamente o que está faltando ou em excesso, economizando em insumos desnecessários." 
          />
          <BenefitItem 
            icon="forest" 
            title="Transição Agroflorestal" 
            description="Receba orientações práticas para migrar para sistemas regenerativos e diversificados." 
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
