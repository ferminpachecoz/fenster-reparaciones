import React from 'react';
import "./Footer.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Footer({array}) {
  return (
    <div className='footer'>
      <div className='row align-items-start'>
        <div className='col-lg-3 col-12 detail'>
          <h2>Fenster Fix</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className='col-lg-3 col-12 services align-items-start'>
          <h2>Servicios</h2>
          {
            array.map((item,index)=>(
              <div className='d-flex align-items-center' key={index}>
                <img src="/icons/check.webp" alt="Check icon" />
                <p className='mb-0'>{item.title}</p>
              </div>
            ))
          }
        </div>
        <div className='col-lg-3 col-12 contact'>
          <h2>información</h2>
          <div className='d-flex align-items-center mb-3'>
            <img src="/icons/location.webp" alt="Location icons" />
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div className='d-flex align-items-center mb-3'>
            <img src="/icons/call.webp" alt="Cellphone icon" />
            <p>+2 392 3929 210</p>
          </div>
          <div className='d-flex align-items-center mb-3'>
            <img src="/icons/email.webp" alt="Email icon" />
            <p>info@yourdomain.com</p>
          </div>
        </div>
        <div className='col-lg-3 col-12 horarios'>
          <h2>Horarios</h2>
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
