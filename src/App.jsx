
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
