// IMG
import Super from "/img/superText.jpg";

// CSS
import "./Practice.css";

const Pratice = () => {
  return (
    <div className="practice-container">
      <h3>Revisão de hoje</h3>
      <div className="super-card">
        <img src={Super} alt="Suber IMG" />
        <h3>Relembre a unidade</h3>
        <p>Revise a unidade 1 pra refrescar a memória!</p>
        <button>Desbloquear</button>
      </div>
      <h3>Conversação</h3>
      <div className="song-card">
        <div className="super-card">
          <h3>Fala</h3>
          <img src={Super} alt="Super IMG" />
        </div>
        <p>Melhore a sua fala com essas frases.</p>
      </div>
      <div className="song-card">
        <div className="super-card">
          <h3>Escuta</h3>
          <img src={Super} alt="Super IMG" />
        </div>
        <p>Trabalhe a sua escuta com uma sessão só de áudio.</p>
      </div>
      <h3>Suas coleções</h3>
      <div className="song-card">
        <div className="super-card">
          <h3>Erros</h3>
          <img src={Super} alt="Super IMG" />
        </div>
        <p>Faça uma lição personalizada e revise os seus erros.</p>
      </div>
      <div className="song-card">
        <div className="super-card">
          <h3>Palavras</h3>
          <img src={Super} alt="Super IMG" />
        </div>
        <p>Revise o seu vocabulário de inglês quando quiser.</p>
      </div>
      <div className="song-card">
        <div className="super-card">
          <h3>Histórias</h3>
        </div>
        <p>Releia uma história pra revisar palavras em contexto.</p>
      </div>
    </div>
  );
};

export default Pratice;
