import './App.css'
import ListaDeTareasComponent from './Components/ListaDeTareasComponent.jsx';

function App() {

  return (
    <>
      <ListaDeTareasComponent titulo = 'Trabajo' descripcion = 'Tareas del trabajo'/>
      <ListaDeTareasComponent titulo = 'Hogar'/>
      <ListaDeTareasComponent titulo = 'Escuela'/>
      <ListaDeTareasComponent titulo = 'Mascotas'/>
    </>
  )
}

export default App
