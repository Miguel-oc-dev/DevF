import Header from '@/Components/Header'
import './App.css'
import RoutesIndex from '@/Routes/RoutesIndex'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App