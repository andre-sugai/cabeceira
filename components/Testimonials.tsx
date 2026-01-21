
import React from 'react';

interface TestimonialProps {
  images: Record<string, string>;
}

const Testimonials: React.FC<TestimonialProps> = ({ images }) => {
  const testimonials = [
    {
      name: "João Pereira",
      role: "Cafeicultor em Minas Gerais",
      content: "O diagnóstico da Cabeceira mudou minha visão sobre o solo. Em um ano, reduzimos o uso de químicos em 20% e a planta está muito mais vigorosa.",
      img: images.TESTIMONIAL_1
    },
    {
      name: "Maria Silveira",
      role: "Produtora de Cafés Especiais",
      content: "A transição para o sistema agroflorestal parecia impossível até a consultoria deles. Hoje meu café tem uma nota muito maior no mercado.",
      img: images.TESTIMONIAL_2
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary dark:text-white mb-4">Quem já transformou sua terra</h2>
          <p className="text-slate-600 dark:text-slate-400">Histórias reais de produtores que escolheram o caminho da regeneração.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row gap-6 items-center">
              <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg" />
              <div>
                <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-4">"{t.content}"</p>
                <p className="font-bold text-primary dark:text-accent">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
