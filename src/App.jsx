
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home setCartItems={setCartItems}/>}/>
      <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
