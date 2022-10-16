import React from 'react'
import { BsFillFilePdfFill } from "react-icons/bs";
import '../App.scss';
import { ProdcText, TablaCargaAcad, TablaComp, TablaCredit, TablaInfCar, TablaInfEst, TablaListCur, TablaSalas } from './Tablas';
export const AcordeonesInfo = () => {
  return (
    <div className="accordion w-100 col-xs-12 col-sm-6 col-md-8" id="accordionExample">
  {/* Acordeon 1 */}
  <div className="accordion-item w-100 col-xs-12 col-sm-6 col-md-8">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button bg-primary text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Historia Académica
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse w-100 col-xs-12 col-sm-6 col-md-8" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      {/* Dentro del acordeon 1*/}
      <div className="accordion-body w-100 col-xs-12 col-sm-6 col-md-8">
        <p>Elige una carrera para consultar las notas de los cursos que has realizado en la Universidad Católica de Temuco.</p>
        <h2>Información del Estudiante</h2>
        {/* Inicio tabla informacion estudiante */}
        <TablaInfEst/>
        {/* Fin tabla Informacion estudiante */}
        <h2>Información de la Carrera</h2>
        {/* Inicio Tabla Info carrera (Editar para uso de BD)*/}
        <TablaInfCar/>
        {/* Fin tabla Info carrera */}
        {/* Acordeones: Listado de cursos competencias Prueba produccion de texto avance curricular Prom.Historia academica(icon) */}
        {/* Div que engloba los acordeones */}
        <div className='w-100 col-xs-12 col-sm-6 col-md-8'>
        {/*  Listado Cursos */}
        <div className="accordion w-100 col-xs-12 col-sm-6 col-md-8" id="accordionExample">
          <div className="accordion-item w-100 col-xs-12 col-sm-6 col-md-8">
            <h2 className="accordion-header" id="headingOneList">
              {/* Editar Estilos del acordeon */}
              <button className="accordion-button bg-primary text-white w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneList" aria-expanded="true" aria-controls="collapseOneList">
                Listado de cursos
              </button>
            </h2>
            <div id="collapseOneList" className="accordion-collapse collapse w-100 col-xs-12 col-sm-6 col-md-8" aria-labelledby="headingOneList">
              <div className="accordion-body">
              <TablaListCur/>
              {/* Tabla con creditos y demas */}
              <div className='tabla de creditos col-xs-12 col-sm-6 col-md-8'>
              <TablaCredit/>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* Acordeon Competencias */}
        <div className="accordion w-100 col-xs-12 col-sm-6 col-md-8" id="accordionExample">
          <div className="accordion-item w-100 col-xs-12 col-sm-6 col-md-8">
            <h2 className="accordion-header" id="headingTwoList">
              {/* Editar Estilos del acordeon */}
              <button className="accordion-button bg-warning text-dark w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoList" aria-expanded="true" aria-controls="collapseTwoList">
                Competencias
              </button>
            </h2>
            <div id="collapseTwoList" className="accordion-collapse collapse w-100 col-xs-12 col-sm-6 col-md-8" aria-labelledby="headingTwoList">
              <div className="accordion-body w-100 col-xs-12 col-sm-6 col-md-8">
                {/* Tabla Competencias (Editar para uso de BD)*/}
                <TablaComp/> 
              </div>
            </div>
          </div>
        </div>
        {/* Acordeon Prueba Produccion de texto*/}
        <div className="accordion col-xs-12 col-sm-6 col-md-8" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThreeList">
              {/* Editar Estilos del acordeon */}
              <button className="accordion-button bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeList" aria-expanded="true" aria-controls="collapseThreeList">
                Prueba produccion de texto
              </button>
            </h2>
            <div id="collapseThreeList" className="accordion-collapse collapse" aria-labelledby="headingThreeList">
              <div className="accordion-body">
                {/* Tabla Produc. de texto (Editar para uso de BD) */}
                <ProdcText/>
              </div>
            </div>
          </div>
        </div>
        {/* Agregar funcion al boton */}
        <button type="button" className="btn btn-primary text-uppercase">Avance Curricular <BsFillFilePdfFill/></button>
        {/* Agregar funcion al boton */}
        <button type="button" className="btn btn-primary text-uppercase">Historia ACADÉMICA <BsFillFilePdfFill/></button>
        </div>
      </div>
    </div>
  </div>
  {/* Acordeon 2 */}
  <div className="accordion-item col-xs-12 col-sm-6 col-md-8">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed bg-primary text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Cursos Inscritos
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse col-xs-12 col-sm-6 col-md-8" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      {/* Dentro del acordeon 2 */}
      <div className="accordion-body col-xs-12 col-sm-6 col-md-8">
        <p>Al seleccionar una carrera se cargará el año y el semestre actual que estas cursando, sin embargo, puedes modificar el año y el semestre para consultar otras cargas académicas. Al hacer click en el boton 'Generar Certificado', se genererá un archivo con extension .PDF que posee toda la información de tus cursos inscritos.</p>
        <p className='text-uppercase text-start'><strong>Seleccione una Carrera:</strong></p>
        {/* Boton desplegable Selccion de carreara */}
        <div className="dropdown text-start col-xs-12 col-sm-6 col-md-8">
          <button type="button" className="btn btn-outline-secondary dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Elegir Carrera
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {/* Editar para el uso de BD */}
            <li><a className="dropdown-item" href="#">Nombre de carrera</a></li>
          </ul>
        </div>
        {/* Div que debe aparecer y desaparecer segun el boton anterior */}
        <div className='w-100 col-xs-12 col-sm-6 col-md-8'>
          <h2 className='text-uppercase fs-5'><strong>Información de la Carrera</strong></h2>
          {/* Inicio Tabla Info carrera (actualizar para la BD)*/}
            <TablaInfCar/>
        {/* Fin tabla Info carrera */}
        <p className='text-uppercase text-start'><strong>Completa el siguiente formulario:</strong></p>
        <p className='w-100'>Ingresa un año y/o un semestre, luego haz clic en 'Ver Carga Académica' para ver los resultados en pantalla o en 'Generar PDF' para generar un documento el cual podras imprimir.</p>
        {/* Div texto */}
        <div className='text-start col-xs-12 col-sm-6 col-md-8'>
        <div className='btn-group col-xs-12 col-sm-6 col-md-8'>
        <p className='text-uppercase'><strong>Ingrese año</strong></p>
          &emsp;
        <p className='text-uppercase'><strong>Ingrese Semestre</strong></p>
        </div>
        </div>
        {/* Div botones */}
        <div className='text-start col-xs-12 col-sm-6 col-md-8'>
        <div className="btn-group col-xs-12 col-sm-6 col-md-8">
        {/* Boton Ingrese año */}
        <input type="text" className="form-control text-center w-25" placeholder="año" aria-label="año" aria-describedby="basic-addon1"/>  
        {/* Boton Ingrese Semestre */}
        &ensp;
        <div className="dropdown text-start col-xs-12 col-sm-6 col-md-8">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Ingrese Semestre
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Primer Semestre</a></li>
              <li><a className="dropdown-item" href="#">Segundo Semestre</a></li>
            </ul>
        </div>
        &ensp;
        <button type="button" className="btn btn-primary">Ver carga Academica</button>
        &ensp;
        <button type="button" className="btn btn-primary">Generar PDF<BsFillFilePdfFill/></button>
        </div>
        </div>
        <h2>Carga Académica</h2>
        <TablaCargaAcad/>
        <p className='fs-3'><strong className='text-info'>Salas Asignadas</strong></p>
        <TablaSalas/>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
