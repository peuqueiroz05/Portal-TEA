import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");

  // Verifica se o usuário está logado
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUserName("");
  };

  return (
    <header className="bg-gradient-to-r from-blue-200 to-purple-200 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-800">
          Portal TEA
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-blue-900 hover:text-purple-700 transition">Início</Link>
          <Link to="/SobreNos" className="text-blue-900 hover:text-purple-700 transition">Sobre Nós</Link>
          <Link to="/Comunidade" className="text-blue-900 hover:text-purple-700 transition">Comunidade</Link>
          <Link to="/TesteAutismo" className="text-blue-900 hover:text-purple-700 transition">Quiz</Link>
          <Link to="/Contato" className="text-blue-900 hover:text-purple-700 transition">Contato</Link>

          {/* Substitui o botão Entrar por saudação */}
          {userName ? (
            <div className="flex items-center gap-3">
              <span className="text-blue-900 font-semibold">
                Olá, {userName}!
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Sair
              </button>
            </div>
          ) : (
            <Link
              to="/Login"
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Entrar
            </Link>
          )}
        </nav>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-900 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-100 border-t border-blue-200">
          <ul className="flex flex-col items-center py-4 space-y-3">
            <li><Link to="/" className="text-blue-900 hover:text-purple-700">Início</Link></li>
            <li><Link to="/SobreNos" className="text-blue-900 hover:text-purple-700">Sobre Nós</Link></li>
            <li><Link to="/Comunidade" className="text-blue-900 hover:text-purple-700">Comunidade</Link></li>
            <li><Link to="/Contato" className="text-blue-900 hover:text-purple-700">Contato</Link></li>
            <li><Link to="/TesteAutismo" className="text-blue-900 hover:text-purple-700">Quiz</Link></li>

            {/* Mobile: saudação ou botão Entrar */}
            {userName ? (
              <li className="flex flex-col items-center gap-2">
                <span className="text-blue-900 font-semibold">
                  Olá, {userName}!
                </span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Sair
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/Login"
                  className="text-blue-900 hover:text-purple-700"
                >
                  Entrar
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
