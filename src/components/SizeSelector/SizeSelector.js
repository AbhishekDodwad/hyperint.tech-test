import React from 'react';
import './SizeSelector.css';

const SizeSelector = ({ sizes, selectedSize, onSelect }) => {
  return (
    <div className="size-selector">
      <label className="selector-label">Size</label>
      <div className="size-grid">
        {sizes.map((size) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => onSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;

