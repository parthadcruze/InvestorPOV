import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Place your image in src/assets/logo.png

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        <Link to="/">
    <img src={logo} alt="Investor POV" />
  </Link>
        
        </div>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/services" onClick={toggleMenu}>Products & Services</Link>
          <Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link>
          <Link to="/management" onClick={toggleMenu}>Management</Link>
          <Link to="/achievements" onClick={toggleMenu}>Achievements</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/account" onClick={toggleMenu}>Account / Sign In</Link>
        </div>

        <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
