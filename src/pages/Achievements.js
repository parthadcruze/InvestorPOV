import React from 'react';
import './Page.css';

function Achievements() {
  const awards = [
    "🏆 Best FinTech Company 2024",
    "📈 5,000+ investors onboarded",
    "🌍 Global reach in 12 countries"
  ];
  return (
    <div className="page">
      <h2>Achievements</h2>
      <ul>
        {awards.map((a,i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  );
}
export default Achievements;
