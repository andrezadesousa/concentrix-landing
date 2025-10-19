import { useEffect } from "react";

const Hero = () => {
  return (
    <section className="hero grid" id="hero">
      <div className="hero__container">
        <div className="hero__titles">
          <h1 className="hero__title">Tenha aqui </h1>
          <h2 className="hero__title">a melhor </h2>
          <h3 className="hero__title">experiência.</h3>
        </div>
        <div className="hero__form">
          <h1 className="hero__form-title">Tipo de perfil</h1>
          <div className="hero__form-buttons">
            <button id="btnPF" className="hero__form-button-default">
              Pessoa Física
            </button>
            <button id="btnPJ" className="hero__form-button">
              Pessoa Jurídica
            </button>
          </div>
          <div className="hero__form-inputs">
            <h1 className="hero__form-title">CPF</h1>
            <input className="hero__form-input" placeholder="000.000.000-00" />
          </div>
          <div className="hero__form-inputs">
            <h1 className="hero__form-title">Data de nascimento</h1>
            <input className="hero__form-input" placeholder="00/00/0000" />
          </div>

          <a href="#" className="hero__button-enter">
            Entrar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
