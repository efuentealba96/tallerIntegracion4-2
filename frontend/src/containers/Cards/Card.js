import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Estimados/as estudiantes,La Vicerrectoría Académica a través de la Dirección de Admisión y Registros Académicos en conjunto con la Dirección de Informática, tiene el agrado de comunicarles que contamos con un nuevo servicio de Firma Electrónica Avanzada, el cual permitirá brindarles una mejor atención y disminuir los tiempos de espera en lo que se requiere a solicitudes de certificados."}
        </p>
        <a
          href={url ? url : "#!"}
          target="noreferrer"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
           
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;