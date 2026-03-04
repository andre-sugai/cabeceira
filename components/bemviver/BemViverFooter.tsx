import React, { useState } from 'react';
import Modal from '../Modal';

interface BemViverFooterProps {
  images: Record<string, string>;
  onNavigate: (page: string) => void;
}

type ModalType = 'termos' | 'faq' | null;

const BemViverFooter: React.FC<BemViverFooterProps> = ({ images, onNavigate }) => {
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

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">4. PROPRIEDADE INTELECTUAL</h4>
              <p>Todo o conteúdo deste site (textos, marcas, nomes, logotipos, imagens, materiais educativos) é de propriedade da Cabeceira, salvo quando indicado o contrário.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">5. DADOS PESSOAIS E PRIVACIDADE</h4>
              <p>Os dados informados pelos usuários são utilizados apenas para contato, prestação de serviços e melhoria da experiência do usuário. A Cabeceira se compromete a tratar os dados de forma responsável, seguindo a LGPD.</p>

              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">6. ACEITE</h4>
              <p>Ao continuar navegando neste site, o usuário declara que leu, entendeu e concorda com este Termo de Uso.</p>
            </div>
          ),
        };

      case 'faq':
        return {
          title: 'Perguntas Frequentes (FAQ)',
          content: (
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">O que é o ATER Bem Viver?</h4>
                <p>É um projeto de Assistência Técnica e Extensão Rural voltado para famílias agricultoras em assentamentos e comunidades rurais da região de Araraquara e entorno.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">Quem pode participar?</h4>
                <p>Famílias assentadas e agricultores familiares dos municípios listados na seção "Onde acontece?" podem participar do programa.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">Quanto custa participar?</h4>
                <p>O projeto é financiado por recursos públicos e a participação das famílias é gratuita.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">Como funciona a assistência técnica?</h4>
                <p>Técnicos visitam as propriedades regularmente para orientação individualizada, além de oficinas coletivas e dias de campo.</p>
              </div>
            </div>
          ),
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

export default BemViverFooter;
