import React, { useState } from 'react';
import './ProductImage.css';

const ProductImage = ({ features, thumbnails }) => {
  const [mainImage, setMainImage] = useState(0);

  return (
    <div className="product-image-container">
      <div className="thumbnail-list">
        {thumbnails.map((thumb, index) => (
          <div
            key={index}
            className={`thumbnail ${mainImage === index ? 'active' : ''}`}
            onClick={() => setMainImage(index)}
          >
            <img 
              src={thumb} 
              alt={`Thumbnail ${index + 1}`}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/100x150/667eea/ffffff?text=Product';
              }}
            />
          </div>
        ))}
      </div>
      
      <div className="main-image-wrapper">
        <div className="main-image">
          <img 
            src={thumbnails[mainImage] || 'https://images.unsplash.com/photo-1594938291221-94f313c0e69d?w=600'} 
            alt="Main product"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x800/667eea/ffffff?text=Product+Image';
            }}
          />
          
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-label"
              style={feature.position}
            >
              <div className="feature-arrow"></div>
              <div className="feature-text">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;

