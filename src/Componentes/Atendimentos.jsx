import React from "react";

const atendimentos = [
  {
    nome: "Clínica Vida Plena",
    resumo: "Atendimento psicológico voltado para ansiedade, depressão e desenvolvimento pessoal.",
    contato: "(81) 98765-4321",
    whatsapp: "81987654321",
    endereco: "Rua da Paz, 123 - Recife, PE",
    site: "https://www.instagram.com/clinicavidaplena_cvp/",
  },
  {
    nome: "Clínica Escola UNIBRA",
    resumo: "Atendimento psicológico individual",
    contato: "(81) 99876-5432",
    whatsapp: "81998765432",
    endereco: "Av. Boa Viagem, 456 - Recife, PE",
    site: null,
  },
  {
    nome: "Espaço Equilíbrio",
    resumo: "Clínica de psicologia com preços acessíveis, atendimento humanizado e workshops.",
    contato: "(81) 91234-5678",
    whatsapp: "81912345678",
    endereco: "Rua Professor José Candido Pessoa, 1569, Bairro Novo, Olinda",
    site: "hhttp://www.ceequilibrio.com.br/?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnnH9chOoK08Ysu3EQpzcWKW0F2F2nKEe2kNN6LrwAc_8xkqTpvnhorld_TLA_aem_ZmFrZWR1bW15MTZieXRlcw",
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
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {atendimento.nome}
            </h2>
            <p className="text-gray-600 mb-4">{atendimento.resumo}</p>
            <p className="text-gray-500 mb-1">
              <strong>Contato:</strong> {atendimento.contato}
            </p>
            <p className="text-gray-500 mb-1">
              <strong>WhatsApp:</strong>{" "}
              <a
                href={`https://wa.me/${atendimento.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                {atendimento.whatsapp}
              </a>
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Endereço:</strong> {atendimento.endereco}
            </p>
            {atendimento.site && (
              <p className="text-blue-600 hover:underline">
                <a
                  href={atendimento.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar site
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Atendimentos;
