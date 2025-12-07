import React, { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductInfo from '../ProductInfo/ProductInfo';
import './ProductDisplay.css';

const ProductDisplay = () => {
  const [selectedSize, setSelectedSize] = useState('38');
  const [selectedColor, setSelectedColor] = useState('CHARCOAL BLACK');
  const [quantity, setQuantity] = useState(1);

  const productData = {
    name: "Lycra Cotton Stretchable Plain Formal Trousers | Polo Fit Office Wear for Men's Charcoal Black",
    brand: "DMD",
    rating: 5.0,
    sales: 500,
    originalPrice: 1849,
    discountedPrice: 1349,
    discount: 27,
    isSoldOut: true,
    sizes: ['30', '32', '34', '36', '38', '40', '42', '44'],
    colors: [
      { name: 'CHARCOAL BLACK', hex: '#2c2c2c' },
      { name: 'BLACK', hex: '#000000' }
    ],
    features: [
      { label: 'Tailored Fit Waistband', position: { top: '15%', left: '10%' } },
      { label: 'Artisan Stitch Precision', position: { top: '25%', right: '15%' } },
      { label: 'Functional Cross Pockets', position: { bottom: '20%', left: '12%' } },
      { label: 'Premium Natural Weave', position: { bottom: '15%', right: '10%' } }
    ]
  };

  return (
    <div className="product-display">
      <div className="product-header">
        <div className="brand-logo">
          <span className="brand-text">{productData.brand}</span>
        </div>
        <h1 className="product-name">{productData.name}</h1>
      </div>
      
      <div className="product-content">
        <ProductImage 
          features={productData.features}
          thumbnails={[
            'https://image.cdn.shpy.in/438426/CharcoalBlack-1764068893845.png?format=webp',
              'https://image.cdn.shpy.in/438426/CharcoalBlack4-1764068895409.png?format=webp',
              'https://image.cdn.shpy.in/438426/CharcoalBlack3-1764068896062.png?format=webp',
              'https://image.cdn.shpy.in/438426/CharcoalBlack2-1764068897060.png?format=webp',
              'https://image.cdn.shpy.in/438426/CharcoalBlack6-1764068897951.png?format=webp'

          ]}
        />
        
        <ProductInfo 
          productData={productData}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
    </div>
  );
};

export default ProductDisplay;

