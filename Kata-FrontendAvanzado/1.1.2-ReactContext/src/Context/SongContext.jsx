import { createContext, useState, useEffect } from "react"
import canciones from "../Utils/listaCanciones.json";

//* 1) CREAR EL CONTEXTO 
const SongContext = createContext() // creamos el contexto y mi contexto empieza vacío

//* 2) CREAR EL PROVIDER
// EL PROVIDER ES UN COMPONENTE QUE ENVUELVE A TODOS LOS COMPONENTES 
// QUE VAN A TENER ACCESO AL CONTEXTO

// eslint-disable-next-line react/prop-types
function SongProvider ({children}) {
    const [list, setList] = useState([]); // estado que va a contener la lista de canciones
    const [loading, setLoading] = useState(true); // ¿está cargando la lista de canciones?
    const [selectedSong, setSelectedSong] = useState({}); // estado que va a contener la cancion seleccionada
    const [search, setSearch] = useState('') // identifica la palabara que pongo en el buscador
    
    // simulamos la llamada a la API
    useEffect(() => {
        setTimeout(() => {
            setList(canciones)
           setLoading(false) // cambia a false xk ya están cargando las canciones
        }, 2000)
    }, [])

      //mandamos un objeto
        const data = {
            list,
            loading,
            selectedSong,
            setSelectedSong,
            search,
            setSearch
        }

    // el proveedor (provider) es un componente que envuelve a otros componentes
    // y le pasa un objeto con los datos que queremos compartir

    return (
        // return de un componente
    <SongContext.Provider value={data}>
        {children}
    </SongContext.Provider>
    )
}

export { SongContext, SongProvider }