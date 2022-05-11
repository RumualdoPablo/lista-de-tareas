import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import {v4 as uuidv4} from 'uuid';

//Declaracion del componente FormularioTareas, se le pasaron dos props{} desde ListaTareas
//Declaration of the FormularioTareas(TasksForm) component, two props{} were imported from ListaTareas
const FormularioTareas = ({tareas, cambiarTareas}) => {
    
    //Configuración del input para añadir las tareas
    //Configuration of the input to add tasks
    const [inputTarea, cambiarInputTarea] = useState()
    const handleInput = (e) =>{
        cambiarInputTarea(e.target.value);

    }

    //Se establece el formato y propiedades del objeto tarea
    //Stablish the format and props of the task object
    const handleSubmit = (e) =>{
        e.preventDefault();
        cambiarTareas(
            [...tareas, {
                id: uuidv4(),
                texto: inputTarea,
                completada: false,
            }
        ])
        //Borra la cadena de texto una vez que se añade la tarea al array
        //Deletes the string once the task is added to the array
        cambiarInputTarea("")
    }


    //Devuelve, debajo del Header, el formulario con el input para poder añadir las tareas.
    //Returns, below the Header, the form with the input to add the tasks.
    return (
        <form className='formulario-tareas' onSubmit={handleSubmit}>
            <input
                type="text"
                className='formulario-tareas__input'
                placeholder='Escribe una tarea'
                value={inputTarea}
                onChange={(e) => handleInput(e)}
            />
            <button 
                type='submit'
                className='formulario-tareas__boton'>
                <FontAwesomeIcon icon={faPlusSquare} className='formulario-tareas__icono'/>
            </button>
        </form>
    )
}

export default FormularioTareas