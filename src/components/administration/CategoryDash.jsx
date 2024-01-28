// CategoryComponent.js
import React from 'react';
import './Component.css';

const CategoryComponent = () => {
  return (
    <div className="component-container">
      <h3>Category Component</h3>

      {/* Category List */}
      <div className="category-list">
        <div className="category-item">
          <span>Category 1</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className="category-item">
          <span>Category 2</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        {/* Add more category items as needed */}
      </div>

      {/* Add Category Form */}
      <div className="add-category-form">
        <h4>Add New Category</h4>
        <form>
          <label htmlFor="categoryName">Category Name:</label>
          <input type="text" id="categoryName" name="categoryName" />

          <button type="submit">Add Category</button>
        </form>
      </div>
    </div>
  );
};

export default CategoryComponent;
