/// Header.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from './shopping_icon.png'; // Ajustez le chemin de votre logo image
import Cart from './cart'; // Ajustez le chemin en fonction de la structure de vos dossiers
import {
  FaHome,
  FaStore,
  FaEnvelope,
  FaSignInAlt,
  FaShoppingCart,} from 'react-icons/fa';
import { useCart } from './CartContext'; // Ajustez le chemin en fonction de la structure de vos dossiers

const Header = () => {
  const { cart } = useCart();
  return (
    <header style={{ maxHeight: '60px', overflow: 'hidden' }}>

      <Navbar bg="dark" variant="dark" expand="lg" className="fixed-navbar">
        <Navbar.Brand href="#">
          <img
            src={logoImage}
            alt="Logo"
            width="70"
            height="50"
            className="d-inline-block align-top"
          />
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nvbCollapse" />
        <Navbar.Collapse id="nvbCollapse" className="justify-content-center">
          <Nav className="mr-auto">
            <Nav.Link href="#"><FaHome/> Home</Nav.Link>
            <Nav.Link as={Link} to="/shop"><FaStore/> Shop</Nav.Link>
            <Nav.Link href="#"><FaEnvelope/> Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#"><FaSignInAlt /> Login</Nav.Link>
            <Nav.Link as={Link} to="/cart"> <FaShoppingCart /> Cart ({cart.length})</Nav.Link>
          </Nav>
          <Cart />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
