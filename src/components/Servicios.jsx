// src/components/Servicios.jsx
import "./Servicios.css";

const servicios = [
  {
    nombre: "Venta y traslado de áridos",
    img: "/img/venta.webp",
    desc: "Ofrecemos arena, ripio y otros materiales. Te los llevamos a tu obra de manera rápida y segura.",
  },
  {
    nombre: "Limpieza y nivelación de terrenos",
    img: "/img/limpieza.webp",
    desc: "Preparamos tu terreno para que esté listo para construir, plantar o desarrollar.",
  },
  {
    nombre: "Desmonte, picadas",
    img: "/img/desmonte.webp",
    desc: "Nos encargamos de eliminar la maleza y preparar caminos o accesos para tu proyecto.",
  },
  {
    nombre: "Limpieza de represas",
    img: "/img/limpieza-represas.webp",
    desc: "Realizamos mantenimiento, limpieza y puesta a punto de represas y canales.",
  },
  {
    nombre: "Demoliciones",
    img: "/img/demoliciones.webp",
    desc: "Nos ocupamos del derribo y retiro de escombros, siempre con un trabajo seguro y profesional.",
  },
  {
    nombre: "Transporte no convencional",
    img: "/img/transporte.webp",
    desc: "Movemos lo que otros no pueden. Ofrecemos soluciones para cargas especiales.",
  },
];

function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <h2>Nuestros servicios</h2>
      <div className="servicios-grid">
        {servicios.map((serv, i) => (
          <div className="servicio-card" key={i}>
            <div className="servicio-img">
              <img src={serv.img} alt={serv.nombre} loading="lazy" />
            </div>
            <div className="servicio-info">
              <h3>{serv.nombre}</h3>
              <p>{serv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
