import React, { useState } from 'react';
import Modal from './Modal';

interface FooterProps {
  images: Record<string, string>;
  onNavigate: (page: string) => void;
}

type ModalType = 'termos' | 'faq' | null;

const Footer: React.FC<FooterProps> = ({ images, onNavigate }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const getModalContent = (type: ModalType) => {
    switch (type) {
      case 'termos':
        return {
          title: 'Termos de Uso',
          content: (
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p>Bem-vindo(a) ao site da Cabeceira.</p>
              <p>Ao acessar ou utilizar este site, você concorda com os termos e condições descritos abaixo. Caso não concorde, recomendamos que não utilize o site.</p>
              <p>Este Termo de Uso tem como objetivo explicar, de forma simples, como funciona o uso do site, as responsabilidades de cada parte e os limites das informações apresentadas.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">1. SOBRE A CABECEIRA</h4>
              <p>A Cabeceira é uma iniciativa voltada ao apoio técnico, diagnóstico e orientação para produtores rurais, especialmente cafeicultores, com foco em:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>saúde do solo,</li>
                <li>manejo agroecológico e agroflorestal,</li>
                <li>uso consciente de tecnologias no campo,</li>
                <li>apoio à tomada de decisão do produtor.</li>
              </ul>
              <p>As informações disponibilizadas no site têm caráter informativo, educativo e orientativo.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">2. USO DO SITE</h4>
              <p>Ao utilizar este site, o usuário se compromete a:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Utilizar as informações de forma responsável;</li>
                <li>Não usar o site para fins ilegais, ofensivos ou que causem prejuízo a terceiros;</li>
                <li>Não tentar invadir, danificar ou comprometer o funcionamento do site.</li>
              </ul>
              <p>O uso do site é gratuito, salvo quando indicado de forma clara algum serviço pago.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">3. LIMITES DAS INFORMAÇÕES</h4>
              <p>As informações, conteúdos, diagnósticos, materiais educativos e orientações apresentados no site não substituem:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>a visita técnica presencial,</li>
                <li>a análise específica da propriedade,</li>
                <li>a recomendação agronômica formal assinada por profissional habilitado.</li>
              </ul>
              <p>Cada propriedade rural é única. Por isso, qualquer decisão tomada com base nas informações do site é de responsabilidade do usuário.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">4. SERVIÇOS, DIAGNÓSTICOS E CONTRATAÇÕES</h4>
              <p>Quando houver contratação de serviços (como diagnósticos, análises, consultorias ou acompanhamentos):</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>As condições específicas serão informadas de forma clara antes da contratação;</li>
                <li>Valores, prazos, escopo e responsabilidades serão apresentados ao usuário;</li>
                <li>A contratação poderá envolver termos adicionais.</li>
              </ul>
              <p>A Cabeceira se compromete a agir com boa-fé, transparência e responsabilidade técnica.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">5. PROPRIEDADE INTELECTUAL</h4>
              <p>Todo o conteúdo deste site (textos, marcas, nomes, logotipos, imagens, materiais educativos) é de propriedade da Cabeceira, salvo quando indicado o contrário.</p>
              <p>Não é permitido copiar, reproduzir ou distribuir os conteúdos sem autorização prévia, exceto para uso pessoal e não comercial, com citação da fonte.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">6. DADOS PESSOAIS E PRIVACIDADE</h4>
              <p>Os dados informados pelos usuários (como nome, e-mail, telefone ou informações da propriedade) são utilizados apenas para contato, prestação de serviços e melhoria da experiência do usuário.</p>
              <p>A Cabeceira se compromete a tratar os dados de forma responsável, seguindo a Lei Geral de Proteção de Dados (LGPD). Para mais detalhes, consulte a Política de Privacidade do site.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">7. LINKS PARA SITES DE TERCEIROS</h4>
              <p>O site pode conter links para sites de terceiros. A Cabeceira não se responsabiliza por conteúdos, políticas ou práticas desses sites externos.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">8. ALTERAÇÕES DO TERMO DE USO</h4>
              <p>Este Termo de Uso pode ser atualizado a qualquer momento, visando melhorias, adequações legais ou operacionais. Recomendamos que o usuário consulte este documento periodicamente.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">9. CONTATO</h4>
              <p>Em caso de dúvidas, sugestões ou solicitações, entre em contato pelos canais informados no site.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">10. ACEITE</h4>
              <p>Ao continuar navegando neste site, o usuário declara que leu, entendeu e concorda com este Termo de Uso.</p>
            </div>
          )
        };

      case 'faq':
        return {
          title: 'Perguntas Frequentes (FAQ)',
          content: (
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">Como funciona o diagnóstico?</h4>
                <p>Nosso diagnóstico utiliza tecnologia avançada de análise de dados e imagens de satélite para avaliar a saúde da sua propriedade, identificando áreas de melhoria e potencial produtivo.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">Quais regiões vocês atendem?</h4>
                <p>Atualmente atendemos produtores em todo o território nacional, com foco especial nas regiões cafeeiras de Minas Gerais e Espírito Santo.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">Quanto tempo demora o processo?</h4>
                <p>O diagnóstico inicial é entregue em até 48 horas após a confirmação dos dados da propriedade.</p>
              </div>
            </div>
          )
        };
      default:
        return { title: '', content: null };
    }
  };

  const modalData = getModalContent(activeModal);

  return (
    <>
      <footer className="bg-slate-50 dark:bg-slate-900 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-200 dark:border-slate-800 pt-12">
            <div className="flex items-center gap-4">
              <img alt="Cabeceira Logo Small" className="h-8 w-auto grayscale dark:invert opacity-50" src={images.LOGO} />
              <span className="text-slate-400 font-medium">© 2026 Cabeceira Digital. Todos os direitos reservados.</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-4 text-slate-400">
                <a 
                  href="https://www.instagram.com/cabeceiraater" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary dark:hover:text-accent transition-colors block"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@cabeceira.ater" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary dark:hover:text-accent transition-colors block"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
                  </svg>
                </a>
              </div>
              <div className="hidden sm:block h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
              <div className="flex gap-8 text-slate-400 font-medium">
                <button 
                  onClick={() => setActiveModal('termos')}
                  className="hover:text-primary dark:hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                >
                  Termos de Uso
                </button>
                <button 
                  onClick={() => onNavigate('privacidade')}
                  className="hover:text-primary dark:hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                >
                  Privacidade
                </button>
                <button 
                  onClick={() => setActiveModal('faq')}
                  className="hover:text-primary dark:hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                >
                  FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Modal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)}
        title={modalData.title}
      >
        {modalData.content}
      </Modal>
    </>
  );
};

export default Footer;
