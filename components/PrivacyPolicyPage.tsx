import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PrivacyPolicyPageProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  images: Record<string, string>;
  onNavigateHome: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  toggleDarkMode,
  isDarkMode,
  images,
  onNavigateHome,
}) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col">
      <Navbar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        images={images}
        onNavigateHome={onNavigateHome}
      />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Back button */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-accent transition-colors mb-10 group"
        >
          <span className="material-icons-round text-xl group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          <span className="font-medium">Voltar ao início</span>
        </button>

        <h1 className="text-4xl font-extrabold text-primary dark:text-accent mb-2">
          Política de Privacidade
        </h1>
        <p className="text-slate-400 dark:text-slate-500 text-sm mb-10">
          Última atualização: fevereiro de 2026
        </p>

        <div className="space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
          <section>
            <p>
              A sua privacidade é importante para nós. É política da Cabeceira Digital respeitar a
              sua privacidade em relação a qualquer informação que possamos coletar no site
              Cabeceira Digital, e outros sites que possuímos e operamos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              1. Coleta de Informações
            </h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe
              fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e
              consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              2. Armazenamento e Segurança
            </h2>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
              solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente
              aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou
              modificação não autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              3. Compartilhamento de Dados
            </h2>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
              exceto quando exigido por lei ou quando você nos der permissão explícita para fazê-lo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              4. Links para Sites Externos
            </h2>
            <p>
              Nosso site pode ter links para sites externos que não são operados por nós. Esteja
              ciente de que não temos controle sobre o conteúdo e as práticas desses sites e não
              podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              5. Lei Geral de Proteção de Dados (LGPD)
            </h2>
            <p>
              A Cabeceira Digital está comprometida com o cumprimento da Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018). Você tem o direito de acessar, corrigir, excluir ou
              solicitar a portabilidade dos seus dados pessoais a qualquer momento. Para exercer
              esses direitos, entre em contato conosco pelos canais disponíveis no site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              6. Cookies
            </h2>
            <p>
              Podemos utilizar cookies para melhorar a experiência do usuário no site. Você pode
              desabilitar os cookies nas configurações do seu navegador, mas isso pode afetar a
              funcionalidade de algumas partes do site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              7. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você
              revise esta página regularmente para verificar quaisquer alterações. As alterações
              entram em vigor imediatamente após serem publicadas nesta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              8. Contato
            </h2>
            <p>
              Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus
              dados pessoais, entre em contato conosco pelos canais disponíveis no site.
            </p>
          </section>
        </div>
      </main>

      <Footer images={images} onNavigate={() => {}} />
    </div>
  );
};

export default PrivacyPolicyPage;
