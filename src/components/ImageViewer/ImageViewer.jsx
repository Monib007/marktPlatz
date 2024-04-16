import React from 'react'

const ImageViewer = ({ images }) => {

    const openImageInNewTab = (imageUrl) => {
        window.open(imageUrl, '_blank');
    }

  return (
    <div>
        {images.map((imageUrl, index) => (
            <button key={index} onClick={() => openImageInNewTab(imageUrl)}>
                Image{index+1}
            </button>
        ))}        
    </div>
  )
}

export default ImageViewer