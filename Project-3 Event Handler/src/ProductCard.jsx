
import React from 'react';


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs : {product.price.toLocaleString('en-IN')}</p>
    </div>
  );
};

export default ProductCard;
