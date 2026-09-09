import "./Home.css";
function Home() {
  return (
    <section className="container-home" id="home">
      <h1 className="home-titulo">
        <span className="decorativo" aria-hidden="true">
          ✶
        </span>{" "}
        SIRENNA{" "}
        <span className="decorativo" aria-hidden="true">
          {" "}
          ✶
        </span>
      </h1>
      <p className="home-texto">
        Fine Line{" "}
        <span className="decorativo" aria-hidden="true">
          •
        </span>{" "}
        Botanic Tattoo{" "}
        <span className="decorativo" aria-hidden="true">
          •
        </span>{" "}
        Ilustração
      </p>
      <p className="home-texto">A arte é a cura do caos.</p>
      <p className="home-texto">
        <span className="decorativo" aria-hidden="true">
          ↓{" "}
        </span>
        Conheça meu trabalho.
      </p>
    </section>
  );
}
export default Home;
