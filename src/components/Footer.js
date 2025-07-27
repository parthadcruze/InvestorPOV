import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-glass">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Investor POV</h2>
          <p>Your trusted partner in smart investment decisions.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/management">Management</a></li>
            <li><a href="/account">Account</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><i className="fas fa-envelope"></i> support@investorpov.com</p>
          <p><i className="fas fa-phone"></i> +91 98765 43210</p>
        </div>

        <div className="footer-social">
          <h3>Follow</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Investor POV. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
