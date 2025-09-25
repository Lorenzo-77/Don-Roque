import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          Transporte{" "}
          <span style={{ color: "var(--rojo)", fontWeight: 800 }}>Don Roque</span>
        </h1>
        <p>
          Nos encargamos de mover tierra, limpiar terrenos y llevar áridos a donde los necesites.<br />
          Ofrecemos arena, ripio, nivelaciones, demoliciones y mucho más.
        </p>
        <a href="#nosotros" className="hero-btn hero-btn--sm" aria-label="Conocé más sobre nosotros">
          Conocé más sobre nosotros
        </a>
      </div>
    </section>
  );
}

export default Hero;
