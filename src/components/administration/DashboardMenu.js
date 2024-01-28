// DashboardMenu.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBox, faUsers, faTags } from '@fortawesome/free-solid-svg-icons';
import './DashboardMenu.css'; 


const DashboardMenu = ({ onSelectMenuItem, selectedMenuItem }) => {
  return (
    <div className="dashboard-menu">
      <h3 className="dashboard-name">Dashboard Name</h3>
      <Nav className="flex-column menu-items">
        <Nav.Item>
          <Nav.Link onClick={() => onSelectMenuItem('commands')} active={selectedMenuItem === 'commands'}>
            <FontAwesomeIcon icon={faShoppingCart} /> Commandes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => onSelectMenuItem('products')} active={selectedMenuItem === 'products'}>
            <FontAwesomeIcon icon={faBox} /> Produits
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => onSelectMenuItem('users')} active={selectedMenuItem === 'users'}>
            <FontAwesomeIcon icon={faUsers} /> Utilisateurs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => onSelectMenuItem('categories')} active={selectedMenuItem === 'categories'}>
            <FontAwesomeIcon icon={faTags} /> Catégories
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default DashboardMenu;
