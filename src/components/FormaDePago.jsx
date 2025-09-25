import React from "react";
import "./FormaDePago.css";

export default function FormaDePago() {
  return (
    <section className="forma-pago" id="forma-pago">
      <div className="container">
        <div className="forma-card card">
          <div className="forma-left">
            <img src="img/mantenimiento2.png" alt="Mantenimiento" />
          </div>

          <div className="forma-right">
            <h2>Forma de pago</h2>
            <span className="badge">Próximamente</span>
            <p className="descripcion">
              Estamos trabajando en las opciones de pago para Transporte Don Roque.
              Pronto vas a poder ver métodos seguros, facturación y opciones de pago
              para cada servicio. Mientras tanto, podés contactarnos por WhatsApp.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
