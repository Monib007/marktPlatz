import React from 'react'
import './Cart.css'

const Cart = () => {

    const cartItems =  [
        {id:1, name: 'Product 1', price: 10},
        {id:1, name: 'Product 2', price: 20},
        {id:1, name: 'Product 3', price: 30},
    ]

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