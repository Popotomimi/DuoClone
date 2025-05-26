import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import perguntas from "../db/questions.json";
import styles from "./Quiz.module.css";

// IMG
import Tiozinho from "/img/tiozinho.jpg";
import Tiozinho2 from "/img/tiozinho2.jpg";
import Menino from "/img/menino.jpg";
import Coracao from "/img/coracao.jpg";

// ICONS
import { IoMdClose } from "react-icons/io";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const perguntaAtual = perguntas.find((p) => p.id === parseInt(id));
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [acertou, setAcertou] = useState(false);
  const [imagemAleatoria, setImagemAleatoria] = useState(null);

  const imagens = [Tiozinho, Tiozinho2, Menino];

  useEffect(() => {
    const imagemSelecionada =
      imagens[Math.floor(Math.random() * imagens.length)];
    setImagemAleatoria(imagemSelecionada);
  }, []);

  if (!perguntaAtual) {
    return <p>Pergunta não encontrada!</p>;
  }

  const verificarResposta = () => {
    setAcertou(respostaSelecionada === perguntaAtual.correta);
    setMostrarResultado(true);
  };

  return (
    <div>
      <div className={styles.quiz_header}>
        <IoMdClose onClick={() => navigate("/")} />
        <div className={styles.line}></div>
        <img src={Coracao} alt="Coração" />
      </div>
      <div className={styles.quizContainer}>
        <h3>Responda a pergunta:</h3>
        <div className={styles.questions}>
          <img src={imagemAleatoria} alt="Imagem aleatória" />
          <div className={styles.question}>
            <h3>{perguntaAtual.pergunta}</h3>
          </div>
        </div>
        <div className={styles.respostas}>
          {perguntaAtual.respostas.map((resposta, index) => (
            <button
              key={index}
              className={
                respostaSelecionada === resposta ? styles.selected : ""
              }
              onClick={() => setRespostaSelecionada(resposta)}>
              {resposta}
            </button>
          ))}
        </div>
        <button
          onClick={verificarResposta}
          disabled={!respostaSelecionada}
          className={!respostaSelecionada ? styles.disabled : ""}>
          Verificar
        </button>

        {mostrarResultado && (
          <div className={styles.resultado}>
            <h3>
              {acertou
                ? "Parabéns! Você acertou! 🎉"
                : "Ops! Tente novamente! ❌"}
            </h3>
            <button onClick={() => navigate("/")}>Voltar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
