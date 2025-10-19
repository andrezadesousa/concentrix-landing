import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header" id="header">
      <a
        href="https://www.concentrix.com/pt-br/brasil/"
        target="_blank"
        rel="noreferrer"
        className="nav__logo"
      >
        <img src={Logo} alt="Logo da Header" className="nav__logo-img" />
      </a>
    </header>
  );
};

export default Header;
