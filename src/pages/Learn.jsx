// Icons
import { FaCheck } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { LuNotebookText } from "react-icons/lu";

// IMG
import Duolingo from "/img/duolingo.jpg";
import DuolingoTwo from "/img/duolingo2.jpg";

// CSS
import "./Learn.css";

const Learn = () => {
  return (
    <div>
      <div className="sections fixed-sections">
        <div className="section-text">
          <h3>Seção 1, Unidade 1</h3>
          <p>Faça pedido em um café</p>
        </div>
        <div className="section-icon">
          <LuNotebookText />
        </div>
      </div>
      <div className="learn-container">
        <img src={DuolingoTwo} className="side-image left" alt="Duolingo" />
        <div className="buttons">
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
        <img src={Duolingo} className="side-image right" alt="Duolingo" />
      </div>
    </div>
  );
};

export default Learn;
