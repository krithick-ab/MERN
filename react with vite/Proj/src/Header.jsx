import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isHomePage }) {
  return (
    <header>
      <h1>Groc</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {isHomePage && <li><Link to="/login">Login</Link></li>}
        </ul>
      </nav>
    </header>
  );
}

export default Header;