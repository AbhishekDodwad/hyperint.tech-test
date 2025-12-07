import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ expandedSection, setExpandedSection }) => {
  const sections = [
    { id: 'features', title: 'Key Features', content: 'Premium lycra cotton blend, stretchable fabric, tailored fit, functional pockets, artisan stitching, office wear suitable.' },
    { id: 'sizeChart', title: 'Size Chart', content: 'Size 30: Waist 30", Size 32: Waist 32", Size 34: Waist 34", Size 36: Waist 36", Size 38: Waist 38", Size 40: Waist 40", Size 42: Waist 42", Size 44: Waist 44"' },
    { id: 'shipping', title: 'Shipping Policy', content: 'Free shipping on all orders. Standard delivery: 5-7 business days. Express delivery available.' },
    { id: 'return', title: 'Return / Exchange Policy', content: '7 days easy return policy. Items must be in original condition with tags attached. Free return shipping available.' },
    { id: 'vendor', title: "Vendor's Details", content: 'DMD Clothing - Premium formal wear manufacturer. Established 2010. Quality guaranteed.' },
    { id: 'description', title: 'Description', content: 'Premium formal trousers made from high-quality lycra cotton blend. Features stretchable fabric for comfort, tailored fit for professional appearance, and functional cross pockets. Perfect for office wear and formal occasions.' }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="product-details">
      {sections.map((section) => (
        <div key={section.id} className="detail-section">
          <button
            className={`detail-header ${expandedSection === section.id ? 'expanded' : ''}`}
            onClick={() => toggleSection(section.id)}
          >
            <span>{section.title}</span>
            <span className="arrow">{expandedSection === section.id ? '▲' : '▼'}</span>
          </button>
          {expandedSection === section.id && (
            <div className="detail-content">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;

