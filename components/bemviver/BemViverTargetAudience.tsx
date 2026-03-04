import React from 'react';

interface BemViverTargetAudienceProps {
  images: Record<string, string>;
}

interface Municipality {
  name: string;
  detail: string;
}

const BemViverTargetAudience: React.FC<BemViverTargetAudienceProps> = ({ images }) => {
  const municipalities: Municipality[] = [
    { name: 'Araraquara', detail: 'Assentamentos Monte Alegre e Bela Vista do Chibarro' },
    { name: 'Ribeirão Preto', detail: 'PDS da Barra' },
    { name: 'Serra Azul', detail: 'Assentamento Sepé Tiaraju' },
    { name: 'Orlândia', detail: 'Comunidade Aparecida Segura' },
    { name: 'São Carlos', detail: 'Capão das Antas, Nova São Carlos e Santa Helena' },
    { name: 'Pradópolis e Jaboticabal', detail: 'Córrego Rico' },
    { name: 'Descalvado', detail: 'Aurora, 21 de Dezembro e 2 de Janeiro' },
  ];

  return (
    <section id="locais" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent/10 dark:bg-accent/5 rounded-[3rem] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Onde o projeto acontece?
              </h2>

              <div className="space-y-4">
                {municipalities.map((muni, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white/60 dark:bg-slate-900/60 rounded-2xl p-4 backdrop-blur-sm"
                  >
                    <span className="material-icons-round text-primary dark:text-accent mt-0.5 flex-shrink-0">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{muni.name}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{muni.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Column */}
            <div className="relative hidden lg:block">
              <img
                src={images.SERVICE_MUDAS}
                alt="Locais de atuação"
                className="w-full aspect-[4/3] object-cover rounded-[3rem] shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BemViverTargetAudience;
