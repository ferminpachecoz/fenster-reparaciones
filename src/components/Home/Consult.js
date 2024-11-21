import React from 'react';
import "./Consult.scss";

export default function Consult({array}) {
  return (
    <div className='consult row'>
      <div className='col-lg-6 col-12 image'>

      </div>
      <div className='col-lg-6 col-12 form'>
        <h2 className='section-subtitle'>Booking an Appointment</h2>
        <h1 className='section-title'>Free Consultation</h1>
        <form>
          <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Seleccione un servicio</option>
            {
              array.map((item, index)=>(
                <option key={index} value="1">{item.title}</option>
              ))
            }
          </select>
          <div className='row gx-4'>
            <div class="mb-3 col-6">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
            </div>
            <div class="mb-3 col-6">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Apellido" />
            </div>
          </div>
          <div className='row gx-4'>
            <div class="mb-3 col-6">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3 col-6">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Teléfono" />
            </div>
          </div>
          <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="6"></textarea>
          <button>Enviar mensaje</button>
        </form>
      </div>
    </div>
  )
}
