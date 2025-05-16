// Icons
import { FaCheck } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { LuNotebookText } from "react-icons/lu";

// Components
import Navinfo from "../components/Navinfo";

// IMG
import Duolingo from "/img/duolingo.jpg";
import DuolingoTwo from "/img/duolingo2.jpg";

// CSS
import styles from "./Learn.module.css";

const Learn = () => {
  return (
    <div>
      <Navinfo />
      <div className={`${styles.sections} ${styles.fixed_sections}`}>
        <div className={styles.section_text}>
          <h3>Seção 1, Unidade 1</h3>
          <p>Faça pedido em um café</p>
        </div>
        <div className={styles.section_icon}>
          <LuNotebookText />
        </div>
      </div>
      <div className={styles.learn_container}>
        <img
          src={DuolingoTwo}
          className={`${styles.side_image} ${styles.left}`}
          alt="Duolingo"
        />
        <div className={styles.buttons}>
          <button>
            <GiOpenBook />
          </button>
          <button>
            <FaCheck />
          </button>
          <button>
            <GiOpenBook />
          </button>
          <button>
            <FaCheck />
          </button>
          <button>
            <GiOpenBook />
          </button>
          <button>
            <FaCheck />
          </button>
          <button>
            <GiOpenBook />
          </button>
          <button>
            <FaCheck />
          </button>
          <button>
            <GiOpenBook />
          </button>
        </div>
        <img
          src={Duolingo}
          className={`${styles.side_image} ${styles.right}`}
          alt="Duolingo"
        />
      </div>
    </div>
  );
};

export default Learn;
