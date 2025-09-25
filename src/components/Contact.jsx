// src/components/Contact.jsx
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || null;
  const [statusMsg, setStatusMsg] = useState(null); // { type: 'error'|'success', text: '...' }
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatusMsg(null);

    const form = new FormData(e.target);
    const nombre = (form.get("nombre") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const mensaje = (form.get("mensaje") || "").toString().trim();
    const interes = (form.get("interes") || "").toString().trim();

    // Validación básica
    if (!nombre || !email || !mensaje) {
      setStatusMsg({
        type: "error",
        text: "Completá nombre, email y mensaje. Si no funciona el envío, contactanos por WhatsApp."
      });
      return;
    }

    // Si hay endpoint configurado intentamos enviar
    if (endpoint) {
      setSending(true);
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre,
            email,
            interes,
            mensaje,
            source: "Web - Transporte Don Roque"
          })
        });

        if (res.ok) {
          setStatusMsg({ type: "success", text: "Mensaje enviado. Nos contactamos pronto." });
        } else {
          setStatusMsg({
            type: "error",
            text: "No se pudo enviar el mensaje. Por favor contactanos por WhatsApp."
          });
        }
      } catch (err) {
        setStatusMsg({
          type: "error",
          text: "No se pudo enviar el mensaje. Por favor contactanos por WhatsApp."
        });
      } finally {
        setSending(false);
      }
      return;
    }

    // Sin endpoint configurado -> mostramos solo el aviso (sin número)
    setStatusMsg({
      type: "error",
      text: "No se pudo enviar el mensaje. Por favor contactanos por WhatsApp."
    });
  }

  return (
    <section className="contact-glass" id="contacto">
      <div className="contact-header">
        <h2>Contacto</h2>
      </div>

      <div className="contact-main">
        {/* Canales directos */}
        <div className="contact-channels-glass">
          <span>Canales directos</span>
          <div className="contact-icons">
            <a
              href="https://wa.me/2664565098"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn-glass"
              title="WhatsApp"
            >
              <img src="img/whatsapp.webp" alt="WhatsApp" />
            </a>
            <a
              href="mailto:transportedonroque@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn-glass"
              title="Email"
            >
              <img src="img/gmail.webp" alt="Email" />
            </a>
            <a
              href="https://www.instagram.com/transportedonroque.sl/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn-glass"
              title="Instagram"
            >
              <img src="img/instagram.webp" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Formulario glass */}
        <form
          className="contact-form-glass"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>
            Nombre
            <input type="text" name="nombre" placeholder="Nombre" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Email" required />
          </label>
          <label>
            Interés (opcional)
            <select name="interes">
              <option value="">Seleccione un servicio</option>
              <option value="áridos">Venta y traslado de áridos</option>
              <option value="terrenos">Limpieza y nivelación de terrenos</option>
              <option value="desmonte">Desmonte, picadas</option>
              <option value="represas">Limpieza de represas</option>
              <option value="demoliciones">Demoliciones</option>
              <option value="transporte">Transporte no convencional</option>
            </select>
          </label>
          <label>
            Mensaje
            <textarea name="mensaje" placeholder="..." rows={4} required />
          </label>
          <button type="submit" disabled={sending}>
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
            {/* Mensaje simple ABAJO del formulario (sin número) */}
        {statusMsg && (
          <div
            role="alert"
            aria-live="polite"
            className={statusMsg.type === "error" ? "form-status error" : "form-status success"}
            style={{ marginTop: 12 }}
          >
            {statusMsg.text}
          </div>
        )}
        </form>

      
      </div>
    </section>
  );
}

export default Contact;
