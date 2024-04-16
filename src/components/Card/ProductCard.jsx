import React, { useState } from 'react'
import ImageViewer from '../ImageViewer/ImageViewer'
import './ProductCard.css'


const ProductCard = ({ props }) => {

    const [showImages, setShowImages] = useState(false);

    const handleViewImages = () => {
        setShowImages(!showImages);
    }

    const addToCart = () => {
        console.log('Added to cart', props.title)
    }

  return (
    <div className="props-card">
        <div className="image-container">
            <img className='image' src={props.thumbnail} alt={props.title} />
        </div>
        <div className="details">
            <h3 className='title'>{props.title}</h3>
            <p>{props.description}</p>
            <p className='price'>$ {props.price}</p>
            <p>{props.category}</p>
            <button onClick={handleViewImages} className='btn'>View Images</button>
            {showImages && <ImageViewer images={props.images}/>}
        </div>
        <div className='cart-container'>
            <button className='cart' onClick={addToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard