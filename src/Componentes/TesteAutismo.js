import React, { useState } from "react";

const quizQuestions = [
  {
    question: "O que é o Transtorno do Espectro Autista (TEA)?",
    options: [
      "Uma condição de desenvolvimento que afeta comunicação e comportamento",
      "Uma doença contagiosa",
      "Uma deficiência física",
      "Um transtorno temporário",
    ],
    answer: 0,
  },
  {
    question: "Qual das seguintes atitudes pode ajudar a apoiar uma pessoa com Transtorno do Espectro Autista?",
    options: [
      "Respeitar seu ritmo, oferecer previsibilidade e comunicação clara.",
      "Ignorar suas dificuldades para que ela “se acostume” com situações sociais.",
      "Forçar mudanças rápidas em sua rotina sem aviso prévio.",
      "Evitar qualquer interação para não causar desconforto",
    ],
    answer: 0,
  },
  {
    question: "O autismo é mais comum em:",
    options: ["Homens", "Mulheres", "Afeta igualmente", "Não se sabe"],
    answer: 0,
  },
  {
    question: "Qual dessas características pode aparecer no autismo?",
    options: [
      "Interesses intensos por assuntos específicos",
      "Fortes preferências por rotinas",
      "Dificuldades sociais",
      "Todas as alternativas acima",
    ],
    answer: 3,
  },
  {
    question: "O autismo tem cura?",
    options: [
      "Sim",
      "Não, mas existem terapias que auxiliam no desenvolvimento",
      "Depende do caso",
      "Somente em crianças",
    ],
    answer: 1,
  },
  {
    question: "Qual profissional pode fazer o diagnóstico de TEA?",
    options: [
      "Apenas psicólogo",
      "Apenas neurologista",
      "Apenas psiquiatra",
      "Psiquiatra, Neurologista ou Pediatra especializado",
    ],
    answer: 3,
  },
  {
    question: "Qual é a principal abordagem terapêutica recomendada?",
    options: [
      "ABA – Análise do Comportamento Aplicada",
      "Terapia baseada apenas em remédios",
      "Hipnose",
      "Nenhuma terapia é recomendada",
    ],
    answer: 0,
  },
  {
    question: "O autismo acompanha a pessoa por toda a vida?",
    options: [
      "Sim",
      "Não",
      "Depende do tratamento",
      "Somente até a adolescência",
    ],
    answer: 0,
  },
  {
    question: "Pessoas autistas podem ter excelente desempenho em áreas específicas?",
    options: ["Sim", "Não", "Nunca", "Apenas se treinadas"],
    answer: 0,
  },
  {
    question: "O TEA é considerado:",
    options: [
      "Um transtorno do neurodesenvolvimento",
      "Um transtorno psicológico leve",
      "Resultado de criação dos pais",
      "Um comportamento inadequado",
    ],
    answer: 0,
  },
];

const TesteAutismo = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]); // guarda todas as respostas do usuário

  // Quando a pessoa responde:
  const handleAnswer = (optionIndex) => {
    const newAnswers = [...userAnswers, optionIndex];
    setUserAnswers(newAnswers);

    if (optionIndex === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setQuizFinished(true);
    }
  };

  // Reinicia o quiz
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    setUserAnswers([]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "80vh",
        padding: "50px 0",
        background: "linear-gradient(135deg, #d7e9ff 0%, #f1e4ff 100%)",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#5A5BA0",
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          🧩 Teste de Conhecimento sobre o Autismo
        </h2>

        {/* Se o quiz terminou */}
        {quizFinished ? (
          <div>
            <p style={{ fontSize: "18px", color: "#333", marginBottom: "20px" }}>
              Você acertou <strong>{score}</strong> de {quizQuestions.length} perguntas!
            </p>

            {/* Mostra as perguntas erradas */}
            <div style={{ textAlign: "left", marginTop: "30px" }}>
              <h3 style={{ color: "#5A5BA0", marginBottom: "10px" }}>Respostas incorretas:</h3>
              {quizQuestions.map((q, index) => {
                const userAnswer = userAnswers[index];
                if (userAnswer !== q.answer) {
                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "#ffe5e5",
                        padding: "10px",
                        borderRadius: "8px",
                        marginBottom: "10px",
                        border: "1px solid #ffcccc",
                      }}
                    >
                      <p style={{ fontWeight: "bold" }}>{q.question}</p>
                      <p style={{ color: "#d33" }}>❌ Sua resposta: {q.options[userAnswer]}</p>
                      <p style={{ color: "green" }}>✅ Correta: {q.options[q.answer]}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            <button
              onClick={handleRestart}
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                backgroundColor: "#8EA7E9",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              🔁 Reiniciar Quiz
            </button>
          </div>
        ) : (
          <div>
            <p style={{ fontSize: "18px", color: "#333", marginBottom: "20px" }}>
              <strong>Pergunta {currentQuestionIndex + 1}:</strong>{" "}
              {quizQuestions[currentQuestionIndex].question}
            </p>

            {/* Botões das alternativas */}
            <div>
              {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  style={{
                    display: "block",
                    margin: "10px auto",
                    padding: "12px",
                    backgroundColor: "#A5B4FC",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    width: "100%",
                    maxWidth: "350px",
                    cursor: "pointer",
                    fontSize: "15px",
                    transition: "0.2s",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#7C91F2")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#A5B4FC")}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TesteAutismo;
