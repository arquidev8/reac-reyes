import React from 'react';

const Hijo = ({ datos }) => {
  const { nombre, vacas, imagen } = datos;

  return (
    <div className="cadaRey">
      <div><h1> {nombre} </h1></div>
      <div><h2>come {vacas} vacas al dia</h2></div>
      <img src={imagen} alt="ervigio"></img>
    </div>
  );
};

export default Hijo;
