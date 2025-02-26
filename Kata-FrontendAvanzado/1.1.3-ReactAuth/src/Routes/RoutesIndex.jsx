import { Routes, Route} from 'react-router-dom'
import { Home, Dashboard, Login, Secret, Singup} from '@/Pages'

const RoutesIndex = () => {
    return (
    <> 
        {/* COMPONENTE PRINCIPAL QUE ANIDA MIS RUTAS */}
        <Routes>
            {/* Defino una ruta especifica con Route */}
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/secret' element={<Secret />} />
            <Route path='/singup' element={<Singup />} />
        </Routes>
    </>
    )
}

export default RoutesIndex