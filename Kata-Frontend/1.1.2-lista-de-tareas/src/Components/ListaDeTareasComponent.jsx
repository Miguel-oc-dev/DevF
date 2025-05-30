import { useState } from "react";

import ListaDesordenadaComponent from "./ListaDesordenadaComponents";
import CabeceraListaTareasComponent from "./CabeceraListaTareasComponent";

// 1. Crear la función del componente. 
function ListaDeTareasComponent({ titulo = 'Lista de tareas' }) {

/*  let persona = {
        nombre: 'Pedro',
        apellido: 'Paramo',
        edad: 45
    };

    let nombre = persona.nombre;
    let apellido = persona.apellido;
    let edad = persona.edad;

    let {nombre, apellido, edad} = persona; */

    /* useState() nos permite crear una variable de estado
        useState() nos regresa un arreglo. El primer elemento del arreglo es la variable de estado.
        El segundo elemento del arreglo es la función que nos permitirá modificar la variable de estado. 
        NO SE PUEDE modificar una variable de estado con el operador de asignación (=) */
    let [contador, setContador] = useState(0);
    let [tareas, setTareas] = useState([]);

    function modificarContador(e){
        setContador(contador + 1);
    }

    function completarTarea(indiceTareaAEliminar) {
        alert('Tarea completada');
        let tareasFiltradas = tareas.filter((tarea, index) => indiceTareaAEliminar != index);
        setTareas(tareasFiltradas);
    }

    function agregarTarea(nuevaTarea){
        alert('Agregando tarea');
        let tareasNuevas = [...tareas];
        tareasNuevas.push(nuevaTarea);
        setTareas(tareasNuevas);
    }

    // 2. Agregar el return con lo que se verá en pantalla
    return (
        <>
            <CabeceraListaTareasComponent titulo={titulo} eventoAgregarTarea={agregarTarea}/>
            <ListaDesordenadaComponent accionElementoLI={completarTarea} tareas={tareas}/>

            {/*
                <h1>Contador: {contador}</h1>
                <button onClick={ () => {modificarContador} }>Sumar a contador</button>
                <button onClick={ () => {setContador(contador + 1)} }>Sumar a contador</button>
            */}
        </>
    );
}

export default ListaDeTareasComponent;