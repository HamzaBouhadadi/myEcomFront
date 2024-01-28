import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ProductCard({ product }) {
  const { id, name, description } = product;

  // Replace this with your logic to handle adding the product to the cart
  const addToCart = () => {
    // Add logic to handle adding the product to the cart
    console.log(`Product ${id} added to the cart`);
  };

  return (
    <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className='mt-2 mb-2'>
      <Card>
        <Link to={`/products/${id}`}>
          <Card.Img variant="top" src={`/assets/product.svg`} />
        </Link>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={`/products/${id}`} className="card-link">
            View Details
          </Link>
        </Card.Body>
        <Card.Body>
          <Button variant="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
