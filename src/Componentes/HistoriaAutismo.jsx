import React from "react";

const HistoriaAutismo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        História do Autismo
      </h1>

      <p className="mb-4">
        O <strong>Transtorno do Espectro Autista (TEA)</strong> é uma condição
        do neurodesenvolvimento que influencia a comunicação, a interação social
        e a forma como a pessoa percebe o mundo ao seu redor. Apesar de hoje o
        tema ser amplamente estudado, a compreensão do autismo passou por uma
        longa transformação ao longo da história.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">
        Primeiras Observações e Descobertas (Início do Século XX)
      </h2>
      <p className="mb-4">
        Antes mesmo de existir um nome para a condição, médicos e educadores já
        observavam crianças e adultos com formas diferentes de comportamento,
        comunicação e interação. Porém, faltava um olhar compreensivo e humano.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">
        Leo Kanner e o Surgimento do Termo (1943)
      </h2>
      <p className="mb-4">
        Em 1943, o psiquiatra <strong>Leo Kanner</strong> publicou um artigo descrevendo
        crianças que apresentavam:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Dificuldade em criar vínculos sociais</li>
        <li>Comportamentos repetitivos</li>
        <li>Interesses intensos e específicos</li>
        <li>Preferência por rotinas</li>
      </ul>

      <p className="mb-4">
        Ele chamou o quadro de <strong>“autismo infantil precoce”</strong>, marcando o início
        do estudo formal sobre o autismo.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">
        Hans Asperger e o Reconhecimento da Diversidade (1944)
      </h2>
      <p className="mb-4">
        Um ano depois, em 1944, o médico <strong>Hans Asperger</strong> descreveu crianças que,
        embora apresentassem dificuldades de socialização, possuíam linguagem
        desenvolvida e habilidades intelectuais preservadas. Esse quadro ficou
        conhecido como <strong>Síndrome de Asperger</strong>, que hoje faz parte do espectro.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">
        A Era dos Mitos e Equívocos (Décadas de 1950 a 1970)
      </h2>
      <p className="mb-4">
        Durante anos, acreditou-se erroneamente que o autismo era causado pela
        forma como os pais criavam a criança. Surgiu então o termo
        <strong>“mães geladeira”</strong>, que sugeria, de forma injusta, que mães frias
        emocionalmente seriam responsáveis pela condição.
      </p>
      <p className="mb-4 font-semibold">
        Essa teoria foi completamente refutada. O autismo **não é causado pela
        criação familiar**.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">
        Compreensão Moderna e Inclusiva (DSM-5 e CID-11)
      </h2>
      <p className="mb-4">
        A partir do século XXI, a ciência passou a compreender o autismo como um
        <strong>espectro</strong>, ou seja, uma condição com muitas formas de manifestação.
        Cada pessoa autista é única, com habilidades e desafios particulares.
      </p>

      <p className="mb-4">
        Hoje, reconhecemos o autismo como uma forma legítima de existir no
        mundo, parte da diversidade humana — um movimento chamado
        <strong> neurodiversidade</strong>.
      </p>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6">
        Não se trata de corrigir o autismo, mas de compreender, respeitar e
        acolher pessoas autistas em sua totalidade.
      </blockquote>

      <h2 className="text-2xl font-bold mt-10 mb-3 text-blue-600">
        Fontes / Referências
      </h2>
      <ul className="list-disc pl-6 mb-8">
        <li>Kanner, L. (1943). <em>Autistic Disturbances of Affective Contact.</em></li>
        <li>Asperger, H. (1944). <em>Autistic Psychopathy in Childhood.</em></li>
        <li>Organização Mundial da Saúde (OMS) – Classificação CID-11.</li>
        <li>American Psychiatric Association – Manual Diagnóstico DSM-5.</li>
        <li>Movimento Internacional de Neurodiversidade (1990+).</li>
      </ul>

      <p className="text-center font-medium text-gray-700">
        Portal TEA — Informação com respeito, inclusão e compromisso com fontes confiáveis.
      </p>
    </div>
  );
};

export default HistoriaAutismo;
