import ElementoLIComponent from "./ElementoLIComponent";

export default function ListaDesordenadaComponent({ accionElementoLI, tareas }) {

    /*['Lavar ropa', 'Limpiar cajas de arena', 'Cocinar']
    'Lavar ropa' -> <ElementoLIComponent textoTarea={'Lavar ropa'}></ElementoLIComponent>
    'Limpiar cajas de arena' -> <ElementoLIComponent textoTarea={'Limpiar cajas de arena'}></ElementoLIComponent>
    'Cocinar' -> <ElementoLIComponent textoTarea={'Cocinar'}></ElementoLIComponent>*/

    return (
        <ul>
            { tareas.map((tarea) => <ElementoLIComponent textoTarea={tarea}></ElementoLIComponent>) }
        </ul>
    );
}