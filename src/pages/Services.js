import React from 'react';
import './Page.css';

function Services() {
  const services = [
    "Investment Planning",
    "Mutual Funds & SIP Advisory",
    "Stock Portfolio Management",
    "Tax Optimization Strategies"
  ];
  return (
    <div className="page">
      <h2>Products & Services</h2>
      <ul>
        {services.map(s => <li key={s}>{s}</li>)}
      </ul>
    </div>
  );
}
export default Services;
