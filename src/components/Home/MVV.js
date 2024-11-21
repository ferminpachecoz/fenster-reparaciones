import React from 'react';
import "./MVV.scss";
import { useState } from 'react';

export default function MVV() {
  const [text, setText] = useState("1")

  function cambiar (num){
    setText(num)
  }
  console.log(text);
  
  return (
    <div className='mvv row'>
      <div className='col-lg-6 col-12 image'>

      </div>
      <div className='col-lg-6 col-12 info'>
        <h2 className='section-subtitle'>Welcome to Autorepair</h2>
        <h1 className='section-title'>We help more than 45 years serving customer car</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <div className='d-flex flex-column flex-lg-row'>
          <button 
            onClick={()=>cambiar("1")} 
            style={{backgroundColor: text==1?"var(--accent)":"white", color: text==1?"white":"black"}}
          >
            Misión
          </button>
          <button 
            onClick={()=>cambiar("2")} 
            style={{backgroundColor: text==2?"var(--accent)":"white", color: text==2?"white":"black"}}
          >
            Visión
          </button>
          <button 
            onClick={()=>cambiar("3")} 
            style={{backgroundColor: text==3?"var(--accent)":"white", color: text==3?"white":"black"}}
          >
              Valores
          </button>
        </div>
        {
          text==1?
          <p className='txt'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          :""
        }
        {
          text==2?
          <p className='txt'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          :""
        }
        {
          text==3?
          <p className='txt'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
          :""
        }
        
      </div>
    </div>
  )
}
