import React from "react";
import { Link } from "react-router-dom";
import guiaData from "../data/guiaData";

export default function GuiaTEA() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
        Guia TEA – Explorar Categorias
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guiaData.categorias.map((cat) => (
          <Link
            key={cat.id}
            to={`/guia/${cat.id}`}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Aqui usamos a imagem importada do guiaData */}
            <img
              src={cat.imagem}
              alt={cat.nome}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{cat.nome}</h2>
              <p className="text-gray-600">{cat.descricao}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
