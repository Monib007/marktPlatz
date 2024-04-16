import React from 'react'

const Cart = ({ cartItems }) => {

    const calculateTotal= (cartItems) => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
    }

  return (
    <div className='cart'>
        <h1>Shopping Cart</h1>
        <div className="cart-items">
            {cartItems.map(item => (
                <div className="cart-item">
                    <img src={item.image} alt="" />
                    <div className="item-details">
                        <h3>{item.name}</h3>
                        <p>$ {item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="cart-total">
            <h3>Total Amount : ${calculateTotal(cartItems)}</h3>
            <button>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default Cart