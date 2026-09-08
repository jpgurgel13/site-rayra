import "./TattooCards.css";
interface TattooCardProps {
  imagem: string;
  titulo: string;
}
function TattooCards({ imagem, titulo }: TattooCardProps) {
  return (
    <article className="tattoo-card">
      <img src={imagem} alt={titulo} className="tattoo-card-imagem" />
      <h3 className="tattoo-card-titulo">{titulo}</h3>
    </article>
  );
}
export default TattooCards;
