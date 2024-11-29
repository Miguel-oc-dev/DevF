export default function ElementoLIComponent(
    { 
        textoTarea,
        accionBoton =() => {console.log('Boton presionado')},
        valorIndice
    }
){
    return <li>{textoTarea} <button onClick={() => accionBoton(key)}>Completar</button></li>
}