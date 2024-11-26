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
      <div className='col-lg-6 col-12 image' style={{backgroundImage: "url('/images/reparacion4.webp')"}}>

      </div>
      <div className='col-lg-6 col-12 info'>
        <h2 className='section-subtitle'>¿Por qué elegirnos?</h2>
        <h1 className='section-title'>Expertos en reparar ventanas de PVC con precisión y calidad</h1>
        <p>En Fenster Fix, somos especialistas en reparaciones de ventanas de PVC. Nos dedicamos a resolver problemas comunes como bisagras dañadas, mecanismos desgastados, sellados deficientes y más. Nuestro compromiso es brindar soluciones rápidas y efectivas, utilizando materiales de alta calidad y técnicas precisas para garantizar que tus ventanas recuperen su funcionalidad, estética y durabilidad. Confía en nuestra experiencia y atención personalizada para mantener tus aberturas en óptimas condiciones.</p>
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
