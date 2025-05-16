// CSS
import styles from "./Songs.module.css";

// Components
import Navinfo from "../components/Navinfo";

const Songs = () => {
  return (
    <div>
      <Navinfo />
      <div className={styles.songs_container}>
        <div className={styles.songs_header}>
          <h2>Vamos aprender os sons em inglês.</h2>
          <p>Treine o seu ouvido e aprenda a pronunciar os sons do inglês.</p>
          <button className={styles.btn_start}>começar +10 xp</button>
        </div>
        <div className={styles.line_container}>
          <div className={styles.line}></div>
          <div className={styles.text}>Vogais</div>
        </div>
        <div className={styles.vowels}>
          {[
            ["a", "hot"],
            ["ae", "cat"],
            ["A", "but"],
            ["E", "bed"],
            ["ei", "say"],
            ["é", "bird"],
            ["I", "ship"],
            ["i", "sheep"],
            ["e", "about"],
            ["ou", "boat"],
            ["u", "foot"],
            ["U", "food"],
            ["au", "cow"],
            ["ai", "time"],
            ["CI", "boy"],
          ].map(([symbol, example], index) => (
            <div key={index} className={styles.card_yellow}>
              <p>{symbol}</p>
              <p>{example}</p>
              <div className={styles.yellow}></div>
            </div>
          ))}
        </div>
        <div className={styles.line_container}>
          <div className={styles.line}></div>
          <div className={styles.text}>Consoantes</div>
        </div>
        <div className={styles.vowels}>
          {[
            ["a", "hot"],
            ["ae", "cat"],
            ["A", "but"],
            ["E", "bed"],
            ["ei", "say"],
            ["é", "bird"],
            ["I", "ship"],
            ["i", "sheep"],
            ["e", "about"],
            ["ou", "boat"],
            ["u", "foot"],
            ["U", "food"],
            ["au", "cow"],
            ["ai", "time"],
            ["CI", "boy"],
          ].map(([symbol, example], index) => (
            <div key={index} className={styles.card_yellow}>
              <p>{symbol}</p>
              <p>{example}</p>
              <div className={styles.yellow}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
