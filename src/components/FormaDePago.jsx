import { useState, useEffect } from "react";
import "./FormaDePago.css";

export default function FormaDePago() {
  const [showBnaZoom, setShowBnaZoom] = useState(false);

  // Cerrar con ESC y bloquear scroll al abrir zoom
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setShowBnaZoom(false);
    }
    if (showBnaZoom) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [showBnaZoom]);

  return (
    <section className="forma-pago" id="forma-pago">
      <div className="container">
        <h2 className="forma-title">Formas de pago</h2>

        <div className="pago-grid">
          {/* 15% OFF en efectivo */}
          <article className="pago-card" tabIndex={0}>
            <div className="pago-head">
              <span className="tag tag--promo">15% OFF</span>
              <h3>Efectivo</h3>
            </div>
            <p className="pago-desc">
              Descuento directo pagando en efectivo al momento del servicio.
            </p>
            <div className="pago-cta">
              <a
                className="btn"
                href="https://wa.me/2664565098?text=Hola%20quiero%20solicitar%20presupuesto%20con%2015%%20OFF%20en%20efectivo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pedir presupuesto por WhatsApp con 15% OFF en efectivo"
              >
                Pedir presupuesto
              </a>
            </div>
          </article>

          {/* 12 cuotas con BNA */}
          <article className="pago-card" tabIndex={0}>
            <div className="pago-head">
              <img
                className="pago-logo"
                src="/img/bna.png"
                alt="Banco Nación"
                loading="lazy"
                decoding="async"
                onClick={() => setShowBnaZoom(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setShowBnaZoom(true);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Ver logo Banco Nación ampliado"
              />
              <h3>12 cuotas sin interés</h3>
            </div>
            <p className="pago-desc">
              Financiación con Banco Nación en 12 cuotas fijas y sin interés.{" "}
              <strong>Exclusivo BNA+ MODO.</strong>
            </p>
            <div className="pago-cta">
              <a className="btn btn-outline" href="#contacto">
                Consultar
              </a>
            </div>
          </article>

          {/* CTA general de presupuesto */}
          <article className="pago-card pago-card--accent" tabIndex={0}>
            <div className="pago-head">
              <h3>¿Necesitás un presupuesto?</h3>
            </div>
            <p className="pago-desc">
              Contanos tu obra, ubicación y materiales. Respondemos en el día.
            </p>
            <div className="pago-cta">
              <a
                className="btn"
                href="https://wa.me/2664565098?text=Hola%20necesito%20presupuesto%20para%20un%20trabajo"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a className="btn btn-link" href="#contacto">
                O por formulario
              </a>
            </div>
          </article>
        </div>

        <p className="pago-legal">
          <small>
            Promociones sujetas a verificación y disponibilidad. Aplican
            condiciones del comercio y del banco.
          </small>
        </p>
      </div>

      {/* Zoom del logo BNA */}
      {showBnaZoom && (
        <div
          className="logo-zoom-overlay"
          onClick={() => setShowBnaZoom(false)}
          aria-modal="true"
          role="dialog"
        >
          <button
            className="logo-zoom-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowBnaZoom(false);
            }}
            aria-label="Cerrar imagen ampliada"
          >
            &times;
          </button>
          <div
            className="logo-zoom-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/img/bna.png"
              alt="Banco Nación — ampliado"
              className="logo-zoom-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}
