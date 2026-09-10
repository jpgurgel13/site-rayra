import "./Button.css";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

function Button({ href, children }: ButtonProps) {
  const externo = href.startsWith("http");

  return (
    <a
      href={href}
      className="button"
      target={externo ? "_blank" : undefined}
      rel={externo ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
export default Button;
