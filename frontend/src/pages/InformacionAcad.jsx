import React from 'react'
import { AcordeonesInfo } from '../components/AcordeonesInfo'
import '../App.scss'
export const InformacionAcad = () => {
  return (
    <div className='text-center bg-light col-xs-12 col-sm-6 col-md-8'><h2 className='text-uppercase fs-1'>Informacion Acádemica</h2>
    <p className='fs-5'>En esta sección encontrarás información académica: cursos inscritos, cursos aprobados, cursos reprobados, competencias genéricas y créditos de libre disposición</p>
    <AcordeonesInfo/>
    </div>
  )
}
