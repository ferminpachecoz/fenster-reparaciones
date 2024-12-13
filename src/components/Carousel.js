import React, { useState, useEffect } from "react";
import "./Carousel.css";
import Slides from "./Home/Slides";

function Carousel ({ slides, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileBg, setMobileBg] = useState();

  /* useEffect(()=>{
    if (window.innerWidth <= 768) {
      setMobileBg(true); // Imagen para mobile
    } else {
      setMobileBg(false); // Imagen para desktop
    }
  },[]) */

  useEffect(() => {
    const slides = document.querySelector('.carousel-slides');
    slides.classList.remove('initial');
  }, []);


  // Cambiar automáticamente las imágenes
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, slides.length, interval, isPaused]);

  // Cambiar manualmente con botones
  const goToSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(slides.length - 1); // Ir al último slide si estás en el primero y haces click en "prev"
    } else if (index >= slides.length) {
      setCurrentIndex(0); // Ir al primer slide si estás en el último y haces click en "next"
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Slides key={index} index={index} img1200={slide.img1200} img1100={slide.img1100} img480={slide.img480} title={slide.title} subtitle={slide.subtitle} callToAction={slide.callToAction} /* mobileBg={mobileBg} */ link={slide.link} />
        ))}
      </div>
      <div className="carousel-controls">
        {slides.map((_, index) => (
          <button
            aria-label="Navigation buttons through carousel"
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <div className="prev">
        <img src="/arrows/back.png"  onClick={()=>goToSlide(currentIndex-1)} alt="Previous Button" />
      </div>
      <div className="next">
        <img src="/arrows/next.png" onClick={()=>goToSlide(currentIndex+1)} alt="Next button" />
      </div>
    </div>
  );
};

export default Carousel;
