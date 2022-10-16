import React from 'react'
import '../App.scss'
export const Documentoss = () => {
  return (
    <div className='total'>
      <div className='pdf'>
        <div className='ph1'>
          <h3>Carrera</h3>
        </div>
        <div className='pb1'>
          <h5>Seleccione una Carrera:</h5>
          <select id="cert_docu" className='cert_docu'>
            <option value="0">Lista de carreras...</option>
            <option value="1">%carrera%</option>
          </select>
          <h5>Seleccione Semestre:</h5>
          <select id="id_semestre" className='id_semestre' disabled>
            <option value="2">%Semestre%</option>
          </select>
        </div>
      </div>
      <br></br><br></br>
      <div className='pdf'>
        <div>
          <div>
            <div className='helo'>
              <h3>Certificado Alumno regular</h3>
            </div>
          </div>
        </div>
        <div>
          <div className='ot'>
            <h4>Selecicona los fines del Certificado</h4>
            <br></br>
            <select>
              <option value="q">1</option>
              <option value="w">2</option>
              <option value="e">3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
