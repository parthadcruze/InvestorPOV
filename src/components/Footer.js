import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="new-footer">
      <div className="footer-top">
        <h2 className="footer-logo">
          <span className="logo-investor">Investor</span><span className="logo-pov"> POV</span>
        </h2>
        <p className="footer-tagline">Empowering your financial future.</p>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="/">🏠 Home</a></li>
            <li><a href="/services">💼 Services</a></li>
            <li><a href="/management">🧑‍💼 Management</a></li>
            <li><a href="/account">🔐 Account</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p><i className="fas fa-envelope"></i> support@investorpov.com</p>
          <p><i className="fas fa-phone"></i> +91 98765 43210</p>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Investor POV. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
