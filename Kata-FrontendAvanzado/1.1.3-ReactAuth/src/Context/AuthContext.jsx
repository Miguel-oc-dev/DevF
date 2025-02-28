// useState -> lo usamos para tener un estado que me diga si estoy logueado o no
// useEffect -> lo usamos para revisar si hay un token y me lo cargue a mi estado

import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

//* 1) CREAR EL CONTEXTO 
const AuthContext = createContext() // creamos el contexto y mi contexto empieza vacío

//* 2) CREAR EL PROVIDER
// EL PROVIDER ES UN COMPONENTE QUE ENVUELVE A TODOS LOS COMPONENTES 
// QUE VAN A TENER ACCESO AL CONTEXTO


// eslint-disable-next-line react/prop-types
function AuthProvider ({children}) {
    const [isAuth, setIsAuth] = useState(false); // ¿Estoy autenticado/logeado? si o no
    const [userPayload, setUserPayload] = useState(null) //JWT payload decodificando - datos del usuario

const login = (token) => {
    // guardamos el token en el localStorage del navegador
    // este dato permane aún si el navegador o la pestaña se cierra y se vuelve abrir
    localStorage.setItem('token', token)
    const decode = jwtDecode(token) // decodificamos el payload del token
    setUserPayload(decode)
    setIsAuth(true) // ya iniciamos sesión? SI
}

const logout = () => {
    // eliminamos el token del localStorage del navegador
    localStorage.removeItem('token')
    setUserPayload(null) // borro el payload del estado
    setIsAuth(false) // cerramos sesión / estoy deslogueado
}

useEffect(() => {
    // recuperar el token del localStorage, si no existe devolver null (vacío)
    const token = localStorage.getItem('token') // recuperar token para leer datos getItem
    if(token){
        const decode = jwtDecode(token) // decodificamos el payload del token
        setUserPayload(decode)
        setIsAuth(true) // ya iniciamos sesión? SI
    }
},[])


  //mandamos el objeto
    const data = {
        isAuth,
        userPayload,
        login,
        logout
    }

    // el proveedor (provider) es un componente que envuelve a otros componentes
    // y le pasa un objeto con los datos que queremos compartir

    return (
        // return de un componente
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }