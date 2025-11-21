import React from "react";
import { useParams, Link } from "react-router-dom";
import guiaData from "../data/guiaData";

export default function GuiaArtigo() {
  const { artigoId } = useParams();
  const artigo = guiaData.artigos.find(a => a.id === artigoId);

  if (!artigo) return <p className="p-6">Artigo não encontrado.</p>;

  const categoria = guiaData.categorias.find(c => c.id === artigo.categoria);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">
        <Link to="/guia" className="hover:underline">Guia TEA</Link> &gt;{' '}
        <Link to={`/guia/${categoria.id}`} className="hover:underline">{categoria.nome}</Link> &gt;{' '}
        {artigo.titulo}
      </nav>

      <h1 className="text-4xl font-bold text-blue-600 mb-6">{artigo.titulo}</h1>

      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {artigo.conteudo}
      </p>
    </div>
  );
}
