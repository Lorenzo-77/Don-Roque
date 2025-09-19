// src/components/Footer.jsx
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <img src="img/logo-donroque.png" alt="Logo Don Roque" className="footer-logo" />
        </div>
        <div className="footer-text">
          © {new Date().getFullYear()} Transporte Don Roque — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}

export default Footer;
