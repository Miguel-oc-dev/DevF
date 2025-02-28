//* 3) Crear un hook para usar o consummir el contexto de Autenticación

import { useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";

// hacer el export de una función
export const useAuthContext = () => {
    // guardo mi contexto en una constante
    const context = useContext(AuthContext) // quiero usar mi contexto y esto lo guardo en context

    // si no hay contexto, si es un undefined (vacío), lanzo un error
    if(!context){
        throw new Error('useAuthContext  debe ser usado dentro de AuthProvider')
    }
    return context
}