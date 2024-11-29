import { useState } from "react";

function CabeceraListaTareasComponent({ titulo = 'Titulo provisional', eventoAgregarTarea}) {
    
    let [entradaTexto, setEntradaTexto] = useState('Escribe tu tarea aqui');

    return (
        <>
            <h1>{titulo}</h1>
            <label>Tarea: </label> <input type='text' value={entradaTexto} onChange={(event) => {setEntradaTexto(event.target.value)}} />
            <button onClick={() => {eventoAgregarTarea(entradaTexto)}}>Agregar tarea</button>
        </>
    );
}

export default CabeceraListaTareasComponent;