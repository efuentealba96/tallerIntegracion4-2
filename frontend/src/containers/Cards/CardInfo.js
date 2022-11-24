import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function CardInfo({ imageSource, title, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "En este apartado encontraras tu informacion personal:"}
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

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default CardInfo;