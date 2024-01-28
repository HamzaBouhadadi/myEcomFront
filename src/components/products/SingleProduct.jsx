import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MainLayout from '../../layout/main';

function SingleProductPage() {
  const { productId } = useParams();

  // Replace this with your actual data fetching logic
  const getProductDetails = (id) => {
    // Example data structure, replace with actual data fetching logic
    return {
      id: id,
      name: `Product ${id}`,
      description: `Description of Product ${id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan suscipit est ut fermentum.`,
      price: 50.00, // Add the price property
      // Add more details as needed
    };
  };

  const productDetails = getProductDetails(productId);

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <MainLayout>
    <div className="container mt-5">
      <h2>{productDetails.name}</h2>

      <Card>
        <div className="row">
          <div className="col-md-6">
            <Card.Img variant="top" src={`/assets/product.svg`} />
          </div>
          <div className="col-md-6">
            <Card.Body>
              <Card.Title>{productDetails.name}</Card.Title>
              <Card.Text>{productDetails.description}</Card.Text>
              <Card.Text>Price: ${productDetails.price.toFixed(2)}</Card.Text>
              {/* You can add more details here */}
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
    </MainLayout>
  </>
  );
}

export default SingleProductPage;
