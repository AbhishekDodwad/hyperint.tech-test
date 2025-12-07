import React from 'react';
import './QuantitySelector.css';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const decrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increase = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="quantity-selector">
      <label className="selector-label">Quantity</label>
      <div className="quantity-controls">
        <button className="quantity-btn" onClick={decrease}>−</button>
        <span className="quantity-value">{quantity}</span>
        <button className="quantity-btn" onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default QuantitySelector;

