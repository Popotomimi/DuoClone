// CSS
import "./Navinfo.css";

// IMG
import Bandeira from "/img/bandeira.jpg";
import Ofenciva from "/img/fogo.jpg";
import Diamante from "/img/diamante.jpg";
import Super from "/img/super.jpg";

const Navinfo = () => {
  return (
    <nav className="navinfo">
      <ul>
        <li>
          <img className="bandeira" src={Bandeira} alt="Bandeira" />
        </li>
        <li className="ofenciva">
          <img src={Ofenciva} alt="Ofenciva" />
          <span>365</span>
        </li>
        <li className="diamante">
          <img src={Diamante} alt="Diamante" />
          <span>9999</span>
        </li>
        <li>
          <img src={Super} alt="Super Duolingo" />
        </li>
      </ul>
    </nav>
  );
};

export default Navinfo;
