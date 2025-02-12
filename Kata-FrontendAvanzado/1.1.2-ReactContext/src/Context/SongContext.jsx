import { createContext, useState, useEffect, Children } from "react";
import canciones from "../Utils/listaCanciones.json"

//* 1) Crear el contexto
const SongContext = createContext(); // Creamos el contexto y mi contexto empieza vacio

//* 2) Crear el provider
//El provider es un componente que envuelve a todos los componentes que van a tener acceso al contexto

function SongProvider(children){
    const [list, setList] = useState([]);// Estado que va a contener la lista de canciones
    const [loading, setLoading] = useState(true);// Esta cargando la lista de canciones?
    const [selectedSong, setSelectedSong] = useState({});// Estado que va a contener la canción

    // Simulamos la llamada a la API
    useEffect(() => {
        setTimeout(() => {
            setList(canciones)
            setLoading(false)//Cambio a false ya están cargando las canciones
        }, 2000);
    },[])

    const data = {list, 
                loading, 
                selectedSong,
                setSelectedSong
            }
    
    //El proveedor es un componente que envuelve a otros componentes y le pasa un objeto con los datos que queremos compartir
    return(
        <SongContext.Provider value = {data}>
            {children}
        </SongContext.Provider>
    )
}

export{ SongContext, SongProvider }