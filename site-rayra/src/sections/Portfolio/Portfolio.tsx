import "./Portfolio.css";
import Divider from "../../components/Divider/Divider";
import TattooCards from "../../components/TattooCards/TattooCards";

const tatuagens = [
  { imagem: "https://picsum.photos/400/500?random=1", titulo: "Tatuagem 1" },
  { imagem: "https://picsum.photos/400/500?random=2", titulo: "Tatuagem 2" },
  { imagem: "https://picsum.photos/400/500?random=3", titulo: "Tatuagem 3" },
  { imagem: "https://picsum.photos/400/500?random=4", titulo: "Tatuagem 4" },
];

function Portfolio() {
  return (
    <section className="portfolio-container" id="portfolio">
      <h2 className="portfolio-titulo">Portfólio</h2>
      <Divider />
      <div className="portfolio-grid">
        {tatuagens.map((tattoo) => (
          <TattooCards
            key={tattoo.titulo}
            imagem={tattoo.imagem}
            titulo={tattoo.titulo}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
