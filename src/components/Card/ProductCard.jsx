import React, { useState } from 'react'
import ImageViewer from '../ImageViewer/ImageViewer'
import './ProductCard.css'


const ProductCard = ({ product, addToCart }) => {

    const [showImages, setShowImages] = useState(false);

    const handleViewImages = () => {
        setShowImages(!showImages);
    }

    const handleAddToCart = () => {
        addToCart(product);
        console.log('Added to cart', product.title)
    }

    //conditional rendering to check product & thumbnail exists
    if(!product || !product.thumbnail) {
        return <div>Error: Product data is missing or invalid</div>;
    }

  return (
    <div className="product-card">
        <div className="image-container">
            <img className='image' src={product.thumbnail} alt={product.title} />
        </div>
        <div className="details">
            <h3 className='title'>{product.title}</h3>
            <p>{product.description}</p>
            <p className='price'>$ {product.price}</p>
            <p>{product.category}</p>
            <button onClick={handleViewImages} className='btn'>View Images</button>
            {showImages && <ImageViewer images={product.images}/>}
        </div>
        <div className='cart-container'>
            <button className='cart' onClick={handleAddToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard