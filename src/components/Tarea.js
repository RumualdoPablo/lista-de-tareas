import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons';


//Declaracion del componente "Tarea", para generar cada elemento individualmente. (Se importaron funcionenes como props{} desde el componente "ListaTareas")
//Declaration of the "Tarea"(Task) component, it generates each individual task/activity.(Some functions were imported as props{} from the component "ListaTareas"(ToDoList))
const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTarea(false);
    }

    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon icon={tarea.completada ? faCheckSquare : faSquare}
                className='lista-tareas__icono lista-tareas__icono-check'
                onClick={() => toggleCompletada(tarea.id)} />
            <div className='lista-tareas__texto'>
                {editandoTarea ?
                    <form action='' className='formulario-editar-tarea' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className='formulario-editar-tarea__input'
                            value={nuevaTarea}
                            onChange={(e) => cambiarNuevaTarea(e.target.value)}
                        />
                        <button type='submit' className='formulario-editar-tarea__btn'>Actualizar</button>
                    </form>
                    : tarea.texto
                }
            </div>
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon icon={faEdit} className='lista-tareas__icono lista-tareas__icono-editar'
                    onClick={() => cambiarEditandoTarea(true)} />
                <FontAwesomeIcon icon={faTimesCircle} className='lista-tareas__icono lista-tareas__icono-borrar'
                    onClick={() => borrarTarea(tarea.id)}
                />
            </div>
        </li>
    )
}

export default Tarea