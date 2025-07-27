import React from 'react';
import './home.css'; // Link to the custom CSS styles 
import { FaChartLine, FaUsers, FaLock, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Added Link

const Home = () => (
  <div className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">Welcome to <span>Investor POV</span></h1>
      <p className="hero-subtext">
        Empowering investors through <strong>transparency</strong>, <strong>technology</strong>, and <strong>trust</strong>.
      </p>
      <div className="features">
        <div className="feature-card">
          <FaChartLine className="icon" />
          <h3>Market Insights</h3>
          <p>Get real-time data and personalized stock analysis to stay ahead.</p>
        </div>
        <div className="feature-card">
          <FaUsers className="icon" />
          <h3>Investor Community</h3>
          <p>Connect with like-minded investors and grow your knowledge.</p>
        </div>
        <div className="feature-card">
          <FaLock className="icon" />
          <h3>Secure Access</h3>
          <p>Your investment data is protected with industry-grade security.</p>
        </div>
      </div>

      <div className="work-together-section">
      <h2 className="work-heading">
        <FaHandshake className="shake-icon" /> Let's Work Together
      </h2>
      <p className="work-subtext">
        Partner with us for a transparent and rewarding investment journey.
      </p>
      <Link to="/contact" className="work-btn">
        Contact Us
      </Link>
    </div>

    </div>
  </div>
);

export default Home;
