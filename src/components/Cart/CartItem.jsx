import React from 'react';

function CartItem({ name, description, price, imageUrl }) {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-3">
          <img src={imageUrl} alt={name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h5 className="mb-0">{name}</h5>
          <p className="mb-0">{description}</p>
        </div>
        <div className="col-md-3">
          <span className="font-weight-bold">{`$${price.toFixed(2)}`}</span>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
