import React, { useState, useEffect } from 'react';
import "./MainBanner.scss";
import Carousel from '../Carousel';


export default function MainBanner(){

  let array=[
    {
      imgDesktop: "/banners/banner1-desktop-1100x619.webp",
      imgMovil: "/banners/banner1-movil.jpeg",
      title: "Soluciones Profesionales para Ventanas de PVC",
      subtitle: "Confíe en nuestra experiencia para reparación de sus ventanas.",
      callToAction: "Solicitá un presupuesto gratis",
      link: "/#consultas"
    },
    {
      imgDesktop: "/banners/banner2-desktop.webp",
      imgMovil: "/banners/banner2-movil.jpeg",
      title: "Reparamos tus Ventanas de PVC, como Nuevas",
      subtitle: "Resuelve tus problemas de sellado, o ajustes con nuestra experiencia garantizada.",
      callToAction: "Solicite una reparación hoy mismo",
      link: "/#consultas"
    },
    /* {
      imgDesktop: "/banners/banner3-desktop.webp",
      imgMovil: "/banners/banner3-movil.jpeg",
      title: "Tecnología de Vanguardia para tu Taller",
      subtitle: "Descubre nuestros packs de maquinaria diseñados para potenciar la producción de aberturas de PVC. Innovación y eficiencia en cada solución.",
      callToAction: "Ver Packs de Maquinaria",
      link: "/#paquetes"
    }, */
    
  ]
  return(
    <div className='main-banner'>
      <Carousel slides={array} interval="500000000" />
    </div>
  )
}
