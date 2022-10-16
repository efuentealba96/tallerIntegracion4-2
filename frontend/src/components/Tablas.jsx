import React from 'react'
import '../App.scss'
export const TablaInfCar = () => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-8'>
    <table className="table table-hover table-responsive">
                <thead className="text-uppercase bg-primary text-warning">
                    <tr >
                    <th scope="col">Cód. Carrera</th>
                    <th scope="col">Nombre Carrera</th>
                    <th scope="col">Plan</th>
                    <th scope="col">Ingreso	Registro</th>
                    <th scope="col">Situación</th>
                    </tr>
                </thead>
                <tbody className="bg-light">
                    <tr>
                    <th>Insertar Cód. Carrera</th>
                    <td>Insertar Nombre Carrera</td>
                    <td>Insertar Plan</td>
                    <td>Insertar Ingreso	Registro</td>
                    <td>Insertar Situación</td>
                    </tr>
                </tbody>
            </table>
            </div>
  )
}
export const TablaInfEst = () => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-8'>
    <table className="table text-center table-hover table-responsive">
            <thead className="text-uppercase bg-primary text-warning">
                {/* Rut y Nombre */}
                <tr>
                <th scope="col">Rut</th>
                <th scope="col">Nombre</th>
                </tr>
            </thead>
            <tbody className="bg-light">
                {/* Insertar Rut y nombre del estudiante por BD */}
                <tr>
                <td>Inserte Rut</td>
                <td>Inserte Nombre</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
export const TablaListCur = () => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-8'>
    <table className="table bg-light table-hover table-responsive">
                <thead className='bg-secondary text-warning'>
                  {/* Items de tabla: Año	Semestre	Sigla	Nombre curso	Créditos	Nota */}
                  <tr>
                    <th scope="col">Año</th>
                    <th scope="col">Semestre</th>
                    <th scope="col">Sigla</th>
                    <th scope="col">Nombre curso</th>
                    <th scope="col">Créditos</th>
                    <th scope="col">Nota</th>
                  </tr>
                </thead>
                {/* Aqui debemos editar para que se actualice segun la BD */}
                <tbody>
                  <tr>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                  </tr>
                </tbody>
                  <tr>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                  </tr>
              </table>
              </div>
  )
}
export const TablaCredit = () => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-8'>
    <table className="table table-hover table-responsive">
                <tbody>
                  <tr>
                    <td>Total Créditos:</td>
                    <td>00</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Total Créditos Mínimos:</td>
                    <td>00</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Total Créditos Mínimos Aprobados:</td>
                    <td>00</td>
                  </tr>
                </tbody>
              </table>
              </div>
  )
}

export const TablaComp = () => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-8'>
    <table className="table bg-light table-hover">
                  <thead className='bg-secondary text-warning'>
                    <tr>
                      <th scope="col">Fecha</th>
                      <th scope="col">Sigla</th>
                      <th scope="col">Nombre Asignatura</th>
                      <th scope="col">Sección</th>
                      <th scope="col">Competencia</th>
                      <th scope="col">Nivel</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  {/* Editar segun BD */}
                  <tbody>
                    <tr>
                      <td>Insertar</td>
                      <td>Insertar</td>
                      <td>Insertar</td>
                      <td>Insertar</td>
                      <td>Insertar</td>
                      <td>Insertar</td>
                      <td>Insertar</td>
                    </tr>
                  </tbody>
                </table> 
                </div>
  )
}
export const ProdcText = () => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-8'>
    <table className="table bg-light table-hover">
                <thead className='bg-secondary text-warning'>
                  {/* Items de tabla: Año	Semestre	Sigla	Nombre curso	Créditos	Nota */}
                  <tr>
                    <th scope="col">Año</th>
                    <th scope="col">Semestre</th>
                    <th scope="col">Sigla</th>
                    <th scope="col">Nombre curso</th>
                    <th scope="col">Créditos</th>
                    <th scope="col">Nota</th>
                  </tr>
                </thead>
                {/* Aqui debemos editar para que se actualice segun la BD */}
                <tbody>
                  <tr>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                  </tr>
                </tbody>
              </table> 
              </div>
  )
}
export const TablaCargaAcad = () => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-8'>    
    <table className="table bg-light table-hover">
                <thead className='bg-secondary text-warning'>
                  {/* Items de tabla: Año	Semestre	Sigla	Nombre curso	Créditos	Nota */}
                  <tr>
                    <th scope="col">Año</th>
                    <th scope="col">Semestre</th>
                    <th scope="col">Sigla</th>
                    <th scope="col">Nombre curso</th>
                    <th scope="col">Sección</th>
                    <th scope="col">Creditos</th>
                    <th scope="col">Tipo</th>
                  </tr>
                </thead>
                {/* Aqui debemos editar para que se actualice segun la BD */}
                <tbody>
                  <tr>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                    <td>Insertar</td>
                  </tr>
                </tbody>
    </table> </div>
  )
}
export const TablaSalas = () => {
    return (
        <div className='col-xs-12 col-sm-6 col-md-8'>
        <table className="table table-info table-hover" border="3">
        <thead>
          <tr>
            <th scope="col">Sigla</th>
            <th scope="col">Curso</th>
            <th scope="col">Sección</th>
            <th scope="col">Sala</th>
            <th scope="col">Campus</th>
            <th scope="col">Día</th>
            <th scope="col">Horario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Insertar</td>
            <td>Insertar</td>
            <td>Insertar</td>
            <td>Insertar</td>
            <td>Insertar</td>
            <td>Insertar</td>
            <td>Insertar</td>
          </tr>
        </tbody>
      </table></div>
    )
  }
  export const Tablas3 = () => {
    return (
        <div className='col-xs-12 col-sm-6 col-md-8'>
      <div>Tablas</div></div>
    )
  }




