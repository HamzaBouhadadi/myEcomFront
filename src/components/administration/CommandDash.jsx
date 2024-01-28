// CommandComponent.js
import React from 'react';
import './Component.css';

const CommandComponent = () => {
  return (
    <div className="component-container">
      <h3>Command Component</h3>

      {/* Command List */}
      <div className="command-list">
        <div className="command-item">
          <span>Command 1</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className="command-item">
          <span>Command 2</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        {/* Add more command items as needed */}
      </div>

      {/* Add Command Form */}
      <div className="add-command-form">
        <h4>Add New Command</h4>
        <form>
          <label htmlFor="commandName">Command Name:</label>
          <input type="text" id="commandName" name="commandName" />

          <label htmlFor="commandTotal">Command Total:</label>
          <input type="text" id="commandTotal" name="commandTotal" />

          <button type="submit">Add Command</button>
        </form>
      </div>
    </div>
  );
};

export default CommandComponent;
