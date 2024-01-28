import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from "./categoryCard";

function CategoriesPage() {
  // Assuming you have an array of category data
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 3, name: 'Category 3' },
    { id: 3, name: 'Category 3' },
    { id: 3, name: 'Category 3' },
    { id: 3, name: 'Category 3' },
    { id: 3, name: 'Category 3' },
    { id: 3, name: 'Category 3' },
    { id: 3, name: 'Category 3' },
    { id: 3, name: 'Category 3' },
    { id: 3, name: 'Category 3' },
    // Add more categories as needed
  ];

  return (
    <div className="container mt-5">
      <h2>All Categories</h2>

      <Row>
        {categories.map(category => (
          <Col key={category.id} xxl={3} xl={3} lg={3} md={6} sm={6} xs={6} className="mt-2 mb-2 text-center">
            <CategoryCard category={category} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CategoriesPage;
