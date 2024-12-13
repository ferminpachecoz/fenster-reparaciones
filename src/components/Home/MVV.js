import React from 'react';
import "./MVV.scss";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function MVV() {
  const [text, setText] = useState("1")

  function cambiar (num){
    setText(num)
  }
  
  return (
    <div className='mvv row'>
      <div className='col-lg-6 col-12 image' style={{backgroundImage: "url('/images/reparacion4.webp')"}}>

      </div>
      <div className='col-lg-6 col-12 info'>
        <h2 className='section-subtitle'>¿Por qué elegirnos?</h2>
        <h1 className='section-title'>Expertos en reparar ventanas de PVC con precisión y calidad</h1>
        <p>En Fenster Fix ofrecemos un servicio integral y especializado en instalación y reparación de ventanas de PVC, combinando precisión técnica con una atención personalizada. Nos destacamos por utilizar herramientas y métodos de última generación, garantizando resultados confiables y duraderos tanto en proyectos de obra nueva como en soluciones rápidas para aberturas existentes. Nuestro equipo altamente capacitado trabaja con compromiso y excelencia, asegurando funcionalidad, estética y eficiencia energética en cada trabajo. Elegirnos significa confiar en un aliado que entiende tus necesidades y supera tus expectativas.</p>
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
          <p className='txt'>En Fenster Fix, nuestra misión es brindar soluciones integrales en la reparación e instalación de ventanas de PVC, combinando excelencia técnica, innovación y atención al detalle. Nos comprometemos a ofrecer un servicio confiable, rápido y personalizado, asegurando la satisfacción de nuestros clientes y prolongando la vida útil de sus aberturas.</p>
          :""
        }
        {
          text==2?
          <p className='txt'>Ser la empresa líder en servicios técnicos de ventanas de PVC en Argentina, reconocida por su profesionalismo, innovación y capacidad de adaptación a las necesidades del mercado. Aspiramos a establecer un estándar de calidad en el rubro, construyendo relaciones duraderas con nuestros clientes basadas en confianza y resultados excepcionales.</p>
          :""
        }
        {
          text==3?
          <p className='txt'>En Fenster Fix nos guiamos por el profesionalismo, trabajando con precisión y dedicación en cada proyecto; la innovación, integrando herramientas tecnológicas y métodos modernos para ofrecer soluciones de vanguardia; el compromiso, cumpliendo siempre nuestras promesas con puntualidad y excelencia; la atención al cliente, escuchando y entendiendo sus necesidades para brindar un servicio personalizado.</p>
          :""
        }
        
      </div>
    </div>
  )
}
