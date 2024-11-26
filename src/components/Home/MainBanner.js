import React, { useState, useEffect } from 'react';
import "./MainBanner.scss";
import Slides from './Slides';


export default function MainBanner(){
  const [mobileBg, setMobileBg] = useState();

  useEffect(()=>{
    if (window.innerWidth <= 768) {
      setMobileBg(true); // Imagen para mobile
    } else {
      setMobileBg(false); // Imagen para desktop
    }
  },[])

  let array=[
    {
      imgDesktop: "/banners/banner1-desktop.webp",
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
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
      <div className="carousel-inner">
        {
          array.map((item, index)=>(
            <div className={`carousel-item ${index==0?'active':''}`} data-bs-interval="10000" key={index}>
              <Slides imageMovil={item.imgMovil} imageDesktop={item.imgDesktop} title={item.title} subtitle={item.subtitle} callToAction={item.callToAction} mobileBg={mobileBg} link={item.link} />
            </div>
          ))
        }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev" id="btn">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next" id="btn">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
