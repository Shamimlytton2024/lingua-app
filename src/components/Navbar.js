import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Lingua App</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lesson">Lesson</Link></li>
        <li><Link to="/form">Form</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
