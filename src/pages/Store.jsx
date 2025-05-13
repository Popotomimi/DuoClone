// IMG
import Duolingo from "/img/duolingo3.png";
import Coracao from "/img/coracao.jpg";
import CoracaoSuper from "/img/coracao-super.jpg";
import Ofenciva from "/img/gelo.jpg";

// CSS
import "./Store.css";

const Store = () => {
  return (
    <div className="store-container">
      <div className="store-header">
        <img src={Duolingo} alt="Duolingo" />
        <h2>
          Faça um teste grátis de 2 semanas para aproveitar os benefícios
          exclusivos do Super!
        </h2>
        <button>Começar 14 dias grátis</button>
      </div>
      <h3>Vidas</h3>
      <div className="store-contant">
        <div className="store-img">
          <img src={Coracao} alt="Coração Vermelho" />
        </div>
        <div className="store-text">
          <h4>Recuperar vidas</h4>
          <p>
            Recupere todas as suas vidas pra se preocupar menos com os erros nas
            lições.
          </p>
          <button className="btn-disabled" disabled>
            Cheio
          </button>
        </div>
      </div>
      <div className="store-contant">
        <div className="store-img">
          <img src={CoracaoSuper} alt="Coração Colorido" />
        </div>
        <div className="store-text">
          <h4>Vidas ilimitadas</h4>
          <p>Com o Super, voçê nunca fica sem vidas!</p>
          <button className="btn-disabled btn-super">Testar Grátis</button>
        </div>
      </div>
      <h3>Superpoderes</h3>
      <div className="store-contant">
        <div className="store-img">
          <img src={Ofenciva} alt="Lagrima Congelada" />
        </div>
        <div className="store-text">
          <h4>Bloqueio de ofensiva</h4>
          <p>
            Mantenha a sua ofensiva intacta mesmo se você deixar de praticar por
            24 horas.
          </p>
          <div className="actions">
            <span>3 Disponíveis</span>
            <button className="btn-disabled" disabled>
              Disponível
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
