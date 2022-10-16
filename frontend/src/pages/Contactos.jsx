import React from 'react'
import '../App.scss'
export const Contactoss = () => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-8'>
        <h2 className='text-center'><span>Contactos</span></h2>
        <div className='m-0 row justify-content-center col-xs-12 col-sm-6 col-md-8'><p className="text-center border border-primary w-25" >
        ¿Necesitas apoyo académico o socioemocional? Pídelo en:
        <br />
        <a href="https://dgia.uct.cl/daas">https://dgia.uct.cl/daas</a>
        </p></div>
        <div className='m-0 row justify-content-center col-xs-12 col-sm-6 col-md-8'><p className="text-center border border-primary w-25" >
        Electivos de formación para la diversidad (DDO) y créditos RASS, <a href="mailto:dfhc@uct.cl">dfhc@uct.cl</a> y <a href="http://dfhc.uctemuco.cl">http://dfhc.uctemuco.cl</a>
        </p></div>
        <div className='m-0 row justify-content-center col-xs-12 col-sm-6 col-md-8'><p className="text-center border border-primary w-25" >
        Registros académicos, títulos, grados, certificados, y otros trámites (No disponibles a traves de este portal) <a href="mailto:dara@uct.cl">dara@uct.cl</a>
        </p></div>
        <div className='m-0 row justify-content-center col-xs-12 col-sm-6 col-md-8'><p className="text-center border border-primary w-25" >
        Beneficios estudiantiles (gratuidad, becas y otros)
        <br /> <a href="bienestarestudiantil@uct.cl">bienestarestudiantil@uct.cl</a>
        </p></div>
        <div className='m-0 row justify-content-center col-xs-12 col-sm-6 col-md-8'><p className="text-center border border-primary w-25" >
        Deuda de arancel y/o matrícula, crédito o similares
        <br /> <a href="mailto:tesoreriauct@uct.cl">tesoreriauct@uct.cl</a>
        </p></div>
        <div className='m-0 row justify-content-center col-xs-12 col-sm-6 col-md-8'><p className="text-center border border-primary w-25" >
        Consultas sobre el uso libros, revistas digitales y otras consultas de la Biblioteca
        <br /> <a href="mailto:biblioteca@uct.cl">biblioteca@uct.cl</a>
        </p></div>
        <div>
            {/* Quizas insertar Contactos relacionados con la carrera */}
        </div>
    </div>
  )
}
