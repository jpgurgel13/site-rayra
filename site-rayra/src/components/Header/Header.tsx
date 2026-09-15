import "./Header.css";
import logoSirenna from "../../assets/sr-terracota.png";
import { useState } from "react";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const fecharMenu = () => setMenuAberto(false);
  return (
    <header>
      <a className="nav-header-titulo" href="#home">
        <img
          className="nav-header-logo"
          src={logoSirenna}
          alt="Sirenna Tattoo"
        />
      </a>
      <button
        className="header-button"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
        aria-expanded={menuAberto}
      >
        ☰
      </button>
      <nav className={`nav-header ${menuAberto ? "menu-aberto" : ""}`}>
        <ul className="nav-header-lista">
          <li className="nav-header-lista-item">
            <a className="nav-header-link" href="#home" onClick={fecharMenu}>
              Home
            </a>
          </li>
          <li className="nav-header-lista-item">
            <a
              className="nav-header-link"
              href="#portfolio"
              onClick={fecharMenu}
            >
              Portfólio
            </a>
          </li>
          <li className="nav-header-lista-item">
            <a className="nav-header-link" href="#about" onClick={fecharMenu}>
              Sobre mim
            </a>
          </li>
          <li className="nav-header-lista-item">
            <a className="nav-header-link" href="#contact" onClick={fecharMenu}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
