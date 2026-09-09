import "./Divider.css";

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="divider-linha" />
      <span className="divider-simbolo">✦</span>
      <span className="divider-linha" />
    </div>
  );
}

export default Divider;
