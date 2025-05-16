// CSS
import styles from "./Navinfo.module.css";

// IMG
import Bandeira from "/img/bandeira.jpg";
import Ofensiva from "/img/fogo.jpg";
import Diamante from "/img/diamante.jpg";
import Super from "/img/super.jpg";

// React Router Dom
import { Link } from "react-router-dom";

const Navinfo = () => {
  return (
    <nav className={styles.navinfo}>
      <ul>
        <li>
          <img className={styles.bandeira} src={Bandeira} alt="Bandeira" />
        </li>
        <li className={styles.ofenciva}>
          <img src={Ofensiva} alt="Ofenciva" />
          <span>365</span>
        </li>
        <li>
          <Link to="/store" className={styles.diamante}>
            <img src={Diamante} alt="Diamante" />
            <span>9999</span>
          </Link>
        </li>
        <li>
          <img src={Super} alt="Super Duolingo" />
        </li>
      </ul>
    </nav>
  );
};

export default Navinfo;
