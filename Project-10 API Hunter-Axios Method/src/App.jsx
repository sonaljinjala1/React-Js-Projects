// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdStar } from "react-icons/io";


function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        setRecipes(response.data.recipes); // Assuming recipes are under "recipes" key
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Function to render star images based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 !== 0; // Check if there's a half star

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoMdStar   style={{ color: 'yellow', fontSize: '20px' }}/>);
    }

    if (halfStar) {
      stars.push(<IoMdStar  style={{ color: 'yellow' , fontSize: '20px'}} />);
    }

    // If there are less than 5 stars, fill the remaining with empty stars
    for (let i = stars.length; i < 5; i++) {
      stars.push(<IoMdStar  style={{ color: 'gray' , fontSize: '20px' }} />);
    }

    return stars;
  };

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Recipe Collection</h1>
      <div className="row">
        {recipes.map(recipe => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div className="card h-100 shadow-sm border-0">
              <img 
                src={recipe.image} 
                className="card-img-top" 
                alt={recipe.name} 
                style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text"><strong>Description:</strong> {recipe.description}</p>
                <p className="card-text"><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
                <p className="card-text"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                <p className="card-text"><strong>Instructions:</strong> {recipe.instructions}</p>
                
                <div>
                  <strong>Rating: </strong>
                  {renderStars(recipe.rating)} {/* Display stars */}
                  <span className="ml-2">({recipe.totalReviews} reviews)</span> {/* Display total reviews */}
                </div>
              </div>
              <div className="card-footer bg-transparent border-0">
                <button className="btn btn-primary btn-block">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
