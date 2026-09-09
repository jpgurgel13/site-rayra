import Divider from "../../components/Divider/Divider";
import "./About.css";
import fotoRayra from "../../assets/Rayra-photo-alternative.jpg";
function About() {
  return (
    <section className="about-container" id="about">
      <h2 className="about-titulo">Sobre mim!</h2>
      <Divider />
      <div className="about-content">
        <img
          className="about-foto"
          src={fotoRayra}
          alt="Foto da Rayra,tatuadora"
        />

        <p className="about-texto">
          Olá! Sou a Rayra, uma tatuadora apaixonada por transformar ideias em
          arte na pele. Com um estilo único que combina Fine Line, botânica e
          ilustração, busco criar tatuagens leves, delicadas e cheias de
          significado. Cada traço é pensado para contar uma história e
          transmitir emoções.
        </p>
      </div>
    </section>
  );
}

export default About;
