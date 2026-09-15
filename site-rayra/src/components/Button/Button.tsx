import "./Button.css";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variante?: "primario" | "secundario";
}

function Button({ href, children, variante = "primario" }: ButtonProps) {
  const externo = href.startsWith("http");

  return (
    <a
      href={href}
      className={`button button-${variante}`}
      target={externo ? "_blank" : undefined}
      rel={externo ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
export default Button;
