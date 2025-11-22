import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "usuarios", currentUser.uid));
          if (userDoc.exists()) {
            setUserName(userDoc.data().nome);
          } else {
            setUserName(currentUser.email?.split("@")[0] || "Usuário");
          }
        } catch (error) {
          console.error("Erro ao buscar nome do usuário:", error);
        }
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
    setUserName("");
    setMenuOpen(false);
  };

  // ⚡ Função para enviar evento ao Google Analytics
  const trackClick = (label) => {
    if (window.gtag) {
      window.gtag("event", "menu_click", {
        item: label,
        category: "navigation",
      });
    }
  };

  // ⚡ Animação dos itens (Framer Motion)
  const itemAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07 },
    }),
  };

  return (
    <>
      <header className="bg-gradient-to-r from-blue-200 to-purple-200 shadow-md fixed top-0 left-0 w-full z-50 h-16 flex items-center justify-between px-4 sm:px-6 overflow-hidden">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-800"
          onClick={() => trackClick("Logo")}
        >
          Portal TEA
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-blue-900 focus:outline-none z-50"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      {/* SIDE DRAWER */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-64 bg-blue-100 shadow-lg z-40"
      >
        <ul className="flex flex-col mt-20 space-y-6 px-6">
          {[
            { to: "/", label: "Início" },
            { to: "/HistoriaAutismo", label: "História" },
            { to: "/SobreNos", label: "Sobre Nós" },
            { to: "/Comunidade", label: "Comunidade" },
            { to: "guiaTEA", label: "Guia TEA"},
            { to: "/TesteAutismo", label: "Quiz" },
            { to: "/GuiaSaude", label: "Manual de Saúde" },
            { to: "/Atendimentos", label: "Atendimentos" },
            { to: "/Diagnostico", label: "Diagnóstico" },
            { to: "/tarefas", label: "Quadro de Tarefas"},
            { to: "/DiarioSensorial", label: "Diario Sensorial"},
            
          ].map((item, i) => (
            <motion.li
              key={item.to}
              variants={itemAnimation}
              custom={i}
              initial="hidden"
              animate="visible"
            >
              <Link
                to={item.to}
                className="text-blue-900 hover:text-purple-700"
                onClick={() => {
                  trackClick(item.label);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}

          {userName ? (
            <motion.li
              variants={itemAnimation}
              custom={10}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2"
            >
              <span className="text-blue-900 font-semibold">Olá, {userName}!</span>
              <button
                onClick={() => {
                  handleLogout();
                  trackClick("Logout");
                }}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Sair
              </button>
            </motion.li>
          ) : (
            <motion.li
              variants={itemAnimation}
              custom={11}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/Login"
                className="text-blue-900 hover:text-purple-700"
                onClick={() => {
                  trackClick("Login");
                  setMenuOpen(false);
                }}
              >
                Entrar
              </Link>
            </motion.li>
          )}
        </ul>
      </motion.div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
