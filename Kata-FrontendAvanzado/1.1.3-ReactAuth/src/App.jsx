import Header from '@/Components/Header'
import './App.css'
import RoutesIndex from '@/Routes/RoutesIndex'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/Context/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App