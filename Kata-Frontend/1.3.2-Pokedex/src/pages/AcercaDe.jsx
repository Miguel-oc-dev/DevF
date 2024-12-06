import { NavLink } from "react-router-dom";

function AcercaDe(){
    return(
        <>
            <h1>Acerca de esta aplicación</h1>
            <p>Esta aplicación fue desarrollada como parte del modulo 5 Frontend de Dev.F</p>
            <NavLink to = '/'>Home</NavLink>
        </>
    )
}