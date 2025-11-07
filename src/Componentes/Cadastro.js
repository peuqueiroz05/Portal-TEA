import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // 1️⃣ Cria o usuário no Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // 2️⃣ Atualiza o perfil no Auth (para incluir o nome)
      await updateProfile(user, { displayName: nome });

      // 3️⃣ Cria um documento no Firestore com as informações do usuário
      await setDoc(doc(db, "usuarios", user.uid), {
        nome: nome,
        email: email,
        criadoEm: new Date()
      });

      // 4️⃣ Redireciona para a comunidade ou login
      navigate("/comunidade");

    } catch (error) {
      console.error("Erro ao registrar:", error.code, error.menssage);
      setErro("Erro ao registrar. Tente novamente!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Cadastre-se</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary" style={styles.button}>
            Registrar
          </button>

          {erro && <p style={{ color: "red", marginTop: "15px" }}>{erro}</p>}
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  box: {
    background: "linear-gradient(135deg, #a6e6cf, #89CFF0)",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Cadastro;
