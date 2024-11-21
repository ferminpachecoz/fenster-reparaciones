import React, { useState } from 'react'
import "./Header.scss"
import {Link} from "react-router-dom"


export default function Header() {
  const [hover, setHover] = useState(1)
  const [display, setDisplay] = useState(false)

  let nav = [
    {
      id: 1,
      link: "/",
      text: "Inicio"
    },
    {
      id: 2,
      link: "/",
      text: "Servicios"
    },
    {
      id: 3,
      link: "/",
      text: "Nosotros"
    },
    {
      id: 4,
      link: "/",
      text: "Proyectos"
    },
    {
      id: 5,
      link: "/",
      text: "Contacto"
    },
  ]
  return (
    <div className='header'>
      <div className='top-header d-flex justify-content-between align-items-center'>
        <img src="logo.png" alt="Logo de la empresa" />
        <div className='d-flex align-items-center'>
          <div className='d-flex mx-5 align-items-center'>
            <div className='icon'>
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className='info'>
              <p className='title'>Address</p>
              <p className='description'>721 New York NY 10016</p>
            </div>
          </div>
          <div className='d-flex mx-5 align-items-center'>
            <div className='icon'>
              <i className="bi bi-telephone-inbound"></i>
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
              <li key={item.id} style={{backgroundColor: hover==item.id?"var(--accent-secondary)":"white"}}>
                <Link to={item.link} onClick={()=>setHover(item.id)} style={{color: hover==item.id?"white":"black"}}>{item.text}</Link>
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
