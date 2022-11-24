import React from 'react';
import { useState, useEffect } from 'react';

const Hijo = ({ datos, onAction }) => {
  const { nombre, vacas, imagen } = datos;
  const [valoracion, setValoracion] = useState(0);

  const votar = () => {
    setValoracion(valoracion + 1);
  };

  useEffect(() => {
    onAction(nombre, valoracion);
  }, [valoracion]);

  return (
    <div className="cadaRey">
      <div>
        <h1> {nombre} </h1>
      </div>
      <div className="menu">
        <h2>come {vacas} vacas al dia</h2>
      </div>
      <img className="img-fluid" src={imagen} alt="ervigio"></img>
      <div className="cajaVotacion">
        <button onClick={() => votar()}>Votame</button>
        <div className="votacion">{valoracion}</div>
      </div>
    </div>
  );
};

export default Hijo;
