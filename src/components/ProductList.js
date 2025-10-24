import React from 'react';
import useFetch from '../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error occurred!</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="products-container">
      <h1># Photos</h1>
      <div className="products-grid">
        {products && products.slice(0, 8).map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-placeholder">
              600 x 600
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">
                {product.description || 'No description available'}
              </p>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;