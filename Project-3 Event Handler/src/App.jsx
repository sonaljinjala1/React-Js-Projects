import React, { useState } from 'react';
import FilterButtons from './FilterButtons';
import ProductCard from './ProductCard';
import productsData from './productsData';
import './App.css';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const categories = ['All', 'iPhone', 'Watch', 'AirPods', 'Mac'];

  const handleFilter = (category) => {
    if (category === 'All') {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(productsData.filter(product => product.category === category));
    }
  };

  return (
    <div className="app">
      <h1>Apple Store</h1>
      <FilterButtons categories={categories} onFilter={handleFilter} />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
