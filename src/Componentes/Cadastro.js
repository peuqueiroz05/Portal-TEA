// src/Cadastro.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionamento
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); // Hook do React Router

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    try {
      // Cria usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Cria documento no Firestore com o UID do usuário
      await setDoc(doc(db, "usuarios", user.uid), {
        nome: nome,
        email: email,
        criadoEm: new Date(),
        uid: user.uid
      });

      alert("Cadastro realizado com sucesso!");
      
      // Redireciona para a página da comunidade
      navigate("/comunidade");

      // Limpa campos
      setNome("");
      setEmail("");
      setSenha("");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar. Veja o console.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Cadastro de Usuário</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nome */}
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Campo Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Campo Senha */}
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Botão de cadastro */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
