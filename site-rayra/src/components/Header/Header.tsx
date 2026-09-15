import "./Header.css";
import logoSirenna from "../../assets/sr-terracota.png";

function Header() {
  return (
    <header>
      <a className="nav-header-titulo" href="#home">
        <img
          className="nav-header-logo"
          src={logoSirenna}
          alt="Sirenna Tattoo"
        />
      </a>
      <nav className="nav-header">
        <ul className="nav-header-lista">
          <li className="nav-header-lista-item">
            <a className="nav-header-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-header-lista-item">
            <a className="nav-header-link" href="#portfolio">
              Portfólio
            </a>
          </li>
          <li className="nav-header-lista-item">
            <a className="nav-header-link" href="#about">
              Sobre mim
            </a>
          </li>
          <li className="nav-header-lista-item">
            <a className="nav-header-link" href="#contact">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
