import React, { useEffect, useState } from 'react'
import ProductList from '../Products/ProductList';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = ({ setCartItems }) => {

  const [products, setProducts] = useState([]);
  const [cartItems, setLocalCartItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    try {
      const response = await fetch('https://dummyjson.com/products')
      if(!response.ok) {
        throw new Error ('Failed to fetch products');
      }
      const jsonData = await response.json();
      setProducts(jsonData.products);
      console.log(jsonData)
    } catch(error) {
      console.error('Error fetching products', error);
    }
  };

  const addToCart = (product) => {
    setLocalCartItems([...cartItems, product]);
    setCartItems([...cartItems, product]);
  }

  return (
    <div className="home-page">
      <header className=''>
        <h1>Welcome to our E-commerce Store!</h1>
      </header>
      <main className='card'>
        <section className="featured-products">
          <h2>Featured Products</h2>
          <ProductList products={products} addToCart={addToCart}/>
        </section>
        
      </main>

      <footer>
        <p>&copy; 2024 E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home