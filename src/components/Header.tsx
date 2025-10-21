import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header" id="header">
      <a
        href="https://andreza-sousa.web.app/"
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
