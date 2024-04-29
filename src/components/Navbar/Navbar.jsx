import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ cartItems }) => {

  const cartItemCount = cartItems ? cartItems.length : 0;

  return (
    <div className='header'>
        <div className="logo">
            <h2>marktPlatz</h2>
        </div>
        <div className="links">
            <Link to='/' className='links-name'>Home</Link>
            <Link to='/cart' className='links-name'>Cart ({cartItemCount})</Link>
            <Link to='/orders' className='links-name'>Orders</Link>
            <Link to='/about' className='links-name'>About Us</Link>
            <Link to='/contact' className='links-name'>Contact</Link>
        </div>
        <div className="auth">
        <Link to='/signuplogin' className='signup'>SignUp/login</Link>
        </div>
    </div>
    
    
  )
}

export default Navbar