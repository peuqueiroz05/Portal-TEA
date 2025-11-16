import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const updated = "15/11/2025";

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Política de Privacidade</h1>
          <p className="mt-2 text-sm text-slate-500">Portal TEA • Última atualização: {updated}</p>
        </header>

        <section className="bg-white shadow-md rounded-2xl p-8 md:p-10">
          <p className="text-slate-700 leading-relaxed">O Portal TEA respeita sua privacidade e está comprometido com a
            proteção dos seus dados pessoais. Esta Política descreve quais informações coletamos, como são
            utilizadas e quais direitos você possui de acordo com a LGPD. Ao utilizar nosso site, você concorda
            com os termos descritos abaixo.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <article className="p-4 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-slate-900">1. Informações que coletamos</h3>
              <ul className="mt-3 list-disc list-inside text-slate-700">
                <li><strong>Fornecidas por você:</strong> nome, e‑mail, mensagens enviadas em formulários e publicações.</li>
                <li><strong>Coletadas automaticamente:</strong> endereço IP, tipo de navegador, sistema operacional, páginas acessadas, tempo de sessão e cookies.</li>
              </ul>
            </article>

            <article className="p-4 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-slate-900">2. Finalidades do processamento</h3>
              <p className="mt-3 text-slate-700">Usamos os dados para melhorar a usabilidade do site, fornecer suporte, analisar tráfego,
                personalizar conteúdo e exibir anúncios relevantes por meio do <strong>Google AdSense</strong>.</p>
            </article>

            <article className="p-4 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-slate-900">3. Cookies e rastreamento</h3>
              <p className="mt-3 text-slate-700">Utilizamos cookies essenciais e de terceiros. O Google pode usar cookies, incluindo
                DoubleClick, para personalizar anúncios. Você pode gerenciar anúncios e cookies em:</p>
              <ul className="mt-2 list-disc list-inside text-slate-700">
                <li><a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Configuração de anúncios do Google</a></li>
                <li><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Políticas do Google sobre anúncios</a></li>
              </ul>
            </article>

            <article className="p-4 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-slate-900">4. Ferramentas e terceiros</h3>
              <p className="mt-3 text-slate-700">Podemos integrar serviços como <strong>Google Analytics</strong>, <strong>Google AdSense</strong> e
                provedores de hospedagem (ex.: Vercel). Esses serviços podem processar dados para análise ou
                entrega de anúncios.</p>
            </article>

          </div>

          <div className="mt-8 space-y-6">
            <details className="group bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-slate-900">5. Direitos do titular (LGPD)</summary>
              <div className="mt-3 text-slate-700">
                <p>Você pode solicitar: acesso, correção, portabilidade, anonimização, eliminação, bloqueio e revogação do consentimento.</p>
                <p className="mt-2">Para exercer seus direitos, envie um e‑mail para: <strong>peu.queiroz05@gmail.com</strong>.</p>
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-slate-900">6. Compartilhamento de informações</summary>
              <div className="mt-3 text-slate-700">
                <p>Não vendemos dados. Podemos compartilhar informações com: Google (Ads & Analytics), provedores de hospedagem
                  e autoridades legais quando exigido por lei.</p>
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-slate-900">7. Segurança e armazenamento</summary>
              <div className="mt-3 text-slate-700">
                <p>Implementamos medidas técnicas e administrativas para proteger dados. Contudo, nenhum sistema é 100% seguro.
                  Mantemos dados pelo tempo necessário para cumprir finalidades legais e operacionais.</p>
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-slate-900">8. Publicações e conteúdo gerado pelo usuário</summary>
              <div className="mt-3 text-slate-700">
                <p>Conteúdos publicados por usuários em áreas públicas podem ser exibidos. A responsabilidade pelo conteúdo
                  é do autor. Para solicitações de remoção, contate o e‑mail informado.</p>
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-slate-900">9. Links externos</summary>
              <div className="mt-3 text-slate-700">O Portal TEA pode conter links para sites de terceiros. Não nos responsabilizamos
                pelas práticas ou políticas desses sites.</div>
            </details>

            <details className="group bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-slate-900">10. Alterações nesta política</summary>
              <div className="mt-3 text-slate-700">Atualizaremos esta política quando houver mudanças. A data da última atualização
                está no topo deste documento.</div>
            </details>

          </div>

          <footer className="mt-8 border-t pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-600">Contato para solicitações de privacidade:</p>
              <p className="text-sm font-medium text-slate-800">portalteabr@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-500">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Última atualização: {updated}</span>
            </div>
          </footer>

        </section>

      </div>
    </motion.main>
  );
}
