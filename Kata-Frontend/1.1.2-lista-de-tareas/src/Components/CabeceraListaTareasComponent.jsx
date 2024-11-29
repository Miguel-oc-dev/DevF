function CabeceraListaTareasComponent({ titulo = 'Titulo provisional', eventoAgregarTarea}) {
    
    return (
        <>
            <h1>{titulo}</h1>
            <label>Tarea: </label> <input type='text' />
            <button onClick={() => {agregarTarea('Nueva tarea')}}>Agregar tarea</button>
        </>
    );
}

export default CabeceraListaTareasComponent;