
import React from 'react';

const Features: React.FC<{ id: string }> = ({ id }) => {
  const steps = [
    { num: '01', title: 'Análise Laboratorial', desc: 'Análise química e física do solo, e análise foliar em laboratórios parceiros especializados em agroecologia.' },
    { num: '02', title: 'Guia de Coleta', desc: 'Manual didático passo a passo para garantir a coleta de forma correta para o envio ao laboratório.' },
    { num: '03', title: 'Relatório Didático', desc: 'Visualizações claras do resultado e tradução técnica para termos do dia a dia do produtor.' },
    { num: '04', title: 'Reunião com Agrônomo', desc: 'Sessão individual de 45 min para tirar dúvidas e traçar o plano de ação personalizado.' },
  ];

  return (
    <section id={id} className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-16 text-center">O que está incluído</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white/10 backdrop-blur p-8 rounded-3xl border border-white/10 hover:bg-white/15 transition-all">
              <span className="text-accent text-4xl font-black mb-6 block">{step.num}</span>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
