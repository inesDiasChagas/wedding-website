import React from "react";

import "./AccordionMarker.css";

const AccordionMarker = ({ backgroundColor, topSpacing, imageUrl }) => {
  return (
    <React.Fragment>
      <div
        className='marker-container'
        style={{
          top: topSpacing,
          backgroundColor: backgroundColor,
        }}
      >
        <img className='marker-image' src={imageUrl} alt='Imagem Evento'></img>
      </div>
    </React.Fragment>
  );
};

export default AccordionMarker;
