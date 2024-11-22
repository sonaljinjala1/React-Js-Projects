import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from "react-icons/fa";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const Recipes = () => {
      axios({
        method: 'get',
        url: 'https://dummyjson.com/recipes',
      })
        .then((response) => {
          setRecipes(response.data.recipes);
        })
        .catch((error) => {
          setError(error.message);
        });
    };
    

    Recipes();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Recipe Collection</h1>
      <div className="row">
        {recipes.map(val => (
          <div className="col-md-4 mb-5" key={val.id}>
            <div className="card h-100 shadow-lg border-0">
              <img
                src={val.image}
                className="card-img-top"
                alt={val.name}
                style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{val.name}</h5>
                <p className="card-text"><strong>Description:</strong> {val.description}</p>
                <p className="card-text"><strong>Cooking Time:</strong> {val.cookingTime} mins</p>
                <p className="card-text"><strong>Ingredients:</strong> {val.ingredients.join(', ')}</p>
                <p className="card-text"><strong>Instructions:</strong> {val.instructions}</p>

                <div>
                  <strong>Rating: </strong>
                  {Math.round(val.rating)} {<FaStar  style={{ color: '#FFD700' }}/>}
                  <span className="ml-2">({val.totalReviews} reviews)</span> 
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
