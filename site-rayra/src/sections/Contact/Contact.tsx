import "./Contact.css";
import Divider from "../../components/Divider/Divider";
function Contact() {
  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-titulo">Contato</h2>
      <Divider />
      <p className="contact-texto">
        Entre em contato comigo para agendar uma sessão ou tirar dúvidas.
      </p>
      <a
        className="contact-link"
        href="https://wa.me/5567998893843"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <p className="contact-texto">
        Meu Instagram é o melhor lugar para ver meu trabalho.
      </p>
      <a
        className="contact-link"
        href="https://www.instagram.com/rayresende._/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <p className="contact-texto">campo Grande - MS</p>
    </section>
  );
}
export default Contact;
