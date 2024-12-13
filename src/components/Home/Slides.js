import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Slides.scss';

export default function Slides({ index, img1200, img1100, img480, title, subtitle, callToAction, link }) {
  return (
    <div className="slides">
      {/* <img 
        src={img480}
        srcSet={`
        ${img480} 480w, 
        ${img1100} 1100w, 
        ${img1200} 1600w`}
        sizes="(max-width: 480px) 480px, 
         (max-width: 1100px) 1100px, 
         1600px" 
        alt={title} 
        className="slide-image"
        loading={index === 0 ? "eager" : "lazy"} 
      /> */}
      <picture>
        <source srcSet={img480} media="(max-width: 480px)" />
        <source srcSet={img1100} media="(max-width: 1100px)" />
        <source srcSet={img1200} media="(max-width: 1800px)" />
        <img src={img480} className='slide-image' alt="Prueba de banner" loading={index === 0 ? "eager" : "lazy"} ></img>
      </picture>
      <div className="shadow">
        <div className="text">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <div className="center">
            <HashLink to={link}>
              <p>{callToAction}</p>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
