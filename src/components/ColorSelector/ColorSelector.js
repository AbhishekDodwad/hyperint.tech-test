import React from 'react';
import './ColorSelector.css';

const ColorSelector = ({ colors, selectedColor, onSelect }) => {
  return (
    <div className="color-selector">
      <label className="selector-label">Color</label>
      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`color-button ${selectedColor === color.name ? 'selected' : ''}`}
            onClick={() => onSelect(color.name)}
          >
            <div
              className="color-swatch"
              style={{ backgroundColor: color.hex }}
            ></div>
            <span className="color-name">{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;

