import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HistoriaAutismo = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      
      <h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-600 border-b-4 border-blue-200 pb-4"
        data-aos="fade-down"
      >
        História do Autismo
      </h1>

      {/* Introdução */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-10" data-aos="fade-up">
        <p className="text-gray-700 text-lg leading-relaxed">
          O <strong>Transtorno do Espectro Autista (TEA)</strong> é uma condição
          do neurodesenvolvimento que influencia a comunicação, a interação social
          e a forma como a pessoa percebe o mundo ao seu redor. Apesar de hoje o
          tema ser amplamente estudado, a compreensão do autismo passou por uma
          longa transformação ao longo da história.
        </p>
      </div>

      {/* Seções */}
      <div className="space-y-8">
        <Section
          title="Primeiras Observações e Descobertas (Início do Século XX)"
          text="Antes mesmo de existir um nome para a condição, médicos e educadores já observavam crianças e adultos com formas diferentes de comportamento, comunicação e interação. Porém, faltava um olhar compreensivo e humano."
          aos="fade-right"
        />

        <Section
          title="Leo Kanner e o Surgimento do Termo (1943)"
          text="Em 1943, o psiquiatra Leo Kanner publicou um artigo descrevendo crianças que apresentavam:"
          list={[
            "Dificuldade em criar vínculos sociais",
            "Comportamentos repetitivos",
            "Interesses intensos e específicos",
            "Preferência por rotinas",
          ]}
          extra="Ele chamou o quadro de “autismo infantil precoce”, marcando o início do estudo formal sobre o autismo."
          aos="fade-left"
        />

        <Section
          title="Hans Asperger e o Reconhecimento da Diversidade (1944)"
          text="Um ano depois, em 1944, o médico Hans Asperger descreveu crianças que, embora apresentassem dificuldades de socialização, possuíam linguagem desenvolvida e habilidades intelectuais preservadas. Esse quadro ficou conhecido como Síndrome de Asperger, que hoje faz parte do espectro."
          aos="fade-right"
        />

        <Section
          title="A Era dos Mitos e Equívocos (Décadas de 1950 a 1970)"
          text="Durante anos, acreditou-se erroneamente que o autismo era causado pela forma como os pais criavam a criança. Surgiu então o termo 'mães geladeira', que sugeria, de forma injusta, que mães frias emocionalmente seriam responsáveis pela condição."
          extraBold="Essa teoria foi completamente refutada. O autismo não é causado pela criação familiar."
          aos="fade-left"
        />

        <Section
          title="Compreensão Moderna e Inclusiva (DSM-5 e CID-11)"
          text="A partir do século XXI, a ciência passou a compreender o autismo como um espectro, ou seja, uma condição com muitas formas de manifestação. Cada pessoa autista é única, com habilidades e desafios particulares."
          extra="Hoje, reconhecemos o autismo como uma forma legítima de existir no mundo, parte da diversidade humana — um movimento chamado neurodiversidade."
          aos="fade-right"
        />

        <blockquote
          className="border-l-4 border-blue-500 pl-6 italic text-gray-600 bg-blue-50 p-4 rounded-lg shadow-sm"
          data-aos="zoom-in"
        >
          Não se trata de corrigir o autismo, mas de compreender, respeitar e
          acolher pessoas autistas em sua totalidade.
        </blockquote>
      </div>

      {/* Referências */}
      <div className="mt-12 bg-white p-6 rounded-2xl shadow-lg" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">
          Fontes / Referências
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Kanner, L. (1943). <em>Autistic Disturbances of Affective Contact.</em></li>
          <li>Asperger, H. (1944). <em>Autistic Psychopathy in Childhood.</em></li>
          <li>Organização Mundial da Saúde (OMS) – Classificação CID-11.</li>
          <li>American Psychiatric Association – Manual Diagnóstico DSM-5.</li>
          <li>Movimento Internacional de Neurodiversidade (1990+).</li>
        </ul>
      </div>

      <p className="text-center text-gray-600 mt-8 font-medium">
        Portal TEA — Informação com respeito, inclusão e compromisso com fontes confiáveis.
      </p>

    </div>
  );
};

const Section = ({ title, text, list, extra, extraBold, aos }) => (
  <div
    className="bg-white p-6 rounded-2xl shadow-lg"
    data-aos={aos || "fade-up"}
  >
    <h2 className="text-2xl font-bold mb-3 text-blue-600">{title}</h2>
    <p className="text-gray-700 mb-3">{text}</p>
    {list && (
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )}
    {extra && <p className="text-gray-700 mb-3">{extra}</p>}
    {extraBold && <p className="font-semibold text-gray-800 mb-3">{extraBold}</p>}
  </div>
);

export default HistoriaAutismo;
