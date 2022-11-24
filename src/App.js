import React from 'react';
import './style.css';
import Hijo from './Hijo';
import { useState } from 'react';

export default function App() {
  const objects = [
    {
      nombre: 'Ervigio',
      vacas: 3,
      imagen: 'https://www.html6.es/img/rey_ervigio.png',
    },

    {
      nombre: 'Atanagildo',
      vacas: 6,
      imagen: 'https://www.html6.es/img/rey_atanagildo.png',
    },

    {
      nombre: 'AtaÃºlfo',
      vacas: 11,
      imagen: 'https://www.html6.es/img/rey_ataulfo.png',
    },

    {
      nombre: 'Leogivildo',
      vacas: 2,
      imagen: 'https://www.html6.es/img/rey_leogivildo.png',
    },
  ];

  const [mensaje, setMensaje] = useState('vota por tu rey favorito');
  const sumar = (nombre, valoracion) => {
    setMensaje(
      <div>
        Has votado por el Rey: {nombre} con una valoracion de: {valoracion}
      </div>
    );
  };

  return (
    <>
      <h2>{mensaje}</h2>
      <div className="container-fluid">
        <Hijo
          onAction={sumar}
          datos={{
            nombre: 'Ervigio',
            vacas: 11,
            imagen: 'https://www.html6.es/img/rey_ervigio.png',
          }}
        />
        <Hijo
          onAction={sumar}
          datos={{
            nombre: 'Atanagildo',
            vacas: 6,
            imagen: 'https://www.html6.es/img/rey_atanagildo.png',
          }}
        />
        <Hijo
          onAction={sumar}
          datos={{
            nombre: 'ataulfo',
            vacas: 11,
            imagen: 'https://www.html6.es/img/rey_ataulfo.png',
          }}
        />
        <Hijo
          onAction={sumar}
          datos={{
            nombre: 'leogivildo',
            vacas: 2,
            imagen: 'https://www.html6.es/img/rey_leogivildo.png',
          }}
        />
      </div>
    </>
  );
}
