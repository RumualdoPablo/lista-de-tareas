import React from "react";
import Tarea from "./Tarea";

//Componente contenedor para las tareas a realizar.

const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {

    //Funciones para hacer modificaciones a la lista de tareas de manera dinamica para el usuario

    const toggleCompletada = (id) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return { ...tarea, completada: !tarea.completada }
            } return tarea;
        }));
    }

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return { ...tarea, texto: nuevoTexto }
            } return tarea;
        }));
    }

    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter((tarea) => {
            if (tarea.id !== id) {
                return tarea;
                // eslint-disable-next-line array-callback-return
            } return;
        }));
    }


    //return que mostrará el array de tareas del usuario, teniendo en cuenta el estado de las mismas
    return (
        <ul className="lista-tareas">
            {tareas.length > 0 ?
                tareas.map((tarea) => {
                    if (mostrarCompletadas) {
                        return <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />
                    //Si la tarea está incompleta, la devuelve
                    } else if (!tarea.completada) {
                        return <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />
                    //Si la tarea está completa, no la devuelve
                        // eslint-disable-next-line array-callback-return
                    } return;
                })
                : <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
            }
        </ul>
    );
}

export default ListaTareas;