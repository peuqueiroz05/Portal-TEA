import React from "react";
import { Lightbulb, Brain, Heart, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const curiosidades = [
  {
    icon: <Brain size={40} className="text-blue-500" />,
    titulo: "Hiperfoco",
    texto: "Pessoas autistas podem desenvolver hiperfoco em temas específicos, aprofundando conhecimento.",
  },
  {
    icon: <Heart size={40} className="text-red-500" />,
    titulo: "Sensibilidades",
    texto: "Algumas pessoas têm sensibilidade aumentada a sons, luzes ou texturas.",
  },
  {
    icon: <Lightbulb size={40} className="text-yellow-500" />,
    titulo: "Aprendizagem única",
    texto: "O aprendizado pode ocorrer de forma visual, repetitiva ou altamente estruturada.",
  },
  {
    icon: <Sparkles size={40} className="text-purple-500" />,
    titulo: "Comunicação diversa",
    texto: "Comunicar não é só falar: expressões, gestos e dispositivos também são comunicação.",
  },
];

const CuriosidadesTEA = () => {
  React.useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Curiosidades sobre o Autismo
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {curiosidades.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center"
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
            <p className="text-gray-600 text-sm">{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuriosidadesTEA;
