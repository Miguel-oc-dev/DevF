import './App.css'
import ListaDeTareasComponent from './Components/ListaDeTareasComponent.jsx';

function App() {

  return (
    <>
      <ListaDeTareasComponent titulo = 'Trabajo' ejecutarContador={false}/>
      <ListaDeTareasComponent titulo = 'Hogar'/>
      <ListaDeTareasComponent titulo = 'Escuela'/>
      <ListaDeTareasComponent titulo = 'Mascotas'/>

      <ListaDeTareasComponent/>
    </>
  )
}

export default App
