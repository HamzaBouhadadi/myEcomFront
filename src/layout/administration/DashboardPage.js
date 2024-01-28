// DashboardPage.js
import React, { useState } from 'react';
import DashboardMenu from '../../components/administration/DashboardMenu';
import DashboardInfo from '../../components/administration/DashboardInfo';
import { Container, Row, Col } from 'react-bootstrap';
import './DashboardPage.css'

const DashboardPage = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const handleSelectMenuItem = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <DashboardMenu onSelectMenuItem={handleSelectMenuItem} selectedMenuItem={selectedMenuItem} />
        </Col>
        <Col md={9}>
          <DashboardInfo selectedMenuItem={selectedMenuItem} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
