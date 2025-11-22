import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const categorias = [
  { id: "rotina", nome: "Rotina" },
  { id: "escola", nome: "Escola" },
  { id: "terapias", nome: "Terapias" },
  { id: "comunicacao", nome: "Comunicação" },
];

export default function QuadroTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("rotina");
  const [usuario, setUsuario] = useState(null);

  // 🔹 Monitorar usuário logado
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      if (u) {
        setUsuario(u);
      } else {
        setUsuario(null);
        setTarefas([]);
      }
    });

    return () => unsub();
  }, []);

  // 🔹 Carregar tarefas do Firestore quando o usuário estiver logado
  useEffect(() => {
    if (!usuario) return;

    const ref = doc(db, "tarefas", usuario.uid);

    const carregar = async () => {
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setTarefas(snap.data().tarefas || []);
      } else {
        // Criar documento vazio
        await setDoc(ref, { tarefas: [] });
      }
    };

    carregar();
  }, [usuario]);

  // 🔹 Salvar no Firestore sempre que tarefas mudar
  useEffect(() => {
    if (!usuario) return;

    const salvar = async () => {
      const ref = doc(db, "tarefas", usuario.uid);
      await updateDoc(ref, { tarefas });
    };

    if (tarefas.length >= 0) salvar();
  }, [tarefas, usuario]);

  // 🔹 Criar nova tarefa
  const adicionarTarefa = () => {
    if (!texto.trim()) return;

    const nova = {
      id: Date.now(),
      texto,
      categoria,
      concluida: false,
    };

    setTarefas([...tarefas, nova]);
    setTexto("");
  };

  // 🔹 Alternar concluído
  const toggleConcluir = (id) => {
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  };

  // 🔹 Remover
  const apagar = (id) => {
    setTarefas(tarefas.filter((t) => t.id !== id));
  };

  // Usuário não logado
  if (!usuario) {
    return (
      <div className="p-6 text-center text-gray-600">
        <h2 className="text-3xl font-bold mb-3">⚠️ Área restrita</h2>
        <p>Faça login para acessar seu quadro de tarefas.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">

      {/* Título principal */}
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">
        🧩 Seu Quadro de Tarefas
      </h1>

      {/* Criar tarefa */}
      <div className="bg-white shadow-lg p-6 rounded-2xl border border-gray-200 flex flex-col md:flex-row gap-4 items-center mb-10">
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="flex-1 p-3 border rounded-xl outline-blue-400"
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="p-3 border rounded-xl"
        >
          {categorias.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nome}
            </option>
          ))}
        </select>

        <button
          onClick={adicionarTarefa}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 duration-200 shadow"
        >
          + Adicionar
        </button>
      </div>

      {/* Listagem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categorias.map((cat) => (
          <div
            key={cat.id}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              {cat.nome}
            </h2>

            {tarefas.filter((t) => t.categoria === cat.id).length === 0 && (
              <p className="text-gray-400 text-sm">Nenhuma tarefa nesta categoria.</p>
            )}

            <ul className="space-y-3">
              {tarefas
                .filter((t) => t.categoria === cat.id)
                .map((t) => (
                  <li
                    key={t.id}
                    className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-xl shadow-sm border border-gray-200 transition"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={t.concluida}
                        onChange={() => toggleConcluir(t.id)}
                        className="h-5 w-5 accent-blue-600"
                      />

                      <span
                        className={`text-lg ${
                          t.concluida
                            ? "line-through text-gray-400"
                            : "text-gray-700"
                        }`}
                      >
                        {t.texto}
                      </span>
                    </div>

                    <button
                      className="text-red-500 hover:text-red-700 duration-150"
                      onClick={() => apagar(t.id)}
                    >
                      ✖
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
