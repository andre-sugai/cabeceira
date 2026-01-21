import React, { useState } from 'react';
import Modal from './Modal';

interface FooterProps {
  images: Record<string, string>;
}

type ModalType = 'termos' | 'privacidade' | 'faq' | null;

const Footer: React.FC<FooterProps> = ({ images }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const getModalContent = (type: ModalType) => {
    switch (type) {
      case 'termos':
        return {
          title: 'Termos de Uso',
          content: (
            <div className="space-y-4">
              <p>Bem-vindo ao Cabeceira Digital. Ao acessar nosso site, você concorda com estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100">1. Licença de Uso</h4>
              <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Cabeceira Digital, apenas para visualização transitória pessoal e não comercial.</p>
              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100">2. Isenção de responsabilidade</h4>
              <p>Os materiais no site da Cabeceira Digital são fornecidos "como estão". Cabeceira Digital não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
            </div>
          )
        };
      case 'privacidade':
        return {
          title: 'Política de Privacidade',
          content: (
            <div className="space-y-4">
              <p>A sua privacidade é importante para nós. É política do Cabeceira Digital respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site Cabeceira Digital, e outros sites que possuímos e operamos.</p>
              <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
              <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
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
            <div className="flex gap-8 text-slate-400 font-medium">
              <button 
                onClick={() => setActiveModal('termos')}
                className="hover:text-primary dark:hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
              >
                Termos de Uso
              </button>
              <button 
                onClick={() => setActiveModal('privacidade')}
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
