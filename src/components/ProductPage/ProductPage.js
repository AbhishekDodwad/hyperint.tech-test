import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import ReviewsSection from '../ReviewsSection/ReviewsSection';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import Footer from '../Footer/Footer';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <Banner />
      <div className="product-page-container">
        <ProductDisplay />
        <ReviewsSection />
        <RelatedProducts />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

