import React from "react";
import Cardinscripcion from "./Cardinscripcion";

import image1 from "../../assets/images/icon-72x72.png";


const cards = [
  {
    id: 1,
    title: "Inscripcion de Cursos",
    image: image1,
    
  }
  
 
];

function Cardsinscripcion() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Cardinscripcion imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardsinscripcion;