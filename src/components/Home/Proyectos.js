import React from 'react';
import "./Proyectos.scss"
import { Link } from 'react-router-dom';

export default function Proyectos() {
  let array = [
    {
      title: "Engine Testing Complated",
      category: "Engine",
      image: "https://preview.colorlib.com/theme/autorepair/images/work-1.jpg.webp"
    },
    {
      title: "Change Oil Completed",
      category: "Oil Change",
      image: "https://preview.colorlib.com/theme/autorepair/images/work-2.jpg.webp"
    },
    {
      title: "Engine Diagnostics",
      category: "Engine",
      image: "https://preview.colorlib.com/theme/autorepair/images/work-3.jpg.webp"
    },
    {
      title: "Tire",
      category: "Tire Change",
      image: "https://preview.colorlib.com/theme/autorepair/images/work-4.jpg.webp"
    }
  ]
  return (
    <div className='proyectos'>
      <h2 className='section-subtitle'>proyectos</h2>
      <h1 className='section-title'>proyectos terminados</h1>
      <div className='row row-cols-lg-4 row-cols-1'>
        {
          array.map((item,index)=>(
            <div className='card' key={index} style={{backgroundImage: `url("${item.image}")`}}>
              <Link to="/">
                <span className='data'>
                  <p className='category'>{item.category}</p>
                  <p className='title'>{item.title}</p>
                </span>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
