import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");

    try {
      // 🔹 Faz login com Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // 🔹 Salva o nome e email no localStorage
      localStorage.setItem("userName", user.displayName || "Usuário");
      localStorage.setItem("userEmail", user.email);

      // 🔹 Alerta e redireciona
      alert("Login realizado com sucesso!");

      // Redireciona primeiro
      navigate("/comunidade");

      // E só então recarrega (para atualizar o Navbar)
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (error) {
      console.error("Erro ao fazer login:", error.code);

      // 🔹 Mensagens mais detalhadas
      if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password") {
        setErro("E-mail ou senha incorretos!");
      } else if (error.code === "auth/user-not-found") {
        setErro("Usuário não encontrado. Verifique o e-mail digitado.");
      } else if (error.code === "auth/invalid-email") {
        setErro("Formato de e-mail inválido.");
      } else {
        setErro("Erro ao fazer login. Tente novamente.");
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#89CFF0",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "10px",
              flexGrow: 1,
            }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              required
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "10px",
              flexGrow: 1,
            }}
          >
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            Entrar
          </button>
        </form>

        {erro && <p style={{ color: "red", marginTop: "15px" }}>{erro}</p>}

        <p style={{ marginTop: "15px" }}>
          Não tem conta?{" "}
          <span
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/cadastro")}
          >
            Cadastre-se
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
