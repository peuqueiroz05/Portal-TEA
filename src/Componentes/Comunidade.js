import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { auth, db } from "../firebase/firebaseConfig"; //tinha um storage antes, mas tirei
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
 //import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Comunidade = () => {
  const [posts, setPosts] = useState([]);
  const [novoPost, setNovoPost] = useState("");
  const [imagem, setImagem] = useState(null);
  //const [comentarios, setComentarios] = useState({});
  const [novoComentario, setNovoComentario] = useState({});
  const [topicoSelecionado, setTopicoSelecionado] = useState("geral");
  const [topico, setTopico] = useState("geral");
  const [user, setUser] = useState(null);
  const [userNome, setUserNome] = useState(""); // 🔹 Estado para o nome do usuário

  // 🔹 Detecta login e busca o nome do usuário no Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "usuarios", currentUser.uid));
          if (userDoc.exists()) {
            const nomeDoFirestore = userDoc.data().nome;
            if (nomeDoFirestore && nomeDoFirestore.trim() !== "") {
              setUserNome(nomeDoFirestore); // 🔹 Usa o nome do Firestore
            } else {
              setUserNome(""); // Se não tiver nome, mantém vazio
            }
          } else {
            setUserNome(""); // Sem documento no Firestore
          }
        } catch (error) {
          console.error("Erro ao buscar nome do usuário:", error);
          setUserNome(""); // Em caso de erro, mantém vazio
        }
      } else {
        setUserNome(""); // Usuário deslogado
      }
    });

    return () => unsubscribe();
  }, []);

  const userId = user?.uid;

  // 🔹 Escuta os posts em tempo real
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        curtidas: [],
        comentarios: [],
        ...doc.data(),
      }));
      lista.sort((a, b) => b.timestamp?.toDate() - a.timestamp?.toDate());
      setPosts(lista);
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Postar com proteção extra
  const handlePostar = async () => {
    if (!user) {
      alert("⚠️ Você precisa estar logado para postar.");
      return;
    }

    if (novoPost.trim() === "") {
      alert("Digite algo antes de postar!");
      return;
    }

    try {
   let imagemURL = "";
if (imagem) {
  const formData = new FormData();
  formData.append("file", imagem);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

  try {
    const resposta = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await resposta.json();

    if (data.secure_url) {
      imagemURL = data.secure_url;
    } else {
      console.error("Erro no retorno do Cloudinary:", data.error || data);
      alert("❌ Erro ao enviar imagem. Verifique seu upload preset no Cloudinary.");
      return;
    }
  } catch (error) {
    console.error("Erro ao enviar imagem:", error);
    alert("❌ Erro na comunicação com o Cloudinary.");
    return;
  }
}



      const postData = {
        texto: novoPost.trim(),
        imagem: imagemURL,
        curtidas: [],
        comentarios: [],
        topico,
        autorId: userId,
        autorNome: userNome,
        timestamp: serverTimestamp(),
      };

      await addDoc(collection(db, "posts"), postData);

      setNovoPost("");
      setImagem(null);
      setTopico("geral");
    } catch (error) {
      console.error("Erro ao postar:", error);
      alert("❌ Ocorreu um erro ao postar. Tente novamente.");
    }
  };

  const handleExcluirPost = async (id) => {
    if (window.confirm("Deseja realmente excluir este post?")) {
      try {
        await deleteDoc(doc(db, "posts", id));
      } catch (error) {
        console.error("Erro ao excluir:", error);
        alert("Você não tem permissão para excluir este post.");
      }
    }
  };

  const handleCurtir = async (id, postCurtidas) => {
    const postRef = doc(db, "posts", id);
    const curtidasAtuais = Array.isArray(postCurtidas) ? postCurtidas : [];
    const jaCurtiu = curtidasAtuais.includes(userId);

    const novasCurtidas = jaCurtiu
      ? curtidasAtuais.filter((uid) => uid !== userId)
      : [...curtidasAtuais, userId];

    await updateDoc(postRef, { curtidas: novasCurtidas });
  };

  const handleComentar = async (id) => {
    const comentarioTexto = novoComentario[id]?.trim();
    if (!comentarioTexto) return;

    const post = posts.find((p) => p.id === id);
    const comentariosAtuais = Array.isArray(post?.comentarios)
      ? post.comentarios
      : [];

    const novoComentarioObj = {
      id: Date.now(),
      texto: comentarioTexto,
      autor: userNome,
      autorId: userId,
      timestamp: new Date(),
    };

    await updateDoc(doc(db, "posts", id), {
      comentarios: [...comentariosAtuais, novoComentarioObj],
    });

    setNovoComentario({ ...novoComentario, [id]: "" });
  };

  const formatarTempo = (timestamp) => {
    if (!timestamp) return "";
    const agora = new Date();
    const dataPost = timestamp.toDate();
    const diff = (agora - dataPost) / 1000;

    if (diff < 60) return "agora";
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return `${Math.floor(diff / 86400)}d`;
  };

  const topicos = ["geral", "Dúvidas", "Apoio", "Indicações"];

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <h1 className="text-2xl font-bold">Comunidade 💬</h1>
        <p className="text-gray-600 mt-1">
          👋 {userNome ? `Olá, ` : "Olá!,"}
          {userNome && <span className="font-semibold text-blue-600">{userNome}</span>}{" "}
          Bem-vindo à comunidade.
        </p>
      </motion.div>

      {/* 🔹 Filtros de tópicos */}
      <div className="flex justify-around mb-4">
        {topicos.map((t) => (
          <button
            key={t}
            onClick={() => setTopicoSelecionado(t)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              topicoSelecionado === t
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* 🔹 Novo post */}
      <div className="bg-white rounded-2xl shadow p-4 mb-6">
        <textarea
          value={novoPost}
          onChange={(e) => setNovoPost(e.target.value)}
          placeholder="O que você está pensando?"
          className="w-full border-none focus:ring-0 resize-none outline-none"
        ></textarea>

        <select
          value={topico}
          onChange={(e) => setTopico(e.target.value)}
          className="border rounded px-2 py-1 mt-2 text-sm"
        >
          {topicos.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <label className="flex items-center gap-2 mt-3 cursor-pointer w-fit px-3 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setImagem(e.target.files[0])}
          />
          📷 Adicionar imagem
        </label>

        {imagem && (
          <img
            src={URL.createObjectURL(imagem)}
            alt="Preview"
            className="mt-3 rounded-xl max-h-60 object-cover"
          />
        )}

        <button
          onClick={handlePostar}
          className="mt-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition"
        >
          Postar
        </button>
      </div>

      {/* 🔹 Lista de posts */}
      {posts
        .filter((p) => p.topico === topicoSelecionado)
        .map((post) => {
          const curtidas = Array.isArray(post.curtidas) ? post.curtidas : [];
          const comentariosLista = Array.isArray(post.comentarios)
            ? post.comentarios
            : [];

          return (
            <div
              key={post.id}
              className="bg-white shadow rounded-2xl p-4 mb-4 border border-gray-100"
            >
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>
                  {post.autorNome || "Anônimo"}
                  {post.autorId === "Zo09CVTehpVyuHBMsGQT1cXUOJl1" && "(Admin)"}
                  </span>
                <span>{formatarTempo(post.timestamp)}</span>
              </div>

              <p className="text-gray-800">{post.texto}</p>
              {post.imagem && (
                <img
                  src={post.imagem}
                  alt="Post"
                  className="rounded-xl mt-3 max-h-80 object-cover"
                />
              )}

              <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                <button
                  onClick={() => handleCurtir(post.id, curtidas)}
                  className={`transition ${
                    curtidas.includes(userId)
                      ? "text-red-500"
                      : "hover:text-red-500"
                  }`}
                >
                  ❤️ {curtidas.length}
                </button>

                {(post.autorId === userId ||
                  userId === "Zo09CVTehpVyuHBMsGQT1cXUOJl1") && (
                  <button
                    onClick={() => handleExcluirPost(post.id)}
                    className="text-gray-400 hover:text-red-500 transition text-sm"
                  >
                    🗑️ Excluir
                  </button>
                )}
              </div>

              <div className="mt-3 border-t pt-2">
                {comentariosLista.map((c) => (
                  <p key={c.id} className="text-sm text-gray-700">
                    <strong>
                      {c.autor}
                      {c.autorId === "Zo09CVTehpVyuHBMsGQT1cXUOJl1" && "(Admin)"}:
                    </strong> {c.texto}
                  </p>
                ))}
                <div className="flex items-center mt-2">
                  <input
                    type="text"
                    value={novoComentario[post.id] || ""}
                    onChange={(e) =>
                      setNovoComentario({
                        ...novoComentario,
                        [post.id]: e.target.value,
                      })
                    }
                    placeholder="Adicione um comentário..."
                    className="flex-1 border rounded-full px-3 py-1 text-sm mr-2"
                  />
                  <button
                    onClick={() => handleComentar(post.id)}
                    className="text-blue-500 hover:text-blue-600 text-sm"
                  >
                    Comentar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Comunidade;
