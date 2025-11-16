import React from "react";
import { motion } from "framer-motion";

export default function Diagnostico() {
  const keywords = [
    "diagnóstico autismo",
    "diagnóstico tardio",
    "intervenção precoce",
    "camuflagem autista",
    "ADI‑R",
    "ADOS‑2",
    "regulação emocional",
    "saúde mental autismo",
    "burnout autista"
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Diagnóstico do Transtorno do Espectro Autista (TEA)
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Uma análise profunda: diagnóstico na infância, consequências do diagnóstico tardio,
            camuflagem social e recomendações baseadas nas mais recentes evidências científicas.
          </p>
        </header>

        <article className="bg-white p-8 rounded-2xl shadow">
          {/* Introdução Densa */}
          <p className="text-slate-700 leading-relaxed mb-6">
            O diagnóstico do Transtorno do Espectro Autista (TEA) constitui um ponto de virada na vida de muitas pessoas.
            É um processo clínico que envolve múltiplas etapas: análise de histórico do desenvolvimento, entrevistas
            com familiares, observações comportamentais e o uso de instrumentos padronizados como ADI‑R (Autism
            Diagnostic Interview – Revised) e ADOS‑2 (Autism Diagnostic Observation Schedule, 2ª Edição). Tais
            instrumentos são amplamente reconhecidos por guias clínicos, pois permitem avaliar domínios centrais do
            TEA — interação social, comunicação, comportamentos restritos e padronizados — à luz dos critérios do
            DSM‑5 e da CID‑11. Pesquisas recentes apontam que quanto mais cedo ocorre a identificação, maior é o
            potencial para intervenções eficazes, especialmente na criança pequena, o que pode gerar melhorias
            em comunicação, autonomia e bem-estar familiar ao longo do tempo.
          </p>

          {/* Seção 1 */}
          <h2 className="text-2xl font-semibold text-slate-900 mt-6 mb-3">1. Diagnóstico na infância: a importância da detecção precoce</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A infância é um período crítico para o desenvolvimento do cérebro, e muitas janelas de plasticidade ainda
            estão abertas. Identificar o TEA entre os 18 e 36 meses, por exemplo, permite o acesso a intervenções
            comportamentais intensivas, terapias de linguagem e programas educacionais especializados.
            Estudos longitudinais demonstram que intervenções precoces, baseadas em evidência, estão associadas a ganhos
            significativos em linguagem, comportamento social e habilidades adaptativas. Além disso, a avaliação
            precoce favorece o suporte familiar e a preparação de pais e cuidadores para estruturar rotinas mais coerentes e previsíveis.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Entre os instrumentos mais usados por clínicos, a <strong>ADI‑R</strong>, que consiste em uma entrevista detalhada com os cuidadores sobre o desenvolvimento da criança, e a <strong>ADOS‑2</strong>, que registra a interação social e comunicativa em situações estruturadas, são considerados “padrão-ouro”. A pesquisa com grandes amostras sugere que a combinação desses instrumentos aumenta a precisão diagnóstica, mesmo em crianças com diferentes níveis de linguagem ou funcionamento cognitivo. (<a className="text-indigo-600 hover:underline" href="https://link.springer.com/article/10.1007/s10803-015-2372-2" target="_blank" rel="noopener noreferrer">Kim & Lord, 2015 – J Autism Dev Disord</a>)
          </p>

          {/* Seção 2 */}
          <h2 className="text-2xl font-semibold text-slate-900 mt-6 mb-3">2. Consequências do diagnóstico tardio</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Muitas pessoas apenas recebem diagnóstico de TEA na adolescência ou na vida adulta. Isso pode ocorrer
            por vários motivos: manifestações mais sutis, ausência de identificação, ou o uso intensivo de estratégias
            de camuflagem social (masking). O atraso no diagnóstico pode ter implicações profundas para a saúde mental:
            estudos mostram que adultos autistas diagnosticados tardiamente têm maior prevalência de ansiedade, depressão,
            vergonha, solidão e risco maior de burnout. A falta de suporte adaptado, combinada com expectativas sociais
            mal compreendidas, pode resultar em sofrimento prolongado e dificuldades funcionais.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            A trajetória de vida dessas pessoas costuma envolver anos de autoconhecimento difícil. Após receber o diagnóstico,
            muitos relatam alívio, validação de suas diferenças e reconstrução de suas próprias narrativas existenciais. Mas
            também há desafios: a percepção dos outros pode mudar — positivamente quando há empatia, ou negativamente se
            existir estigma mal interpretado. Reconhecer o diagnóstico tarde permite, no entanto, planejar intervenções
            mais realistas e ajustes essenciais para qualidade de vida.
          </p>

          {/* Seção 3 - Camuflagem */}
          <h2 className="text-2xl font-semibold text-slate-900 mt-6 mb-3">3. Camuflagem (masking) e seu impacto psicológico</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A camuflagem social é um fenômeno em que pessoas autistas adotam estratégias para se esconder ou compensar suas
            diferenças neurológicas em contextos sociais: imitar gestos, suprimir estereotipias, internalizar scripts sociais.
            Embora isso possa facilitar a aceitação social, há um custo psicológico elevado. Pesquisas demonstram que
            camuflagem está associada a altos níveis de ansiedade, estresse percebido e regulação emocional prejudicada.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Um estudo com 787 adultos autistas revelou que estresse percebido e dificuldades de regulação emocional
            mediam a relação entre camuflagem e sintomas de depressão e ansiedade. (<a className="text-indigo-600 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/39371362/" target="_blank" rel="noopener noreferrer">Hull et al., 2023</a>)  
            Outro estudo com adolescentes autistas mostrou que comportamentos de camuflagem autodeterminados estão correlacionados
            com discrepâncias entre relatórios de ansiedade/depressão feitos por eles mesmos e por seus cuidadores. (<a className="text-indigo-600 hover:underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11459877/" target="_blank" rel="noopener noreferrer">Lei, Leigh, Charman et al., 2024</a>)
          </p>

          <section className="bg-slate-50 p-4 rounded-md mb-6">
            <h3 className="font-semibold text-slate-800">Implicações clínicas da camuflagem</h3>
            <ul className="list-disc pl-5 text-slate-700 mt-2">
              <li>Profissionais devem considerar relatórios subjetivos de exaustão social e estresse como indicadores relevantes.</li>
              <li>Avaliações diagnósticas devem incluir perguntas sobre estratégias de camuflagem, especialmente em populações subdiagnosticadas.</li>
              <li>Intervenções de suporte emocional podem focar em regulação emocional, autocompaixão e redução de estigma interno. (<a className="text-indigo-600 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/40539214/" target="_blank" rel="noopener noreferrer">Camouflaging e autocompaixão — Petrides et al., 2023</a>)</li>
            </ul>
          </section>

          {/* Seção 4 - Impacto social e interpessoal */}
          <h2 className="text-2xl font-semibold text-slate-900 mt-6 mb-3">4. Como o diagnóstico molda a forma que os outros nos veem</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            O diagnóstico pode transformar interpretações: comportamentos previamente vistos como “teimosia”, “timidez” ou
            “desatenção” passam a ser compreendidos sob a ótica neurológica. Isso permite não só reduzir estigmas, como também
            favorecer ajustes sensoriais, pedagógicos e psicológicos. No ambiente escolar e de trabalho, estratégias como rotinas
            previsíveis, pausas sensoriais e adaptações comunicativas se tornam viáveis com base no diagnóstico.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            No entanto, o diagnóstico também exige comunicação cuidadosa. Profissionais têm papel central para explicar o
            laudo de forma empática, enfatizando funcionamentos e necessidades em vez de rótulos, para evitar estigmas negativos
            ou mal-entendidos sobre o TEA.
          </p>

          {/* Seção 5 – Recomendações práticas */}
          <h2 className="text-2xl font-semibold text-slate-900 mt-6 mb-3">5. Recomendações práticas para famílias, educadores e profissionais</h2>
          <ul className="list-decimal pl-5 text-slate-700 space-y-3 mb-6">
            <li><strong>Avaliação multidisciplinar especializada:</strong> buscar psicólogos com experiência em ADI‑R/ADOS, neuropediatras ou psiquiatras do desenvolvimento.</li>
            <li><strong>Planejar adaptações sensoriais:</strong> ajustar ambientes físicos (luzes, ruídos, mobiliário) para reduzir sobrecarga.</li>
            <li><strong>Investir em regulação emocional:</strong> programas de autocuidado, autocompaixão, e estratégias para lidar com estresse crônico.</li>
            <li><strong>Educar a comunidade:</strong> capacitar professores e colegas sobre neurodiversidade para reduzir estigmas e promover inclusão.</li>
            <li><strong>Apoio contínuo para adultos diagnosticados tardiamente:</strong> monitorar saúde mental, senso de identidade e burnout.</li>
          </ul>

          {/* Seção 6 – Interpretação de evidências */}
          <h2 className="text-2xl font-semibold text-slate-900 mt-6 mb-3">6. Interpretação crítica de evidências</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Embora haja um consenso crescente sobre os riscos associados à camuflagem e ao diagnóstico tardio, nem todas
            as estratégias de intervenção são igualmente validadas. Pesquisas de meta-análise, guias clínicos e estudos
            longitudinais devem orientar as escolhas terapêuticas, ao invés de promessas de cura. O foco deve estar na
            funcionalidade, qualidade de vida e empoderamento, não apenas na etiqueta diagnóstica.
          </p>

          {/* Referências e palavras-chave */}
          <footer className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold text-slate-900">Palavras-chave</h3>
            <p className="text-sm text-slate-600 mb-4">{keywords.join(" • ")}</p>

            <h3 className="text-lg font-semibold text-slate-900">Referências científicas</h3>
            <ul className="list-disc pl-5 text-slate-600 mt-3 space-y-2">
              <li><a className="text-indigo-600 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/33593423/" target="_blank" rel="noopener noreferrer">Parris et al. (2021) – Associação entre camuflagem e saúde mental em adultos autistas</a></li>
              <li><a className="text-indigo-600 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/36416274/" target="_blank" rel="noopener noreferrer">Hull et al. (2022) – Camuflagem e sintomas internalizados em jovens autistas</a></li>
              <li><a className="text-indigo-600 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/39371362/" target="_blank" rel="noopener noreferrer">Hull, Mandy et al. (2023) – Estresse percebido e regulação emocional como mediadores na camuflagem</a></li>
              <li><a className="text-indigo-600 hover:underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11459877/" target="_blank" rel="noopener noreferrer">Lei, Leigh, Charman et al. (2024) – Camuflagem em adolescentes autistas e discrepância entre autorrelato e relato de cuidadores</a></li>
              <li><a className="text-indigo-600 hover:underline" href="https://link.springer.com/article/10.1007/s10803-015-2372-2" target="_blank" rel="noopener noreferrer">Kim & Lord (2015) – Utilização de ADI‑R e ADOS‑G para avaliação diagnóstica</a></li>
              <li><a className="text-indigo-600 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/40579935/" target="_blank" rel="noopener noreferrer">Murray et al. (2023) – Camuflagem e saúde mental ao longo do tempo em adultos autistas</a></li>
            </ul>

            <p className="text-xs text-slate-500 mt-4">
              Essas referências foram selecionadas visando dar embasamento científico às informações apresentadas.
            </p>
          </footer>
        </article>
      </div>
    </motion.main>
  );
}
