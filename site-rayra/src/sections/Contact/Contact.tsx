import "./Contact.css";
function Contact() {
  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-titulo">Contato</h2>
      <p className="contact-texto">
        Entre em contato conosco para agendar uma sessão ou tirar dúvidas.
      </p>
      <a
        className="contact-link"
        href="https://api.whatsapp.com/send/?phone=5567998893843&text&type=phone_number&app_absent=0&utm_source=ig"
      >
        whatsapp
      </a>
    </section>
  );
}
export default Contact;
