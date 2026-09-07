import "./Header.css";
function Header() {
  return (
    <header>
      <h2 className="nav-header-titulo">SIRENNA</h2>
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
