import { useState, useRef, useEffect } from "react";
import "./About.css";

const images = Array.from({ length: 8 }, (_, i) => `img/${i + 1}.webp`);

function About() {
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });
  const touchStartX = useRef(null);

  function handleTouchStart(e) {
    touchStartX.current = e.changedTouches[0].screenX;
  }
  function handleTouchEnd(e) {
    if (touchStartX.current == null) return;
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) nextImg();
    if (diff < -40) prevImg();
    touchStartX.current = null;
  }

  function openLightbox(idx) {
    setLightbox({ open: true, idx });
  }
  function closeLightbox() {
    setLightbox({ open: false, idx: 0 });
  }
  function prevImg() {
    setLightbox(l => ({
      open: true,
      idx: l.idx === 0 ? images.length - 1 : l.idx - 1
    }));
  }
  function nextImg() {
    setLightbox(l => ({
      open: true,
      idx: l.idx === images.length - 1 ? 0 : l.idx + 1
    }));
  }

  // teclado global y bloqueo de scroll cuando el lightbox está abierto
  useEffect(() => {
    function onKey(e) {
      if (!lightbox.open) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    }

    if (lightbox.open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox.open]);

  // helper para abrir con teclado en cada card
  function handleCardKey(e, idx) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox(idx);
    }
  }

  return (
    <section className="about" id="nosotros">
      <div className="about-content">
        <h2 className="about-title">Sobre nosotros</h2>
        <p className="about-desc">
          En <b>Transporte Don Roque</b>, nos dedicamos a ofrecer{" "}
          <span className="highlight">
            soluciones profesionales para el movimiento de tierra, la venta y el
            traslado de áridos, la limpieza de terrenos, desmontes, demoliciones
            y transporte no convencional
          </span>{" "}
          en San Luis y toda la región.
          <br />
          <br />
          Gracias a nuestra experiencia, compromiso y un equipo moderno, podemos
          abordar cada proyecto con la seriedad y eficiencia que nuestros
          clientes merecen.
          <br />
          <br />
          Echa un vistazo a algunos de nuestros trabajos recientes:
        </p>
      </div>

      <div className="about-gallery">
        <div className="gallery-grid">
          {images.map((src, idx) => (
            <div
              className="gallery-img-card"
              key={idx}
              onClick={() => openLightbox(idx)}
              onKeyDown={(e) => handleCardKey(e, idx)}
              tabIndex={0}
              role="button"
              aria-label={`Ver imagen ${idx + 1}`}
            >
              <img src={src} alt={`Trabajo Don Roque ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {lightbox.open && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          aria-modal="true"
          role="dialog"
        >
          <button
            className="lightbox-close"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Cerrar lightbox"
          >
            &times;
          </button>

          <button
            className="lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <div
            className="lightbox-img-box"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img src={images[lightbox.idx]} alt={`Trabajo Don Roque ${lightbox.idx + 1}`} />
            <div className="lightbox-counter">
              {lightbox.idx + 1} / {images.length}
            </div>
          </div>

          <button
            className="lightbox-next"
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            aria-label="Siguiente imagen"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default About;
