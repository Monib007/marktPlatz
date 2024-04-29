import React from 'react'
import './Cart.css'

const Cart = ({ cartItems }) => {

    if(!cartItems || cartItems.length === 0){
        return (
            <div className="cart">
                <h2>Your Cart</h2>
                <p>No items in the cart</p>
            </div>
        )
    }

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className='cart'>
        <h2>Your Cart</h2>
        <ul>
            {cartItems.map(item => (
                <li key={item.id}>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                </li>
            ))}
        </ul>
        <div className="total">
            <span>Total : </span>
            <span>${totalPrice}</span>
        </div>
    </div>
  )
}

export default Cart