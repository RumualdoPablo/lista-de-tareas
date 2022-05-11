import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

const App = () => {

  //Obtener las tareas guardadas en el LocalStorage
  //Get the tasks stored in the LocalStorage
  const tareasGuardadas = 
  localStorage.getItem("tareas") ? JSON.parse(localStorage.getItem("tareas"))
  : [];

  //Establece el estado de las tareas
  //Sets up the state of the tasks
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  //Guarda el estado dentro del LocalStorage
  //Stores the state inside of the LocalStorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    
  }, [tareas]);

  //Accede al LocalStorage y comprueba si mostrarCompletadas, es null
  //Access to the LocalStorages and checks if mostrarCompletadas(showCompleted) is null
  let configMostrarCompletadas = "";
  if(localStorage.getItem("mostrarCompletadas" === null)) {
    configMostrarCompletadas = true;
  } else{
    configMostrarCompletadas = localStorage.getItem("mostrarCompletadas") === "true"
  }

  //Establece solo mostrar las tareas completadas
  //Stablish to show only the completed tasks
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
    
  }, [mostrarCompletadas]);


  //Devuelve en pantalla todos los componentes de la lista
  //Returns in screen all the components from the "to do List"
  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas} />
    </div>
  );
}

export default App;
