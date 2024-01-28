// ProductComponent.js
import React from 'react';
import './Component.css';

const ProductComponent = () => {
  return (
    <div className="component-container">
      <h3>Product Component</h3>

      {/* Product List */}
      <div className="product-list">
        <div className="product-item">
          <span>Product 1</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className="product-item">
          <span>Product 2</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        {/* Add more product items as needed */}
      </div>

      {/* Add Product Form */}
      <div className="add-product-form">
        <h4>Add New Product</h4>
        <form>
          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" name="productName" />

          <label htmlFor="productPrice">Product Price:</label>
          <input type="text" id="productPrice" name="productPrice" />

          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductComponent;
