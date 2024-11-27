import React from 'react';
import "./Consult.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Consult({array}) {
  return (
    <div className='consult row' id='consultas'>
      <div className='col-lg-6 col-12 image' style={{backgroundImage: "url('/images/reparacion-cuadrada.webp')"}}>

      </div>
      <div className='col-lg-6 col-12 form'>
        <h2 className='section-subtitle'>¿Necesitas Ayuda?</h2>
        <h1 className='section-title'>Contáctanos Hoy Mismo</h1>
        <form>
          <select className="form-select mb-3" name='servicio' aria-label="Default select example">
            <option defaultChecked>Seleccione un servicio</option>
            {
              array.map((item, index)=>(
                <option key={index} value={item.title}>{item.title}</option>
              ))
            }
            <option value="Otro" key="1000">Otro</option>
          </select>
          <div className='row gx-4'>
            <div className="mb-3 col-6">
              <input type="text" name='nombre' className="form-control" placeholder="Nombre" />
            </div>
            <div className="mb-3 col-6">
              <input type="text" name='apellido' className="form-control" placeholder="Apellido" />
            </div>
          </div>
          <div className='row gx-4'>
            <div className="mb-3 col-6">
              <input type="email" name='email' autoComplete="user-email" className="form-control" placeholder="name@example.com" />
            </div>
            <div className="mb-3 col-6">
              <input type="text" name='telefono' className="form-control" placeholder="Teléfono" />
            </div>
          </div>
          <textarea aria-label="Comentarios" name='mensaje' className="form-control mb-3" rows="6"></textarea>
          <button>Enviar mensaje</button>
        </form>
      </div>
    </div>
  )
}
