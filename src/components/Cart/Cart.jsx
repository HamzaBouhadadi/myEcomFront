import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'; // Import the CartItem component

function Cart() {
  const cartItems = [
    { name: 'Product 1', description: 'Description of Product 1.', price: 50.00, imageUrl: '/assets/product.svg' },
    { name: 'Product 1', description: 'Description of Product 1.', price: 50.00, imageUrl: '/assets/product.svg' },
    { name: 'Product 1', description: 'Description of Product 1.', price: 50.00, imageUrl: '/assets/product.svg' },
  ];

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>

      <div className="row mt-3">
        <div className="col-md-8">
          {/* Cart Items */}
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <CartItem key={index} {...item} />
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          {/* Cart Summary */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cart Summary</h5>
              <p className="card-text">{`Total Items: ${cartItems.length}`}</p>
              <p className="card-text">{`Total Price: $${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}`}</p>
              <Button variant="primary">Checkout</Button>
            </div>
          </div>
        </div>
      </div>

      <Link to="/" className="btn btn-secondary mt-3">Home</Link>
    </div>
  );
}

export default Cart;
