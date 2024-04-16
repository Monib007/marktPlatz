import React from 'react'
import ProductCard from '../Card/ProductCard'
import './ProductList.css'

const ProductList = ({ products }) => {

  return (
    <div className='product-list'>
        {products.map(prop => (
          <ProductCard key={prop.id} props={prop}/>
          
        ))}
    </div>
  )
}

export default ProductList