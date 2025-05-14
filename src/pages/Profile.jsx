// ICONS
import { FaGear, FaAngleRight } from "react-icons/fa6";

// CSS
import "./Profile.css";

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
      <div className="profile-container">
        <div className="profile-nav">
          <h3>Perfil</h3>
          <FaGear />
        </div>
        <div className="line"></div>
        <div className="profile-header">
          <img src={User} alt="Imagem do usuário" />
          <h2>Your Name</h2>
          <span>Nick Name</span>
          <div className="card-flag">
            <div>
              <p>Por aqui desde "Data"</p>
              <p>25 friends</p>
            </div>
            <div>
              <img src={Bandeira} alt="Bandeira" />
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="update-friends">
          <img src={Festa} alt="Festa" />
        </div>
        <h3>Estatísticas</h3>
        <div className="card-info">
          <div className="ofenciva card">
            <h4>365</h4>
            <p>Dias seguidos</p>
          </div>
          <div className="xp card">
            <h4>99999</h4>
            <p>Total de XP</p>
          </div>
          <div className="div card">
            <h4>Diamante</h4>
            <p>Divisão</p>
          </div>
          <div className="level card">
            <h4>12</h4>
            <p>Pódios</p>
          </div>
        </div>
        <div className="friends-header">
          <h3>Amigos</h3>
          <h3 className="text-blue">Adicionar Amigos</h3>
        </div>
        <div className="friends-list">
          <div className="text-header">
            <h3>Segue</h3>
            <h3>Seguidores</h3>
          </div>
          <div className="friends-card">
            <div>
              <img src={MiniDuolingo} alt="Mini Duolingo" />
            </div>
            <div>
              <h4>Duolingo</h4>
              <span>999 XP</span>
            </div>
          </div>
          <div className="friends-card">
            <div>
              <img src={MiniDuolingo} alt="Mini Duolingo" />
            </div>
            <div>
              <h4>Duolingo</h4>
              <span>999 XP</span>
            </div>
          </div>
          <div className="friends-card">
            <div>
              <img src={MiniDuolingo} alt="Mini Duolingo" />
            </div>
            <div>
              <h4>Duolingo</h4>
              <span>999 XP</span>
            </div>
          </div>
          <div className="fiends-footer">
            <h4>Ver mais 50</h4>
            <FaAngleRight />
          </div>
        </div>
        <div className="invite-friends">
          <div className="header-invite">
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
        <div className="conquistas">
          <div className="conquista-card">
            <div>
              <img src={Conquista1} alt="Conquista 1" />
            </div>
            <div>
              <h3>Lenha na Fogueira</h3>
              <p>Você alcançou uma ofensiva de 365 dias.</p>
            </div>
          </div>
          <div className="conquista-card">
            <div>
              <img src={Conquista2} alt="Conquista 2" />
            </div>
            <div>
              <h3>Sabe tudo</h3>
              <p>Você ganhou 90000 XP</p>
            </div>
          </div>
          <div className="conquista-card">
            <div>
              <img src={Conquista3} alt="Conquista 3" />
            </div>
            <div>
              <h3>Intelectual</h3>
              <p>Você aprendeu 1500 palavras nova no curso.</p>
            </div>
          </div>
          <div className="conquistas-footer">
            <h4>Ver todas</h4>
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
