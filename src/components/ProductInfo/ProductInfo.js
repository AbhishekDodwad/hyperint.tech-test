import React, { useState } from 'react';
import SizeSelector from '../SizeSelector/SizeSelector';
import ColorSelector from '../ColorSelector/ColorSelector';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import ProductDetails from '../ProductDetails/ProductDetails';
import './ProductInfo.css';

const ProductInfo = ({
  productData,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity
}) => {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <div className="product-info">
      <div className="rating-sales">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="star">★</span>
          ))}
        </div>
        <span className="rating-value">{productData.rating}</span>
        <span className="sales-text">{productData.sales}+ Units Sold</span>
      </div>

      <div className="pricing">
        <div className="price-row">
          <span className="original-price">₹ {productData.originalPrice}</span>
          <span className="discounted-price">₹ {productData.discountedPrice}</span>
          <span className="discount-badge">{productData.discount}% OFF</span>
        </div>
      </div>

      <div className="selection-section">
        <SizeSelector
          sizes={productData.sizes}
          selectedSize={selectedSize}
          onSelect={setSelectedSize}
        />

        <ColorSelector
          colors={productData.colors}
          selectedColor={selectedColor}
          onSelect={setSelectedColor}
        />

        <QuantitySelector
          quantity={quantity}
          onQuantityChange={setQuantity}
        />
      </div>

      {productData.isSoldOut && (
        <div className="sold-out-badge">
          <span>Sold Out</span>
        </div>
      )}

      <div className="payment-banner">
        <div className="payment-logo">Cashfree Payments</div>
      </div>

      <ProductDetails
        expandedSection={expandedSection}
        setExpandedSection={setExpandedSection}
      />
    </div>
  );
};

export default ProductInfo;

