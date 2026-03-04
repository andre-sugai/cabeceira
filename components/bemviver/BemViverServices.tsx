import React from 'react';

interface BemViverServicesProps {
  images: Record<string, string>;
}

interface ServiceCardData {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const BemViverServices: React.FC<BemViverServicesProps> = ({ images }) => {
  const services: ServiceCardData[] = [
    {
      icon: 'support_agent',
      title: 'Assistência técnica especializada',
      description: 'Acompanhamento técnico individualizado para cada família, respeitando a realidade e os objetivos de cada propriedade.',
      image: images.SERVICE_MUDAS,
    },
    {
      icon: 'eco',
      title: 'Recuperação do solo e da água',
      description: 'Práticas de conservação e recuperação dos recursos naturais, incluindo manejo de nascentes e sistemas agroflorestais.',
      image: images.SERVICE_AGROFLORESTA,
    },
    {
      icon: 'payments',
      title: 'Acesso a crédito e mercados',
      description: 'Orientação para acessar políticas públicas de crédito rural e inserção em mercados institucionais e locais.',
      image: images.SERVICE_CAFES,
    },
    {
      icon: 'description',
      title: 'Regularização documental',
      description: 'Apoio na organização documental das famílias e das propriedades para acesso a benefícios e programas públicos.',
      image: images.SERVICE_BIOINSUMOS,
    },
    {
      icon: 'school',
      title: 'Capacitação e troca de saberes',
      description: 'Oficinas, dias de campo e intercâmbios entre produtores para compartilhamento de conhecimentos e experiências.',
      image: images.TARGET_AUDIENCE,
    },
    {
      icon: 'groups',
      title: 'Valorização de mulheres e jovens',
      description: 'Ações específicas para fortalecer a participação de mulheres e jovens na gestão produtiva e nas decisões da comunidade.',
      image: images.VISION,
    },
    {
      icon: 'storefront',
      title: 'Diversificação e geração de renda',
      description: 'Incentivo à diversificação produtiva com foco em segurança alimentar e geração de renda para as famílias.',
      image: images.HERO_BEMVIVER || images.HERO,
    },
  ];

  return (
    <section id="mudanca" className="py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            O que muda para você e sua família?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${
                index === 6 ? 'md:col-start-2 lg:col-start-2' : ''
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary dark:text-accent text-2xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BemViverServices;
