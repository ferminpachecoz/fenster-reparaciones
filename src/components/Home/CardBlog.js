import React from 'react';
import "./CardBlog.scss"
import { Link } from 'react-router-dom';

export default function CardBlog({title, image, date}) {
  return (
    <div className='card-blog'>
      <Link to="/">
        <div className='image' style={{backgroundImage: `url("${image}")`}}>

        </div>
        <div className='info'>
          <p className='title'>{title}</p>
          <p className='date'>{date}</p>
        </div>
      </Link>
    </div>
  )
}
