import React from 'react';
import Row from 'react-bootstrap/Row';
import ProductCard from './productCard';

function ProductsPage() {
  // Assuming you have an array of product data
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1.' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2.' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3.' },
    // Add more products as needed
  ];

  return (
    <div className="container mt-5">
      <h2>All Products</h2>

      <Row>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </div>
  );
}

export default ProductsPage;
