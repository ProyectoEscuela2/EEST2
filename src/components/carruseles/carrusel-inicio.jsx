import React, { useState } from 'react';
import imagen1 from 'C:/react/projects/nombre/src/assets/tecnica.jpeg';
import './carrusel-inicio-estilo.css'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  UncontrolledCarousel
} from 'reactstrap';


export function Carrusel(){

  return(
  <>
    <div className="centro">
    <div className="contenedor-carrusel">
    <h2 className='carrusel-titulo'><a className='carrusel-titulo' href="galeria">Visitar galeria</a></h2>
  <UncontrolledCarousel
    items={[
      {
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
        src: imagen1,
      },
      {
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
        src: 'https://picsum.photos/id/456/1200/600',

      
      },
      {
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
        src: 'https://picsum.photos/id/678/1200/600',
      
      }
    ]}
  />
  </div>
  </div>
  </>
  )
}
