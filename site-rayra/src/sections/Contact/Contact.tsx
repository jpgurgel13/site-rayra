import "./Contact.css";
import Divider from "../../components/Divider/Divider";
import Button from "../../components/Button/Button";
function Contact() {
  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-titulo">Contato</h2>
      <Divider />
      <p className="contact-texto">
        Entre em contato comigo para agendar uma sessão ou tirar dúvidas.
      </p>
      <Button href="https://wa.me/5567998893843">WhatsApp</Button>
      <p className="contact-texto">
        Meu Instagram é o melhor lugar para ver meu trabalho.
      </p>
      <Button href="https://www.instagram.com/rayresende._/">Instagram</Button>
      <p className="contact-texto">Campo Grande - MS</p>
    </section>
  );
}
export default Contact;
