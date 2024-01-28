// UserComponent.js
import React from 'react';
import './Component.css';

const UserComponent = () => {
  return (
    <div className="component-container">
      <h3>User Component</h3>

      {/* User List */}
      <div className="user-list">
        <div className="user-item">
          <span>User 1</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className="user-item">
          <span>User 2</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        {/* Add more user items as needed */}
      </div>

      {/* Add User Form */}
      <div className="add-user-form">
        <h4>Add New User</h4>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default UserComponent;
