import React from 'react'
import "./Services.scss"
import CardService from './CardService'

export default function Services({array}) {
  
  return (
    <div className='services'>
      <h2 className='section-subtitle'>We offer Services</h2>
      <h1 className='section-title'>Our car services</h1>
      <div className='row row-cols-lg-3 row-cols-1 g-5'>
        {
          array.map((item, index)=>(
            <div key={index}>
              <CardService icon={item.icon} title={item.title} description={item.description} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
