// IMG
import Duolingo from "/img/duolingo3.png";
import Coracao from "/img/coracao.jpg";
import CoracaoSuper from "/img/coracao-super.jpg";
import Ofenciva from "/img/gelo.jpg";

// CSS
import styles from "./Store.module.css";

// Component
import Navinfo from "../components/Navinfo";

const Store = () => {
  return (
    <div>
      <Navinfo />
      <div className={styles.store_container}>
        <div className={styles.store_header}>
          <img src={Duolingo} alt="Duolingo" />
          <h2>
            Faça um teste grátis de 2 semanas para aproveitar os benefícios
            exclusivos do Super!
          </h2>
          <button>Começar 14 dias grátis</button>
        </div>
        <h3>Vidas</h3>
        <div className={styles.store_contant}>
          <div className={styles.store_img}>
            <img src={Coracao} alt="Coração Vermelho" />
          </div>
          <div className={styles.store_text}>
            <h4>Recuperar vidas</h4>
            <p>
              Recupere todas as suas vidas pra se preocupar menos com os erros
              nas lições.
            </p>
            <button className={styles.btn_disabled} disabled>
              Cheio
            </button>
          </div>
        </div>
        <div className={styles.store_contant}>
          <div className={styles.store_img}>
            <img src={CoracaoSuper} alt="Coração Colorido" />
          </div>
          <div className={styles.store_text}>
            <h4>Vidas ilimitadas</h4>
            <p>Com o Super, voçê nunca fica sem vidas!</p>
            <button className={`${styles.btn_disabled} ${styles.btn_super}`}>
              Testar Grátis
            </button>
          </div>
        </div>
        <h3>Superpoderes</h3>
        <div className={styles.store_contant}>
          <div className={styles.store_img}>
            <img src={Ofenciva} alt="Lagrima Congelada" />
          </div>
          <div className={styles.store_text}>
            <h4>Bloqueio de ofensiva</h4>
            <p>
              Mantenha a sua ofensiva intacta mesmo se você deixar de praticar
              por 24 horas.
            </p>
            <div className={styles.actions}>
              <span>3 Disponíveis</span>
              <button className={styles.btn_disabled} disabled>
                Disponível
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
