//* 3) Crear un hook para usar o consumir el contexto de la lista de canciones

import { SongContext } from "../Context/SongContext";
import { useContext } from "react";

// Hacer el export de una función
export const useSongContext = () => {
    // Guardo mi contexto en una constante
    const context = useContext(SongContext) // Quiero usar mi contexto y esto lo guardo en contexto

    // Si no hay contexto, si es Undefined, lanza un error
    if(!context){
        throw new Error('useSongContext debe ser usado dentro de SongProvider')
    }
    return context
}