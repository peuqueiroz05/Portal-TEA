import React, { useState } from "react";

const quizQuestions = [
  {
    question: "O que é o Transtorno do Espectro Autista (TEA)?",
    options: [
      "Uma doença contagiosa",
      "Uma condição de desenvolvimento que afeta a comunicação e comportamento",
      "Uma deficiência física",
      "Um tipo de distúrbio mental",
    ],
    answer: 1,
  },
  {
    question: "Quais são os níveis de suporte no autismo?",
    options: [
      "Nível 1, Nível 2, Nível 3",
      "Leve, Moderado, Severos",
      "Baixo, Médio, Alto",
      "Nenhum",
    ],
    answer: 0,
  },
  {
    question: "O autismo é mais comum em homens do que em mulheres?",
    options: ["Sim", "Não", "Ambos têm a mesma probabilidade", "Não se sabe"],
    answer: 0,
  },
  {
    question: "Quais são algumas características do autismo?",
    options: [
      "Dificuldades de comunicação e interação social",
      "Hiperatividade",
      "Preferência por atividades físicas",
      "Dificuldade em reconhecer emoções",
    ],
    answer: 0,
  },
];

const TesteAutismo = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (optionIndex) => {
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

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "80vh", // deixa espaço pro header e footer
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

        {quizFinished ? (
          <div>
            <p style={{ fontSize: "18px", color: "#333", marginBottom: "20px" }}>
              Você acertou <strong>{score}</strong> de{" "}
              {quizQuestions.length} perguntas!
            </p>
            <button
              onClick={handleRestart}
              style={{
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
            <p
              style={{
                fontSize: "18px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              <strong>Pergunta {currentQuestionIndex + 1}:</strong>{" "}
              {quizQuestions[currentQuestionIndex].question}
            </p>

            <div>
              {quizQuestions[currentQuestionIndex].options.map(
                (option, index) => (
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
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#7C91F2")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#A5B4FC")
                    }
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TesteAutismo;
