import React from "react";
import { FaHandsHelping, FaHeart, FaUsers } from "react-icons/fa";

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
        Sobre Nós
      </h1>

      <p className="max-w-3xl text-center text-gray-700 text-lg mb-10 leading-relaxed">
        O <strong>Portal TEA</strong> nasceu com o propósito de criar um espaço seguro,
        acolhedor e informativo para pessoas Autistas, familiares, educadores e
        profissionais da área da saúde. Aqui, acreditamos que cada pessoa é única
        e merece ser compreendida de verdade.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <FaHeart className="text-red-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-blue-700 mb-2">Empatia</h2>
          <p className="text-gray-600">
            Acreditamos em relações humanas baseadas no respeito e na compreensão.
            Cada história importa e merece ser ouvida.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <FaUsers className="text-purple-600 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-blue-700 mb-2">Comunidade</h2>
          <p className="text-gray-600">
            Somos uma rede de apoio e troca de experiências. Ninguém precisa
            caminhar sozinho.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <FaHandsHelping className="text-green-600 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-blue-700 mb-2">Acolhimento</h2>
          <p className="text-gray-600">
            Criamos um ambiente acolhedor onde pessoas autistas podem se expressar
            livremente, sem julgamentos.
          </p>
        </div>
      </div>

      <div className="max-w-3xl text-center mt-12 text-gray-700 text-lg leading-relaxed">
        <p className="mb-6">
          Nosso compromisso é com a verdade, com o respeito e com a luta por mais
          acessibilidade, inclusão e representatividade. 💙
        </p>

        <p className="font-semibold text-blue-700">
          Você é bem-vindo aqui. Você pertence aqui.
        </p>
      </div>
    </div>
  );
}
