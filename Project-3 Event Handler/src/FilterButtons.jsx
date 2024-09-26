
import React from 'react';


const FilterButtons = ({ categories, onFilter }) => {
  return (
    <div className="filter-buttons">
      {categories.map((category, index) => (
        <button key={index} onClick={() => onFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
