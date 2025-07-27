import React from 'react';
import './Account.css';

const Account = () => {
  return (
    <section className="account-page">
      <div className="account-header">
        <h1>Open Your Investment Account</h1>
        <p>Choose from our trusted partners to start your investment journey.</p>
      </div>
      <div className="account-options">
  <div className="account-card">
    <img
      src="https://www.equitypandit.com/wp-content/uploads/2024/05/Untitled-design-10-2.jpg"
      alt="Upstox Logo"
    />
    <h3>Open with Upstox</h3>
    <p>Zero brokerage on investments. Quick KYC and instant account opening.</p>
    <a
      href="https://exchange4media.gumlet.io/photos/Upstox-logo.jpg?w=400&dpr=2.6"
      target="_blank"
      rel="noopener noreferrer"
      className="open-btn"
    >
      Open Account
    </a>
  </div>

  <div className="account-card">
    <img
      src="https://cdn.dribbble.com/userupload/18139884/file/still-4af3bcbe44d4c30b601b525aa26541e1.png"
      alt="Zerodha Logo"
    />
    <h3>Open with Zerodha</h3>
    <p>India’s top-rated broker. Fast, paperless account opening experience.</p>
    <a
      href="https://zerodha.com/open-account?ref=YOUR_REFERRAL"
      target="_blank"
      rel="noopener noreferrer"
      className="open-btn"
    >
      Open Account
    </a>
  </div>
</div>

      
      
    </section>
  );
};

export default Account;
