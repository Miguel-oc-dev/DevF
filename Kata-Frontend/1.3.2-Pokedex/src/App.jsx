import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    console.log('Pokédex');
  }, []);
  
  return(
    <>
      <h1>Pokédex</h1>
    </>
  )
}

export default App
