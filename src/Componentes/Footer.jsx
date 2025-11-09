import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-200 to-purple-200 text-blue-900 py-8 mt-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Esquerda */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Portal TEA </h2>
          <p className="text-sm">Espaço de acolhimento, troca e conscientização.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm">
          <Link to="/Privacidade" className="hover:text-purple-700 transition">Privacidade</Link>
          <Link to="/DireitosAutorais" className="hover:text-purple-700 transition">Direitos Autorais</Link>
          <Link to="/Suporte" className="hover:text-purple-700 transition">Suporte</Link>
          <Link to="/FAQ" className="hover:text-purple-700 transition">FAQ</Link>
        </div>
      </div>

      {/* Linha final */}
      <div className="text-center text-xs text-blue-800 mt-6 border-t border-blue-300 pt-3">
        © {new Date().getFullYear()} Portal TEA. Todos os direitos reservados.
      </div>
    </footer>
  );
}
