import React from 'react';
import "./Footer.scss";

export default function Footer({array}) {
  return (
    <div className='footer'>
      <div className='row align-items-start'>
        <div className='col-lg-3 col-12 detail'>
          <h3>Fenster Fix</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className='col-lg-3 col-12 services align-items-start'>
          <h3>Servicios</h3>
          {
            array.map((item,index)=>(
              <div className='d-flex' key={index}>
                <i className="bi bi-check me-3"></i>
                <p className='mb-0'>{item.title}</p>
              </div>
            ))
          }
        </div>
        <div className='col-lg-3 col-12 contact'>
          <h3>información</h3>
          <div className='d-flex'>
            <i className="bi bi-geo-alt me-3"></i>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div className='d-flex'>
            <i className="bi bi-telephone-fill me-3"></i>
            <p>+2 392 3929 210</p>
          </div>
          <div className='d-flex'>
            <i className="bi bi-envelope-at-fill me-3"></i>
            <p>info@yourdomain.com</p>
          </div>
        </div>
        <div className='col-lg-3 col-12 horarios'>
          <h3>Horarios</h3>
          <div className='hours'>
            <p className='main'>horarios de apertura</p>
            <p className='sub'>Monday - Friday : 9am to 20 pm</p>
            <p className='sub'>Saturday : 9am to 17 pm</p>
          </div>
          <div className='hours'>
            <p className='main'>Vacaciones</p>
            <p className='sub'>All Sunday Days All Official Holidays</p>
          </div>
        </div>
      </div>
      <p className='copyright'>Copyright ©2024 All rights reserved | This template is made with  by Fermin Pacheco</p>
    </div>
  )
}
