import React from "react";
import CardInfo from "./CardInfo";






const cards = [
  {
    id: 1,
    title: "Perfil",
    
    
  }
  
 
];

function CardsInfo() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title,  url, id }) => (
          <div className="col-md-4" key={id}>
            <CardInfo  title={title} url={url} />
            <br/>
            
            
            
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsInfo;