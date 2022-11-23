import React from "react";
import CardP from "./CardP";

import image1 from "../../assets/images/icon-72x72.png";


const cards = [
  {
    id: 1,
    title: "Solicitud Nota P",
    image: image1,
    
  }
  
 
];

function CardsP() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <CardP imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsP;