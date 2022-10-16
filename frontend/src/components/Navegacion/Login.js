import React from 'react'
import './../../styles/login.css';
import { Link } from 'react-router-dom';
import retrato from './../../assets/img/retrato.png';
import fondo from './../../assets/img/fondo.jpg';
import logo from './../../assets/img/UCT_logo.png';

export default function Login() {
  return (
    <div className='body'>
        <img className='Fondo' src={fondo} alt=''></img>
        <div className='Conteiner'>
            <img className='Img' src={logo} alt=''></img>
            <div className='login_container'>
                <form action='login.js' className='log'>
                    <img  className='retrato' src={retrato} alt=''></img>
                    <h2>Bienvenido</h2>
                    <div className='Imput_div one'>
                        <div className='i'>
                        </div>
                        <div>
                            <h5>Usuario</h5>
                            <input className='imput' type={'text'}></input>
                        </div>
                    </div>
                    <div className='Imput_div two'>
                        <div className='i'>
                        </div>
                        <div>
                            <h5>Contraseña</h5>
                            <input className='imput' type={'password'}></input>
                        </div>
                    </div>
                    <Link>Olvido la Contraseña</Link>
                    <a className='boton' href='/' >Iniciar</a>
                </form>
            </div>
        </div>
    </div>
  )
}

