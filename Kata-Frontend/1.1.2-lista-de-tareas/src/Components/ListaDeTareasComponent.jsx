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

    // 2. Agregar el return con lo que se verá en pantalla
    return (
        <>
            <CabeceraListaTareasComponent titulo={titulo}/>
            <ListaDesordenadaComponent/>
        </>
    );
}

export default ListaDeTareasComponent;