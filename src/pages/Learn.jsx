// Icons
import { FaCheck } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

// IMG
import Duolingo from "/img/duolingo.jpg";
import DuolingoTwo from "/img/duolingo2.jpg";

// CSS
import "./Learn.css";

const Learn = () => {
  return (
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
  );
};

export default Learn;
