import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Slides.scss';

export default function Slides({ index, imageDesktop, imageMovil, title, subtitle, callToAction, link }) {
  return (
    <div className="slides">
      <img 
        src={imageDesktop} 
        alt={title} 
        className="slide-image"
        loading={index === 0 ? "eager" : "lazy"} 
      />
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
