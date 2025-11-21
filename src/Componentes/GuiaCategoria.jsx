import React from "react";
import { useParams, Link } from "react-router-dom";
import guiaData from "../data/guiaData";

export default function GuiaCategoria() {
  const { categoriaId } = useParams();
  const categoria = guiaData.categorias.find(c => c.id === categoriaId);
  const artigos = guiaData.artigos.filter(a => a.categoria === categoriaId);

  if (!categoria) return <p className="p-6">Categoria não encontrada.</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">
        <Link to="/guia" className="hover:underline">Guia TEA</Link> &gt; {categoria.nome}
      </nav>

      <h1 className="text-3xl font-bold text-blue-600 mb-6">{categoria.nome}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artigos.map(a => (
          <Link
            key={a.id}
            to={`/guia/artigo/${a.id}`}
            className="block p-5 border rounded-xl bg-white hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{a.titulo}</h2>
            <p className="text-gray-600 text-sm">Clique para ler o conteúdo completo</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
