import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import {
  doc,
  collection,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { useNavigate } from "react-router-dom"; // 👉 ADICIONADO

/**
 * Diário sensorial
 * - salva cada dia em: sensores/{uid}/dias/{YYYY-MM-DD}
 */

const HUMORES = [
  { key: "muito_triste", label: "😢 Muito triste" },
  { key: "triste", label: "☹️ Triste" },
  { key: "neutro", label: "😐 Neutro" },
  { key: "feliz", label: "🙂 Feliz" },
  { key: "muito_feliz", label: "😄 Muito feliz" },
];

function hojeString() {
  return new Date().toISOString().split("T")[0];
}

export default function DiarioSensorial() {
  const navigate = useNavigate(); // 👉 ADICIONADO

  const [usuario, setUsuario] = useState(null);
  const [data, setData] = useState(hojeString());
  const [loading, setLoading] = useState(false);
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  // Form state
  const [humor, setHumor] = useState("neutro");
  const [som, setSom] = useState(3);
  const [luz, setLuz] = useState(3);
  const [toque, setToque] = useState(3);
  const [cheiro, setCheiro] = useState(3);
  const [anotacoes, setAnotacoes] = useState("");

  // Monitor auth
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUsuario(u || null);
    });
    return () => unsub();
  }, []);

  // Carregar entrada do dia
  useEffect(() => {
    const carregar = async () => {
      if (!usuario || !data) return;
      setLoading(true);
      setMensagem("");
      try {
        const docRef = doc(db, "sensores", usuario.uid, "dias", data);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const d = snap.data();
          setHumor(d.humor ?? "neutro");
          setSom(d.som ?? 3);
          setLuz(d.luz ?? 3);
          setToque(d.toque ?? 3);
          setCheiro(d.cheiro ?? 3);
          setAnotacoes(d.anotacoes ?? "");
        } else {
          setHumor("neutro");
          setSom(3);
          setLuz(3);
          setToque(3);
          setCheiro(3);
          setAnotacoes("");
        }
      } catch (err) {
        console.error("Erro ao carregar diário:", err);
        setMensagem("Erro ao carregar. Verifique sua conexão.");
      } finally {
        setLoading(false);
      }
    };

    carregar();
  }, [usuario, data]);

  // Salvar
  const salvar = async () => {
    if (!usuario) {
      setMensagem("Faça login para salvar.");
      return;
    }

    setSalvando(true);
    try {
      const docRef = doc(db, "sensores", usuario.uid, "dias", data);
      await setDoc(
        docRef,
        {
          humor,
          som: Number(som),
          luz: Number(luz),
          toque: Number(toque),
          cheiro: Number(cheiro),
          anotacoes: anotacoes.trim(),
          atualizadoEm: serverTimestamp(),
        },
        { merge: true }
      );
      setMensagem("Entrada salva com sucesso ✅");
    } catch (err) {
      console.error(err);
      setMensagem("Erro ao salvar. Tente novamente.");
    } finally {
      setSalvando(false);
      setTimeout(() => setMensagem(""), 4000);
    }
  };

  // Tela sem login
  if (!usuario) {
    return (
      <div className="max-w-3xl mx-auto mt-8 p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Diário Sensorial</h2>
        <p className="text-gray-600">
          Faça login para registrar suas percepções diárias.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-blue-700">
          📔 Diário Sensorial
        </h1>
        <p className="text-gray-600 mt-1">
          Registre o seu dia e acompanhe sua evolução.
        </p>
      </header>

      {/* BOTÃO PARA IR AO GRÁFICO */}
      <button
        onClick={() => navigate("/GraficoSensorialSemanal")}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium mb-6 hover:bg-purple-700 transition shadow"
      >
        📊 Ver gráfico sensorial semanal
      </button>

      {/* Data */}
      <div className="flex gap-3 items-center mb-6 flex-wrap">
        <label className="text-sm text-gray-700">Data:</label>
        <input
          type="date"
          value={data}
          max={hojeString()}
          onChange={(e) => setData(e.target.value)}
          className="p-2 border rounded-lg"
        />

        <button
          onClick={() => setData(hojeString())}
          className="ml-auto bg-gray-100 px-3 py-2 rounded-lg text-sm hover:bg-gray-200"
        >
          Hoje
        </button>
      </div>

      {/* Humores */}
      <section className="bg-white rounded-xl shadow p-5 mb-6">
        <h3 className="font-semibold mb-3 text-gray-800">
          Como você se sentiu hoje?
        </h3>
        <div className="flex gap-3 flex-wrap">
          {HUMORES.map((h) => (
            <button
              key={h.key}
              onClick={() => setHumor(h.key)}
              className={`px-4 py-2 rounded-lg border ${
                humor === h.key
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700"
              }`}
            >
              {h.label}
            </button>
          ))}
        </div>
      </section>

      {/* Sliders */}
      <section className="bg-white rounded-xl shadow p-5 mb-6">
        <h3 className="font-semibold mb-3 text-gray-800">
          Sensibilidade aos estímulos
        </h3>

        <div className="space-y-4">
          {[
            ["Som", som, setSom],
            ["Luz", luz, setLuz],
            ["Toque", toque, setToque],
            ["Cheiro", cheiro, setCheiro],
          ].map(([label, value, setter]) => (
            <div key={label}>
              <label className="text-sm text-gray-700">
                {label}: <span className="font-medium">{value}</span>
              </label>
              <input
                type="range"
                min="0"
                max="5"
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Anotações */}
      <section className="bg-white rounded-xl shadow p-5 mb-6">
        <h3 className="font-semibold mb-3 text-gray-800">Anotações</h3>
        <textarea
          rows={4}
          value={anotacoes}
          onChange={(e) => setAnotacoes(e.target.value)}
          className="w-full p-3 border rounded-lg"
          placeholder="Descreva como foi seu dia..."
        />
      </section>

      {/* Ações */}
      <div className="flex items-center gap-3">
        <button
          onClick={salvar}
          disabled={salvando}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60"
        >
          {salvando ? "Salvando..." : "Salvar entrada"}
        </button>

        <button
          onClick={() => setData(hojeString())}
          className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
        >
          Limpar (novo)
        </button>

        <div className="ml-auto text-sm text-gray-600">
          {loading ? "Carregando..." : ""}
        </div>
      </div>

      {mensagem && (
        <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-800 border border-green-100">
          {mensagem}
        </div>
      )}

      <p className="mt-6 text-xs text-gray-500">
        Preencha diariamente para melhorar o gráfico semanal.
      </p>
    </div>
  );
}
