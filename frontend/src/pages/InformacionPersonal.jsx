import React from 'react'
import { AcordeonesInfo } from '../components/AcordeonesInfo'
export const InformacionPersonal = () => {
  return (
    <div className='text-center bg-light'><h2 className='text-uppercase fs-1'>Informacion Personal</h2>
    <p className='fs-5'>En esta sección encontrarás información académica: cursos inscritos, cursos aprobados, cursos reprobados, competencias genéricas y créditos de libre disposición</p>
    <AcordeonesInfo/>
    </div>
  )
}
