import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const diasSemana = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

export default function GraficoSensorialSemanal() {
  const [usuario, setUsuario] = useState(null);
  const [dados, setDados] = useState([]);

  // 🔹 Monitorar usuário logado
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      if (u) {
        setUsuario(u);
        carregarDados(u.uid);
      } else {
        setUsuario(null);
        setDados([]);
      }
    });

    return () => unsub();
  }, []);

  // 🔹 Carregar gráfico do Firestore
  const carregarDados = async (uid) => {
    const ref = doc(db, "dadosSensorial", uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      setDados(snap.data().dias || []);
    } else {
      // Criar documento vazio
      await setDoc(ref, { dias: [] });
    }
  };

  // 🔹 Exibir mensagem caso não esteja logado
  if (!usuario) {
    return (
      <div className="p-6 text-center text-gray-600">
        <h2 className="text-2xl font-bold mb-3">⚠️ Área restrita</h2>
        <p>Faça login para visualizar seu gráfico sensorial semanal.</p>
      </div>
    );
  }

  // 🔹 Se não existir dados suficientes ainda
  if (dados.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">
        <h2 className="text-2xl font-bold mb-3">📊 Gráfico Sensorial</h2>
        <p>Ainda não há dados suficientes para gerar o gráfico.</p>
        <p className="text-sm text-gray-400 mt-2">
          Preencha seu Diário Sensorial para começar a gerar o gráfico!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        📈 Gráfico Sensorial Semanal
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Este gráfico mostra como você vem se sentindo durante a semana.
      </p>

      {/* 🔹 Gráfico */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dia" />
          <YAxis domain={[1, 5]} />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="sensibilidade"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="energia"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="emocional"
            stroke="#f43f5e"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Legenda manual */}
      <div className="flex justify-center gap-6 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-500 block rounded"></span>
          Sensibilidade
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-500 block rounded"></span>
          Energia
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 block rounded"></span>
          Estado Emocional
        </div>
      </div>
    </div>
  );
}
