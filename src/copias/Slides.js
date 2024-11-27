import React from 'react'
import { HashLink } from 'react-router-hash-link'
import "./Slides.scss"

export default function Slides({imageDesktop, imageMovil, title, subtitle, callToAction, mobileBg, link}) {
  return (
    <div className='slides' style={{backgroundImage: `url(${mobileBg?imageMovil:imageDesktop})`}}>
      <div className='shadow'>
        <div className='text col-12 col-lg-7'>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <div className='center'>
            <HashLink to={link}>
              <p>{callToAction}</p> 
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  )
}
