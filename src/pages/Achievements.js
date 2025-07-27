// Achievements.jsx
import React from 'react';
import './achievements.css';

const achievements = [
  {
    icon: "🏆",
    title: "Awarded Top Investment Advisory",
    description: "Recognized by Financial Times as one of the top 10 emerging investment firms in 2024."
  },
  {
    icon: "📈",
    title: "5000+ Investors Empowered",
    description: "We've helped thousands of retail and institutional investors achieve financial growth."
  },
  {
    icon: "🌐",
    title: "Pan-India Presence",
    description: "Servicing clients across 20+ cities through virtual and on-site consulting."
  },
  {
    icon: "📚",
    title: "10+ Certified Courses",
    description: "Trusted by learners and professionals alike, our courses meet global certification standards."
  }
];

const counters = [
  { label: "Clients Served", count: 5100 },
  { label: "Webinars Conducted", count: 350 },
  { label: "Positive Feedback", count: "97%" },
  { label: "Media Features", count: 24 }
];

const Achievements = () => {
  return (
    <div className="achievements-page">
      <h1 className="achievements-title">Our Achievements</h1>
      <p className="achievements-subtitle">We take pride in what we've accomplished for our clients and the industry.</p>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="stats-header">Milestone Stats</h2>
      <div className="counter-grid">
        {counters.map((item, idx) => (
          <div className="counter-card" key={idx}>
            <h3 className="counter-number">{item.count}</h3>
            <p className="counter-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
