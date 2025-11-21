// src/components/TextoSimplificado.jsx
import React, { useState } from "react";

export default function TextoSimplificado({ original, simplified }) {
  const [showSimple, setShowSimple] = useState(false);

  return (
    <div className="prose max-w-none">
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={() => setShowSimple(s => !s)}
          className="px-3 py-1 rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-pressed={showSimple}
          aria-label="Alternar texto simplificado"
        >
          {showSimple ? "Mostrar texto completo" : "Mostrar texto simplificado"}
        </button>
        <span className="text-sm text-gray-500">Versão de leitura fácil</span>
      </div>

      <article aria-live="polite">
        {showSimple ? (
          <div className="bg-gray-50 p-4 rounded-md text-base leading-7">
            {simplified}
          </div>
        ) : (
          <div className="p-0 text-base leading-7">{original}</div>
        )}
      </article>
    </div>
  );
}
