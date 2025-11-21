import React from "react";
import { FaHospital, FaUserMd, FaHandsHelping, FaNotesMedical } from "react-icons/fa";

const saudeInfo = [
  {
    titulo: "Diagnóstico e tratamento",
    descricao:
      "É importante a conscientização do paciente e dos familiares, sobre seus tratamentos e direitos, os objetivos deste guia é dispor informações que auxiliem mães, pais e responsáveis sobre o TEA",
    fonte: "https://www.mpgo.mp.br/portal/arquivos/2024/02/08/14_33_22_339_Guia_Pr_tico_Autismo_vers_o_2.pdf",
    icon: <FaNotesMedical className="text-blue-500 w-8 h-8" />,
  },
  {
    titulo: "Experiência mais humanizada",
    descricao:
      "Consultórios podem adaptar o ambiente com iluminação suave, reduzir ruídos e limitar estímulos visuais para tornar a experiência mais confortável.",
    fonte: "https://portal.afya.com.br/carreira/atendimento-medico-a-pacientes-autistas-como-tornar-a-experiencia-mais-humanizada",
    icon: <FaHospital className="text-green-500 w-8 h-8" />,
  },
  {
    titulo: "Estratégias de acompanhamento",
    descricao:
      "Descubra estratégias eficazes de acompanhamento para pessoas autistas, técnicas como ABA, comunicação aumentativa e intervenções precoces fazem diferença, Avaliações periódicas ajudam a monitorar e ajustar o progresso. O Abraço conecta terapeutas, famílias e registros em um só lugar, cada pessoa no espectro é única, e o acompanhamento certo transforma vidas.",
    fonte: "https://www.autism.org/communication-strategies",
    icon: <FaUserMd className="text-yellow-500 w-8 h-8" />,
  },
  {
    titulo: "Seus direitos",
    descricao:
      "Conheça os direitos das pessoas com autismo e como garantir educação, saúde e apoio social, descubra leis importantes como a Lei Berenice Piana e a Carteira de Identificação do TEA, cada direito conta, saiba e proteja quem você ama",
    fonte: "https://autismolegal.com.br/direitos-do-autista/",
    icon: <FaHandsHelping className="text-purple-500 w-8 h-8" />,
  },
];

const Saude = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Manual de saúde, atendimento médico e direitos para pessoas com TEA
      </h1>
      <p className="mb-10 text-gray-700 text-lg text-center">
        Recomendações baseadas em fontes confiáveis para tornar consultas e procedimentos médicos mais acessíveis e confortáveis para pessoas com Transtorno do Espectro Autista.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {saudeInfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-400"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <h2 className="text-xl font-semibold text-gray-800">{item.titulo}</h2>
            </div>
            <p className="text-gray-700">{item.descricao}</p>
            <a
              href={item.fonte}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Confira
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saude;
