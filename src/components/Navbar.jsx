// React Router Dom
import { Link, useLocation } from "react-router-dom";

// IMG
import Home from "/img/casa.jpg";
import Songs from "/img/boca.jpg";
import Leagues from "/img/escudo.jpg";
import Profile from "/img/menina.jpg";
import Practice from "/img/peso.jpg";
import Missions from "/img/bau.jpg";

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={location.pathname === "/" ? styles.active : ""}>
          <Link to="/">
            <img src={Home} alt="Home" />
          </Link>
        </li>
        <li
          className={location.pathname === "/characters" ? styles.active : ""}>
          <Link to="/characters">
            <img src={Songs} alt="Songs" />
          </Link>
        </li>
        <li className={location.pathname === "/practice" ? styles.active : ""}>
          <Link to="/practice">
            <img src={Practice} alt="Practice" />
          </Link>
        </li>
        <li className={location.pathname === "/leagues" ? styles.active : ""}>
          <Link to="/leagues">
            <img src={Leagues} alt="Leagues" />
          </Link>
        </li>
        <li className={location.pathname === "/missions" ? styles.active : ""}>
          <Link to="/missions">
            <img src={Missions} alt="Missions" />
          </Link>
        </li>
        <li className={location.pathname === "/profile" ? styles.active : ""}>
          <Link to="/profile">
            <img src={Profile} alt="Profile" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
