// ICONS
import { FaGear, FaAngleRight } from "react-icons/fa6";

// CSS
import styles from "./Profile.module.css";

// IMGS
import User from "/img/user.jpg";
import Bandeira from "/img/bandeira.jpg";
import Festa from "/img/festa.jpg";
import Conquista1 from "/img/conquista1.jpg";
import Conquista2 from "/img/conquista2.jpg";
import Conquista3 from "/img/conquista3.jpg";
import MiniDuolingo from "/img/mini-duolingo.jpg";

const Profile = () => {
  return (
    <div>
      <div className={styles.profile_container}>
        <div className={styles.profile_nav}>
          <p></p>
          <h3>Perfil</h3>
          <FaGear />
        </div>
        <div className={styles.profile_header}>
          <img src={User} alt="Imagem do usuário" />
          <h2>Roberto de Oliveira</h2>
          <span>Popotomimi</span>
          <div className={styles.card_flag}>
            <div>
              <p>Por aqui desde março de 2024</p>
              <span>25 amigos</span>
            </div>
            <div>
              <img src={Bandeira} alt="Bandeira" />
            </div>
          </div>
        </div>
        <div className={styles.update_friends}>
          <img src={Festa} alt="Festa" />
          <h3>Atualização de amigos</h3>
          <FaAngleRight />
        </div>
        <h3>Estatísticas</h3>
        <div className={styles.card_info}>
          <div className={`${styles.ofenciva} ${styles.card}`}>
            <h4>365</h4>
            <p>Dias seguidos</p>
          </div>
          <div className={`${styles.xp} ${styles.card}`}>
            <h4>99999</h4>
            <p>Total de XP</p>
          </div>
          <div className={`${styles.div} ${styles.card}`}>
            <h4>Diamante</h4>
            <p>Divisão</p>
          </div>
          <div className={`${styles.level} ${styles.card}`}>
            <h4>12</h4>
            <p>Pódios</p>
          </div>
        </div>
        <div className={styles.friends_header}>
          <h3>Amigos</h3>
          <h3 className={styles.text_blue}>Adicionar Amigos</h3>
        </div>
        <div className={styles.friends_list}>
          <div className={styles.text_header}>
            <h3>Segue</h3>
            <h3>Seguidores</h3>
          </div>
          <div className={styles.friends_card}>
            <div>
              <img src={MiniDuolingo} alt="Mini Duolingo" />
            </div>
            <div className={styles.friends_card_info}>
              <h4>Duolingo</h4>
              <span>999 XP</span>
            </div>
          </div>
          <div className={styles.friends_card}>
            <div>
              <img src={MiniDuolingo} alt="Mini Duolingo" />
            </div>
            <div className={styles.friends_card_info}>
              <h4>Duolinga</h4>
              <span>9999 XP</span>
            </div>
          </div>
          <div className={styles.friends_card}>
            <div>
              <img src={MiniDuolingo} alt="Mini Duolingo" />
            </div>
            <div className={styles.friends_card_info}>
              <h4>Duolinge</h4>
              <span>99910 XP</span>
            </div>
          </div>
          <div className={styles.friends_footer}>
            <h4>Ver mais 50</h4>
            <FaAngleRight />
          </div>
        </div>
        <div className={styles.invite_friends}>
          <div className={styles.header_invite}>
            <div>
              <img src={MiniDuolingo} alt="Mini Duolingo" />
            </div>
            <div>
              <h4>Convidar amigos</h4>
              <p>
                Conte pra todo mundo que aprender um idioma no Duolingo é grátis
                e divertido!
              </p>
            </div>
          </div>
          <button>Convidar Amigos</button>
        </div>
        <h3>Conquistas</h3>
        <div className={styles.conquistas}>
          <div className={styles.conquista_card}>
            <div>
              <img src={Conquista1} alt="Conquista 1" />
            </div>
            <div>
              <h3>Lenha na Fogueira</h3>
              <p>Você alcançou uma ofensiva de 365 dias.</p>
            </div>
          </div>
          <div className={styles.conquista_card}>
            <div>
              <img src={Conquista2} alt="Conquista 2" />
            </div>
            <div>
              <h3>Sabe tudo</h3>
              <p>Você ganhou 90000 XP em 365 dias no curso.</p>
            </div>
          </div>
          <div className={styles.conquista_card}>
            <div>
              <img src={Conquista3} alt="Conquista 3" />
            </div>
            <div>
              <h3>Intelectual</h3>
              <p>Você aprendeu 1500 palavras nova no curso.</p>
            </div>
          </div>
          <div className={styles.conquistas_footer}>
            <h4>Ver todas</h4>
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
