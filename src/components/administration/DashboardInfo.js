// DashboardInfo.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryComponent from './CategoryDash';
import ProductComponent from './ProductDash';
import UserComponent from './UserDash';
import CommandComponent from './CommandDash'

const DashboardInfo = ({ selectedMenuItem }) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          {selectedMenuItem === 'categories' && <CategoryComponent />}
          {selectedMenuItem === 'products' && <ProductComponent />}
          {selectedMenuItem === 'users' && <UserComponent />}
          {selectedMenuItem === 'commands' && <CommandComponent />}
        </Col>
      </Row>
    </Container>
  );
};



export default DashboardInfo;
