import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About DMD Clothing</h3>
          <p className="footer-text">
            Premium quality formal wear for the modern professional. 
            Established with a commitment to excellence and style.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Shop Trousers</h3>
          <ul className="footer-links">
            <li><a href="#">Formal Trousers</a></li>
            <li><a href="#">Casual Trousers</a></li>
            <li><a href="#">Office Wear</a></li>
            <li><a href="#">Premium Collection</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Customer Service</h3>
          <ul className="footer-links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 DMD Clothing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

