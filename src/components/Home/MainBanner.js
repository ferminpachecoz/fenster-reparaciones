import React, { useState, useEffect } from 'react';
import "./MainBanner.scss";
import Carousel from '../Carousel';


export default function MainBanner({array}){
  return(
    <div className='main-banner'>
      <Carousel slides={array} interval="10000" />
    </div>
  )
}
