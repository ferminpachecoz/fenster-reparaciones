import React from 'react';
import "./CardService.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function CardService({icon, title, description}) {
  return (
    <div className='card-service row'>
      <div className='col-auto'>
        <div className='icon'>
          <img src={icon} alt="" />
        </div>
      </div>
      <div className='col'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
