import React from 'react'
import ProductCard from '../Card/ProductCard'
import './ProductList.css'

const ProductList = ({ products, addToCart }) => {

  return (
    <div className='product-list'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}/>
          
        ))}
    </div>
  )
}

export default ProductList