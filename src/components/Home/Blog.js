import React from 'react';
import "./Blog.scss";
import CardBlog from './CardBlog';

export default function Blog() {
  let array=[
    {
      title: "Como saber si tu ventana necesita reparacion",
      image: "https://preview.colorlib.com/theme/autorepair/images/image_1.jpg.webp",
      date: "2024/11/19"
    },
    {
      title: "Como saber si tu ventana necesita reparacion",
      image: "https://preview.colorlib.com/theme/autorepair/images/image_2.jpg",
      date: "2024/11/19"
    },
    {
      title: "Como saber si tu ventana necesita reparacion",
      image: "https://preview.colorlib.com/theme/autorepair/images/image_3.jpg",
      date: "2024/11/19"
    },
  ]
  return (
    <div className='blog'>
      <h2 className='section-subtitle'>Noticias & Blog</h2>
      <h1 className='section-title'>Aprende Más sobre el Cuidado de tus Ventanas</h1>
      <div className='row row-cols-lg-3 row-cols-1 g-5'>
        {
          array.map((item,index)=>(
            <div key={index}>
              <CardBlog title={item.title} image={item.image} date={item.date} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
