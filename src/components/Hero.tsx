import { useEffect } from "react";

const Hero = () => {
  return (
    <section className="home grid " id="home">
      <div className="home__container">
        <div className="home__titles">
          <h1 className="home__title">Tenha aqui </h1>
          <h2 className="home__title">a melhor </h2>
          <h3 className="home__title">experiência.</h3>
        </div>
        <div className="home__form">
          <h1 className="home__form-title">Tipo de perfil</h1>
          <div className="home__form-buttons">
            <button id="btnPF" className="home__form-button-default">
              Pessoa Física
            </button>
            <button id="btnPJ" className="home__form-button">
              Pessoa Jurídica
            </button>
          </div>
          <div className="home__form-inputs">
            <h1 className="home__form-title">CPF</h1>
            <input className="home__form-input" placeholder="000.000.000-00" />
          </div>
          <div className="home__form-inputs">
            <h1 className="home__form-title">Data de nascimento</h1>
            <input className="home__form-input" placeholder="00/00/0000" />
          </div>

          <a href="#" className="home__button-enter">
            Entrar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
