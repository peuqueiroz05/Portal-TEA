import React from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const atendimentos = [
  {
    nome: "Clínica Vida Plena",
    resumo: "Atendimento psicológico voltado para ansiedade, depressão e desenvolvimento pessoal.",
    contato: "(81) 98765-4321",
    whatsapp: "81987654321",
    email: "contato@clinicavidaplena.com.br",
    endereco: "Rua da Paz, 123 - Recife, PE",
    site: "https://www.instagram.com/clinicavidaplena_cvp/",
  },
  {
    nome: "Clínica Escola UNIBRA",
    resumo: "Atendimento psicológico individual. Segunda a sexta, 8h-12h e 13h-20h",
    contato: "(81) 98254-3044",
    whatsapp: "81982543044",
    email: "clinica.psicologia@grupounibra.com",
    endereco: "Rua Padre Inglês - Boa vista, Recife",
    site: null,
  },
  {
    nome: "Espaço Equilíbrio",
    resumo: "Clínica de psicologia com preços acessíveis, atendimento humanizado e workshops.",
    contato: "(81) 91234-5678",
    whatsapp: "81912345678",
    email: null,
    endereco: "Rua Professor José Candido Pessoa, 1569, Bairro Novo, Olinda",
    site: "http://www.ceequilibrio.com.br",
  },
];

const Atendimentos = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Atendimentos Psicológicos Acessíveis em Recife
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {atendimentos.map((atendimento, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              {atendimento.nome}
            </h2>
            <p className="text-gray-600 mb-4">{atendimento.resumo}</p>

            <p className="flex items-center text-gray-500 mb-2">
              <FaPhone className="mr-2 text-gray-600" />
              {atendimento.contato}
            </p>

            <a
              href={`https://wa.me/${atendimento.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md mb-2 hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>

            {atendimento.email && (
              <a
                href={`mailto:${atendimento.email}`}
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md mb-2 hover:bg-blue-600 transition-colors"
              >
                <FiMail className="mr-2" />
                Email
              </a>
            )}

            <p className="flex items-center text-gray-500 mb-2">
              <FiMapPin className="mr-2 text-gray-600" />
              {atendimento.endereco}
            </p>

            {atendimento.site && (
              <a
                href={atendimento.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visitar site
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Atendimentos;
