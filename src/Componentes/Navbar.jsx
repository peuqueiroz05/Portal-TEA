import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "usuarios", currentUser.uid));
          if (userDoc.exists()) {
            setUserName(userDoc.data().nome); // 🔹 Usa o nome do Firestore
          } else {
            setUserName(currentUser.email?.split("@")[0] || "Usuário");
          }
        } catch (error) {
          console.error("Erro ao buscar nome do usuário:", error);
          setUserName(currentUser.email?.split("@")[0] || "Usuário");
        }
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut(); // 🔹 Desloga do Firebase
    setUserName("");
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-blue-200 to-purple-200 shadow-md fixed w-full z-50 h-16 flex items-center px-6 justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-800">
          Portal TEA
        </Link>

        {/* Botão hamburger sempre visível */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-blue-900 focus:outline-none z-50"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      {/* Side-drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-blue-100 shadow-lg transform transition-transform duration-300 z-40
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col mt-20 space-y-6 px-6">
          <li>
            <Link to="/" className="text-blue-900 hover:text-purple-700" onClick={() => setMenuOpen(false)}>Início</Link>
          </li>
          <li>
            <Link to="/HistoriaAutismo" className="text-blue-900 hover:text-purple-700" onClick={() => setMenuOpen(false)}>História</Link>
          </li>
          <li>
            <Link to="/SobreNos" className="text-blue-900 hover:text-purple-700" onClick={() => setMenuOpen(false)}>Sobre Nós</Link>
          </li>
          <li>
            <Link to="/Comunidade" className="text-blue-900 hover:text-purple-700" onClick={() => setMenuOpen(false)}>Comunidade</Link>
          </li>
          <li>
            <Link to="/TesteAutismo" className="text-blue-900 hover:text-purple-700" onClick={() => setMenuOpen(false)}>Quiz</Link>
          </li>
          <li>
            <Link to="/GuiaMedico" className="text-blue-900 hover:text-purple-700" onClick={() => setMenuOpen(false)}>Guia de atendimentos</Link>
          </li>
          <li>
            <Link to="/Atendimentos" className="text-blue-900 hover:text-purple-700" onClick={() => setMenuOpen(false)}>Atendimentos</Link>
          </li>
          {userName ? (
            <li className="flex flex-col gap-2">
              <span className="text-blue-900 font-semibold">Olá, {userName}!</span>
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
                onClick={() => setMenuOpen(false)}
              >
                Entrar
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-trasparent z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
