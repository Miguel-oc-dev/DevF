//* 3) Crear un hook para usar o consummir el contexto de la lista de canciones.

import { SongContext } from "../Context/SongContext";
import { useContext } from "react";

// hacer el export de una función

export const useSongContext = () => {
    // guardo mi contexto en una constante
    const context = useContext(SongContext) // quiero usar mi contexto y esto lo guardo en context

    // si no hay contexto, si es un undefined (vacío), lanzo un error
    if(!context){
        throw new Error('useSongContext  debe ser usado dentro de SongProvider')
    }
    return context
}