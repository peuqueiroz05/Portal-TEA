// src/components/TTSPlayer.jsx
import React, { useEffect, useState, useRef } from "react";

export default function TTSPlayer({ text }) {
  const [voices, setVoices] = useState([]);
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [rate, setRate] = useState(1);
  const utterRef = useRef(null);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    function loadVoices() {
      const v = synth.getVoices();
      setVoices(v);
    }
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  function speak() {
    if (!text) return;
    stop();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = rate;
    if (voices.length > 0) utter.voice = voices[voiceIndex];
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utter);
    utterRef.current = utter;
    setSpeaking(true);
  }

  function pause() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setSpeaking(false);
    }
  }
  function resume() {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setSpeaking(true);
    }
  }
  function stop() {
    window.speechSynthesis.cancel();
    utterRef.current = null;
    setSpeaking(false);
  }

  return (
    <div className="p-3 border rounded-md flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <button onClick={speak} className="px-3 py-1 rounded bg-indigo-600 text-white">Play</button>
        <button onClick={pause} className="px-2 py-1 rounded border">Pausar</button>
        <button onClick={resume} className="px-2 py-1 rounded border">Continuar</button>
        <button onClick={stop} className="px-2 py-1 rounded border">Parar</button>
        <span className="ml-auto text-sm text-gray-600">{speaking ? "Lendo..." : "Parado"}</span>
      </div>

      <div className="flex gap-2 items-center">
        <label className="text-sm">Velocidade</label>
        <input type="range" min="0.6" max="1.6" step="0.1" value={rate}
               onChange={e => setRate(Number(e.target.value))} />
        <span className="text-sm">{rate}x</span>
      </div>

      <div className="flex gap-2 items-center">
        <label className="text-sm">Voz</label>
        <select value={voiceIndex} onChange={e => setVoiceIndex(Number(e.target.value))}
                className="rounded border px-2 py-1">
          {voices.map((v, i) => <option key={v.name + i} value={i}>{v.name} — {v.lang}</option>)}
        </select>
      </div>
    </div>
  );
}
