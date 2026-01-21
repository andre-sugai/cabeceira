
import React from 'react';

interface ServiceCardProps {
  image: string;
  icon: string;
  title: string;
  description: string;
  span?: string;
  showLink?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, icon, title, description, span = "", showLink = false }) => (
  <div className={`group bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col ${span}`}>
    <div className="h-64 overflow-hidden">
      <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={image} />
    </div>
    <div className="p-8 flex-grow">
      <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-primary dark:text-accent">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
      {showLink && (
        <div className="mt-6">
          <a className="text-primary dark:text-accent font-bold inline-flex items-center gap-2 hover:underline" href="#contato">
            Saiba mais <span className="material-icons-round text-sm">arrow_forward</span>
          </a>
        </div>
      )}
    </div>
  </div>
);

const Services: React.FC<{ id: string; images: Record<string, string> }> = ({ id, images }) => {
  return (
    <section id={id} className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-primary dark:text-white mb-6">Nossos Serviços</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Soluções completas para cada etapa da sua jornada na cafeicultura regenerativa.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            image={images.SERVICE_MUDAS} 
            icon="potted_plant" 
            title="Produção de Mudas" 
            description="Mudas enxertadas de café especial, com alto padrão genético e sanidade garantida. Usamos ensacamento biodegradável, que respeita o solo e facilita o pegamento no plantio."
          />
          <ServiceCard 
            image={images.SERVICE_BIOINSUMOS} 
            icon="biotech" 
            title="Bioinsumos" 
            description="Trabalhamos em parceria com o que há de mais novo e eficiente em bioinsumos, fertilizantes naturais e controle biológico."
          />
          <ServiceCard 
            image={images.SERVICE_CAFES} 
            icon="coffee_maker" 
            title="Classificação e Originação" 
            description="Atuamos na originação, conectando seu café aos melhores mercados nacionais e internacionais, com: rastreabilidade; transparência; foco em preço justo para o produtor."
          />
          <ServiceCard 
            image={images.SERVICE_AGROFLORESTA} 
            icon="park" 
            title="Diagnóstico da Terra" 
            description="Fazemos diagnóstico remoto e presencial da sua terra, olhando solo, planta e manejo como um todo."
          />
          <div className="md:col-span-2">
            <ServiceCard 
              image={images.SERVICE_ASSISTENCIA} 
              icon="support_agent" 
              title="Assistência Técnica Regenerativa" 
              description="Oferecemos acompanhamento técnico contínuo, com agrônomo especialista em agricultura regenerativa. Parceria para adaptar a lavoura às mudanças climáticas."
              showLink={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
