import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Comunidade = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      usuario: "João",
      conteudo: "Hoje foi um dia incrível!",
      imagem: null,
      curtidas: 20,
      comentarios: ["Que bom, João!", "Fico feliz por você 😊"],
    },
    {
      id: 2,
      usuario: "Maria",
      conteudo: "Feliz em fazer parte desta comunidade!",
      imagem: null,
      curtidas: 8,
      comentarios: ["Bem-vinda!", "Adoro seus posts 💜"],
    },
  ]);

  const [novoPost, setNovoPost] = useState("");
  const [imagemPreview, setImagemPreview] = useState(null);
  const [novoComentario, setNovoComentario] = useState({});

  const handleCurtir = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, curtidas: post.curtidas + 1 } : post
      )
    );
  };

  const handleImagemUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImagemPreview(URL.createObjectURL(file));
  };

  const handlePostar = () => {
    if (!novoPost.trim() && !imagemPreview) return;

    const novo = {
      id: posts.length + 1,
      usuario: "Você",
      conteudo: novoPost,
      imagem: imagemPreview,
      curtidas: 0,
      comentarios: [],
    };

    setPosts([novo, ...posts]);
    setNovoPost("");
    setImagemPreview(null);
  };

  const handleComentar = (postId) => {
    const texto = novoComentario[postId]?.trim();
    if (!texto) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, comentarios: [...post.comentarios, texto] }
          : post
      )
    );

    setNovoComentario({ ...novoComentario, [postId]: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 via-indigo-50 to-white p-6">
      <motion.h2
        className="text-3xl font-bold text-indigo-700 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        💬 Comunidade
      </motion.h2>

      {/* Área de novo post */}
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-5 w-full max-w-xl mb-8 border border-indigo-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <textarea
          value={novoPost}
          onChange={(e) => setNovoPost(e.target.value)}
          placeholder="Compartilhe algo com a comunidade..."
          className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows={3}
        />
        {imagemPreview && (
          <motion.div
            className="mt-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img
              src={imagemPreview}
              alt="Prévia"
              className="rounded-lg w-full max-h-60 object-cover"
            />
          </motion.div>
        )}
        <div className="flex items-center justify-between mt-3">
          <label className="cursor-pointer text-indigo-600 hover:underline">
            📸 Adicionar imagem
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImagemUpload}
            />
          </label>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handlePostar}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Publicar
          </motion.button>
        </div>
      </motion.div>

      {/* Lista de posts */}
      <div className="w-full max-w-xl flex flex-col gap-6">
        <AnimatePresence>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-2xl shadow-md p-5 border border-indigo-100"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-indigo-700">
                  {post.usuario}
                </h3>
              </div>

              <p className="text-gray-700 mb-3">{post.conteudo}</p>

              {post.imagem && (
                <motion.img
                  src={post.imagem}
                  alt="Post"
                  className="rounded-lg mb-3 w-full max-h-80 object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <motion.button
                  whileTap={{ scale: 1.3 }}
                  onClick={() => handleCurtir(post.id)}
                  className="flex items-center gap-1 text-indigo-600 font-medium hover:text-indigo-800"
                >
                  👍 Curtir
                </motion.button>
                <span>{post.curtidas} curtidas</span>
                <span>{post.comentarios.length} comentários</span>
              </div>

              {/* Comentários */}
              <motion.div
                className="mt-3 bg-indigo-50 rounded-lg p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <AnimatePresence>
                  {post.comentarios.length > 0 ? (
                    post.comentarios.map((comentario, i) => (
                      <motion.p
                        key={i}
                        className="text-sm text-gray-700 mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        💬 {comentario}
                      </motion.p>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 italic">
                      Nenhum comentário ainda...
                    </p>
                  )}
                </AnimatePresence>

                <div className="flex mt-3 gap-2">
                  <input
                    type="text"
                    value={novoComentario[post.id] || ""}
                    onChange={(e) =>
                      setNovoComentario({
                        ...novoComentario,
                        [post.id]: e.target.value,
                      })
                    }
                    placeholder="Escreva um comentário..."
                    className="flex-1 border border-indigo-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleComentar(post.id)}
                    className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-700"
                  >
                    Enviar
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Comunidade;