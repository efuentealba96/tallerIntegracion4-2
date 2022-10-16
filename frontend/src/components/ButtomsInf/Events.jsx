import React from 'react'

export const ListadoDeCursos = () => {
  return (
    <div>
        <h1>Todos los Cursos</h1>
        <div className="dropdown ">
            <button className="btn btn-secondary dropdown-toggle p-2 d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Sel.Estado de Cursos
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {/* <li><a className="dropdown-item" href="#">Todos los Cursos</a></li>
                <li><a className="dropdown-item" href="#">Cursos Aprobados</a></li>
                <li><a className="dropdown-item" href="#">Cursos Reprobados</a></li> */}
            </ul>
        </div>
        {/* Insertar tabla de la BD */}

    </div>
  )
}
