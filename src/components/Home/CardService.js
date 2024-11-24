import React from 'react';
import "./CardService.scss";

export default function CardService({icon, title, description}) {
  return (
    <div className='card-service row'>
      <div className='col-auto'>
        <div className='icon'>
          <i className={icon}></i>
        </div>
      </div>
      <div className='col'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
