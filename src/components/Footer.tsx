import React from "react";
import Toggle from "../assets/toggle.png";
import FooterUs from "../assets/footer-us.png";
import FooterPayment from "../assets/footer-payment.png";
import FooterRights from "../assets/rights.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__toggle">
          <img src={Toggle} />
          <div className="footer__line"></div>
        </div>
        <div className="footer__content">
          <div className="footer__about">
            <span className="footer__span">Sobre</span>
            <a href="https://www.concentrix.com/pt-br/brasil/" target="_blank">
              Quem somos
            </a>
            <a href="https://andreza-sousa.web.app/" target="_blank">
              Política de privacidade
            </a>
          </div>
          <div className="footer__us">
            <span className="footer__span">Fale com a gente</span>
            <img src={FooterUs} />
          </div>
          <div className="footer__payment">
            <span className="footer__span">Formas de pagamento</span>
            <img src={FooterPayment} />
          </div>
        </div>
        <div className="footer__rights">
          <h1>© 2025. Todos direitos reservados à Webhelp</h1>
          <img src={FooterRights} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
