import "./Contact.css";

function Contact() {
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
            <a href="https://wa.me/2664565098" target="_blank" rel="noopener noreferrer" className="icon-btn-glass" title="WhatsApp">
              <img src="img/whatsapp.webp" alt="WhatsApp" />
            </a>
            <a href="mailto:transportedonroque@outlook.com" target="_blank" rel="noopener noreferrer" className="icon-btn-glass" title="Email">
              <img src="img/gmail.webp" alt="Email" />
            </a>
            <a href="https://www.instagram.com/transportedonroque.sl/" target="_blank" rel="noopener noreferrer" className="icon-btn-glass" title="Instagram">
              <img src="img/instagram.webp" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Formulario glass */}
        <form className="contact-form-glass" autoComplete="off" onSubmit={e => e.preventDefault()}>
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
            <textarea name="mensaje" placeholder="Contanos brevemente tu idea..." rows={4} required />
          </label>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
