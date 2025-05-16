// IMG
import Super from "/img/superText.png";

// CSS
import styles from "./Practice.module.css";

// Components
import Navinfo from "../components/Navinfo";

const Pratice = () => {
  return (
    <div>
      <Navinfo />
      <div className={styles.practice_container}>
        <h3 className={styles.text_h3}>Revisão de hoje</h3>
        <div className={styles.super_card_first}>
          <img src={Super} alt="Suber IMG" />
          <h3>Escuta só!</h3>
          <p>Treine o ouvido.</p>
          <button>Desbloquear</button>
        </div>
        <h3 className={styles.text_h3}>Conversação</h3>
        <div className={`${styles.song_card} ${styles.micro}`}>
          <div className={styles.super_card}>
            <h3>Fala</h3>
            <img src={Super} alt="Super IMG" />
          </div>
          <p>Melhore a sua fala com essas frases.</p>
        </div>
        <div className={`${styles.song_card} ${styles.phone}`}>
          <div className={styles.super_card}>
            <h3>Escuta</h3>
            <img src={Super} alt="Super IMG" />
          </div>
          <p>Trabalhe a sua escuta com uma sessão só de áudio.</p>
        </div>
        <h3 className={styles.text_h3}>Suas coleções</h3>
        <div className={`${styles.song_card} ${styles.go_and_back}`}>
          <div className={styles.super_card}>
            <h3>Erros</h3>
            <img src={Super} alt="Super IMG" />
          </div>
          <p>Faça uma lição personalizada e revise os seus erros.</p>
        </div>
        <div className={`${styles.song_card} ${styles.carts}`}>
          <div className={styles.super_card}>
            <h3>Palavras</h3>
            <img src={Super} alt="Super IMG" />
          </div>
          <p>Revise o seu vocabulário de inglês quando quiser.</p>
        </div>
        <div className={`${styles.song_card} ${styles.book}`}>
          <div className={styles.super_card}>
            <h3>Histórias</h3>
          </div>
          <p>Releia uma história pra revisar palavras em contexto.</p>
        </div>
      </div>
    </div>
  );
};

export default Pratice;
