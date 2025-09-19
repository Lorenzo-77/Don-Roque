import "./About.css";

function About() {
  return (
    <section className="about" id="nosotros">
      <h2 className="about-title">Sobre nosotros</h2>
      <div className="about-card">
        <div className="about-video">
          <div className="responsive-iframe">
            <iframe
              src="https://www.youtube.com/embed/q8dilxHvbiM"
              title="Transporte Don Roque Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="about-text">
          <p>
            Somos <b>Transporte Don Roque</b>: soluciones profesionales en{" "}
            <span className="highlight">venta y traslado de áridos</span>,{" "}
            <span className="highlight">movimiento de tierra</span>,{" "}
            <span className="highlight">limpieza de terrenos</span> y más.
            <br />
            <br />
            Trabajamos con compromiso y experiencia en cada servicio. Nuestro
            objetivo es que el cliente confíe, repita y nos recomiende.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
