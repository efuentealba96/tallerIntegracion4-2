import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Cardinscripcion({ imageSource, title, text, url }) {
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
            : " Bienvenid@ a el modulo de inscripcion de ramos , en este apartado podras inscribir ramos , desde ya queremos que sepas que para este proceso es necesario estar al dia con aranceles y matriculas para poder seguir adelante con los cursos."}
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

Cardinscripcion.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Cardinscripcion;