// CSS
import styles from "./Missions.module.css";

// ICONS
import { TbClockHour10 } from "react-icons/tb";

// IMG
import MissionsImg from "/img/missions-img.jpg";
import Bau from "/img/bau-missions.jpg";
import Raio from "/img/raio.jpg";
import Relogio from "/img/relogio.jpg";
import Alvo from "/img/alvo.jpg";
import MiniDuolingo from "/img/mini-duolingo.jpg";

const Missions = () => {
  return (
    <div>
      <div className={styles.missions_header}>
        <div className={styles.missions_top}>
          <h3>Missoes</h3>
          <h3>Medalhas</h3>
        </div>
        <div className={styles.missions_title}>
          <h3 className={styles.month}>Maio</h3>
          <h2>A Trilha Desafiadora da Bia</h2>
          <span>
            <TbClockHour10 />
            12 Dias
          </span>
        </div>
        <div className={styles.missions_bottom}>
          <h3>Desafio concluido!</h3>
          <img src={MissionsImg} alt="Imagem da Missão" />
        </div>
      </div>
      <div className={styles.missions_container}>
        <div className={styles.missions_day}>
          <h3>Missões do dia</h3>
          <h2>
            <TbClockHour10 /> 4 horas{" "}
          </h2>
        </div>
        <div className={styles.card_missions}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={Raio} alt="Raio" />
            </div>
            <div>
              <h4>Ganhe 50 XP</h4>
              <img src={Bau} alt="Bau" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={Relogio} alt="Relogio" />
            </div>
            <div>
              <h4>Ganhe 50 XP</h4>
              <img src={Bau} alt="Bau" />
            </div>
          </div>
          <div className={styles.card_bottom}>
            <div className={styles.icon}>
              <img src={Alvo} alt="Alvo" />
            </div>
            <div>
              <h4>Ganhe 50 XP</h4>
              <img src={Bau} alt="Bau" />
            </div>
          </div>
        </div>
        <div className={styles.missions_footer_top}>
          <h3>Missão dos Amigos</h3>
          <h2>
            <TbClockHour10 /> 5 horas{" "}
          </h2>
        </div>
        <div className={styles.missions_footer}>
          <div className={styles.footer_top}>
            <h4>Ganhe 50 XP</h4>
            <img src={MissionsImg} alt="Imagem da Missão" />
          </div>
          <div className={styles.footer_bottom}>
            <div className={`${styles.footer_card} ${styles.footer_card1}`}>
              <img src={MiniDuolingo} alt="Mini Duolingo" />
              <p>Você</p>
              <span>25 XP</span>
            </div>
            <div className={styles.footer_card}>
              <img src={MiniDuolingo} alt="Mini Duolingo" />
              <p>Duolingo</p>
              <span>25 XP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
