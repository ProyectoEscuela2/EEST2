"use client";

import React, { useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './carrusel-inicio-estilo.css';

export function Carrusel() {
  const [items] = useState([
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
      src: '/tecnica.jpeg',
      className: 'carrusel-item'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: 'https://picsum.photos/id/456/1200/600',
      className: 'carrusel-item'
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: 'https://picsum.photos/id/678/1200/600',
      className: 'carrusel-item'
    }
  ]);

  return (
    <>
      <div className="contenedor-carrusel">
        <h2 className='carrusel-titulo'><a className='carrusel-titulo' href="galeria">Visitar galeria</a></h2>
        <UncontrolledCarousel items={items} />
      </div>
    </>
  );
}
