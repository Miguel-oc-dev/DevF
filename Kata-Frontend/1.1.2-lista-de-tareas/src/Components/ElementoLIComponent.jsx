export default function ElementoLIComponent(
    { 
        textoTarea,
        accionBoton =() => {console.log('Boton presionado')} 
    }
){
    return <li>{textoTarea} <button onClick={accionBoton}>Completar</button></li>
}