
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  )
}

export default App
