import React from 'react';
import './style.css';
import Hijo from './Hijo';

export default function App() {
  const ReyGodo1 = {
    nombre: 'Ervigio',
    vacas: 3,
    imagen: 'https://www.html6.es/img/rey_ervigio.png',
  };

  const ReyGodo2 = {
    nombre: 'Atanagildo',
    vacas: 6,
    imagen: 'https://www.html6.es/img/rey_atanagildo.png',
  };

  const ReyGodo3 = {
    nombre: 'AtaÃºlfo',
    vacas: 11,
    imagen: 'https://www.html6.es/img/rey_ataulfo.png',
  };

  const ReyGodo4 = {
    nombre: 'Leogivildo',
    vacas: 2,
    imagen: 'https://www.html6.es/img/rey_leogivildo.png',
  };

  return (
    <div>
      <Hijo
        datos={{
          nombre: 'Ervigio',
          vacas: 11,
          imagen: 'https://www.html6.es/img/rey_ervigio.png',
        }}
      />
    </div>
  );
}
