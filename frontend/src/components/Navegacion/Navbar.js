import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar  ()  {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/Inicio'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Calendario'>Calendario</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Dara'>Dara</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled">Disabled</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

