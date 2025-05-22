// CSS
import styles from "./Leagues.module.css";

// IMG
import Ligas from "/img/ligas.jpg";
import Primeiro from "/img/primeiro.jpg";
import Segundo from "/img/segundo.jpg";
import Terceiro from "/img/terceiro.jpg";

// ICONS
import { TbArrowBigDownFilled, TbArrowBigUpFilled } from "react-icons/tb";

const Leagues = () => {
  return (
    <div>
      <div className={styles.leagues_header}>
        <img src={Ligas} alt="Ligas" />
        <h2>Divisão Ametista</h2>
        <h4>Os 4 primeiros avançam pra próxima divisão.</h4>
        <p>4 dias</p>
      </div>
      <div className={styles.leagues_container}>
        <div className={styles.first_list}>
          <ul>
            <li>
              <div className={styles.img}>
                <img src={Primeiro} alt="Primeiro" />
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>774 XP</h3>
              </div>
            </li>
            <li>
              <div className={styles.img}>
                <img src={Segundo} alt="Segundo" />
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>674 XP</h3>
              </div>
            </li>
            <li>
              <div className={styles.img}>
                <img src={Terceiro} alt="Terceiro" />
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>574 XP</h3>
              </div>
            </li>
            <li>
              <div className={styles.img}>
                <p>4</p>
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>474 XP</h3>
              </div>
            </li>
            <div className={styles.go_up}>
              <TbArrowBigUpFilled />
              <h3>Zona de Promoção</h3>
              <TbArrowBigUpFilled />
            </div>
            <li>
              <div className={styles.img}>
                <p>5</p>
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>374 XP</h3>
              </div>
            </li>
            <li>
              <div className={styles.img}>
                <p>6</p>
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>274 XP</h3>
              </div>
            </li>
            <li>
              <div className={styles.img}>
                <p>7</p>
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>174 XP</h3>
              </div>
            </li>
            <li>
              <div className={styles.img}>
                <p>8</p>
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>144 XP</h3>
              </div>
            </li>
            <div className={styles.go_down}>
              <TbArrowBigDownFilled />
              <h3>Zona de Rebaixamento</h3>
              <TbArrowBigDownFilled />
            </div>
            <li>
              <div className={styles.img}>
                <p>9</p>
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>134 XP</h3>
              </div>
            </li>
            <li>
              <div className={styles.img}>
                <p>10</p>
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>124 XP</h3>
              </div>
            </li>
            <li>
              <div className={styles.img}>
                <p>11</p>
              </div>
              <div className={styles.text}>
                <span>D</span>
                <h3>Duolingo</h3>
              </div>
              <div className={styles.xp}>
                <h3>114 XP</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leagues;
