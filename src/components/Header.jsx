// src/components/Header.jsx
import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <a href="#inicio" className="logo-link">
          <img src="img/logo-donroque.png" alt="Logo Don Roque" className="logo-img" />
           {/* <span className="logo-txt">Transporte <b>Don Roque</b></span> */}
        </a>

        <nav className={`nav ${open ? "open" : ""}`}>
          <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <span className="menu-icon"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
