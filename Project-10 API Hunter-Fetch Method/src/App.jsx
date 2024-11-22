import React, { useState, useEffect } from 'react';
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products',
       { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setProducts(data.products); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  
  return (
    <div align="center">
      <h1>Product List-Fetch method</h1>
      <div style={styles.container}>
        {products.map(val => (
          <div key={val.id} style={styles.card}>
            <img src={val.thumbnail} alt={val.title} style={styles.image} />
            <h3>{val.title}</h3>
            <p>{val.description}</p>
            <p><strong>Price:</strong> ${val.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    width: '200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

export default App;
