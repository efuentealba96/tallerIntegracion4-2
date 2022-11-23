import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function CardP({ imageSource, title, text, url }) {
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
            : "La Nota P es la calificación utilizada en una determinada asignatura cuando no ha sido posible cumplir con la evaluación final del curso dentro de los plazos establecidos en el Calendario Académico. La “Nota P” sólo podrá ser solicitada si se ha cumplido con al menos el 60% de las actividades y evaluaciones del curso. Es responsabilidad de el o la estudiante que ha solicitado la “Nota P” completar la o las evaluaciones no rendidas, lo que permitirá reemplazar la “Nota P” por la calificación correspondiente. Si el o la estudiante no cumple dichas exigencias será calificado con nota uno (1,0). El plazo máximo para mantener una “Nota P” será de un año. Para mayor información puedes solicitar el reglamento de Nota P del alumno de pregrado a dara@uct.cl o bien descargarlo del sitio web: https://dara.uct.cl"}
        </p>
        <a
          href={"https://dara.uct.cl"}
          target="https://dara.uct.cl"
          className="btn btn-outline-secondary border-0"
          rel="https://dara.uct.cl"
        >
           
        </a>
      </div>
    </div>
  );
}

CardP.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default CardP;