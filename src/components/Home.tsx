import { useEffect, useRef } from "react";
import Negotiation from "../assets/doc.png";
import SecondCopy from "../assets/search.png";
import GrayBox from "../assets/payments.png";

const Home = () => {
  return (
    <section className="home grid" id="home">
      <div className="home_container">
        <div className="home__titles">
          <h1>Benefícios para ajudar</h1>
          <span>você e sua empresa.</span>
        </div>
        <div className="home__content">
          <div className="home__boxes">
            <div className="home__first-box">
              <div className="home__box">
                <h1 className="home__box-title">Negociação</h1>
                <img className="home__box-img" src={Negotiation} />
                <p className="home__box-text">
                  Negociação <br /> rápida e segura.
                </p>
              </div>
              <div className="home__box">
                <h1 className="home__box-title">Segunda via</h1>
                <img className="home__box-img" src={SecondCopy} />
                <p className="home__box-text">
                  Consulta de <br /> débitos em atraso.
                </p>
              </div>
            </div>
            <div className="home__box-gray">
              <div className="home__box-gray-titles">
                <h1>Pagamento</h1>
                <span>
                  Seu pagamento, <br /> como preferir.
                </span>
              </div>
              <img src={GrayBox} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
