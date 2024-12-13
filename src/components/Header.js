import React, { useState } from 'react'
import "./Header.scss"
import {Link, useLocation} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Header() {
  const location = useLocation();
  const [display, setDisplay] = useState(false)

  let nav = [
    {
      id: 1,
      link: "/",
      text: "Inicio"
    },
    {
      id: 2,
      link: "/instalacion",
      text: "Instalación"
    },
    {
      id: 3,
      link: "/#reparacion",
      text: "Reparación"
    },
    {
      id: 4,
      link: "/#nosotros",
      text: "Nosotros"
    },
    {
      id: 5,
      link: "/#contacto",
      text: "Contacto"
    },
  ]
  return (
    <div className='header'>
      <div className='top-header d-flex justify-content-between align-items-center'>
        <img src="logo-fenster-250x130.webp" loading='eager' alt="Logo de la empresa" />
        <div className='d-flex align-items-center'>
          <div className='d-flex mx-5 align-items-center'>
            <div className='icon'>
              <img src="/icons/location-blue.webp"  loading='eager' alt="Location icon" />
            </div>
            <div className='info'>
              <p className='title'>Address</p>
              <p className='description'>721 New York NY 10016</p>
            </div>
          </div>
          <div className='d-flex mx-5 align-items-center'>
            <div className='icon'>
              <img src="/icons/viber.webp" loading='eager' alt="Phone icon" />
            </div>
            <div className='info'>
              <p className='title'>Call us</p>
              <p className='description'>(+01) 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-header'>
        <ul className='d-flex'>
          {
            nav.map(item=>(
              <li key={item.id} style={{backgroundColor: location.pathname === item.link?"var(--accent)":"white"}}>
                <Link to={item.link} style={{color: location.pathname === item.link?"white":"black"}}>{item.text}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='responsive-header'>
        <span className='d-flex align-items-center' onClick={()=>setDisplay(!display)}>
          <i className="bi bi-list me-3"></i>
          <p>menú</p>
        </span>
        {display &&  
          <ul>
            {
              nav.map(item=>(
                <li key={item.id}>
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))
            }
          </ul>
        }
      </div>
    </div>
  )
}
