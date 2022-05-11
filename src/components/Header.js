import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'


//Componente header de la aplicacion, incluye un boton para ocultar/mostrar las tareas según su estado.
//Header component of the application, it includes a button to hide/show the tasks depending the state of it.

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {

    const toggleCompletadas = () => {
        cambiarMostrarCompletadas(!mostrarCompletadas)
    }

    return (

        <header className='header'>
            <h1 className='header__titulo'> Lista de Tareas</h1>
            {mostrarCompletadas ?

                <button
                    className='header__boton'
                    onClick={(e) => toggleCompletadas(e)}>
                    No mostrar tareas completadas
                    <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton' />
                </button>
                :
                <button className='header__boton'
                    onClick={(e) => toggleCompletadas(e)}>
                    Mostrar tareas completadas
                    <FontAwesomeIcon icon={faEye} className='header__icono-boton' />
                </button>
            }
        </header>
    )
}

export default Header