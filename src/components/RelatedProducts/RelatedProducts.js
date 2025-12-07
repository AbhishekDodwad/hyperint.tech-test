import React from 'react';
import './RelatedProducts.css';

const RelatedProducts = () => {
  const relatedProducts = [
    {
      name: "DMD Lycra Cotton Stretchable Plain Formal Trousers | Polo Fit Office Wear For Men's Charcoal Black",
      image: 'https://image.cdn.shpy.in/438426/CaramelCream-1764069036096.png?format=webp',
      rating: 5,
      discount: 50,
      originalPrice: 2000,
      discountedPrice: 1000
    }
  ];

  return (
    <div className="related-products">
      <h2 className="related-title">You May Also Like</h2>
      <div className="products-grid">
        {relatedProducts.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image-wrapper">
              <img 
                src={product.image} 
                alt={product.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x400/667eea/ffffff?text=Product';
                }}
              />
              <div className="discount-badge-overlay">{product.discount}% OFF</div>
            </div>
            <div className="product-card-info">
              <h3 className="product-card-name">{product.name}</h3>
              <div className="product-card-rating">
                {[...Array(product.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <div className="product-card-pricing">
                <span className="original-price-small">₹ {product.originalPrice}</span>
                <span className="discounted-price-small">₹ {product.discountedPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

