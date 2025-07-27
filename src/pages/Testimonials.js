import React from 'react';
import './Page.css';

function Testimonials() {
  const data = [
    { text: "A trustworthy investment partner!", author: "Ramesh K." },
    { text: "Remarkable ROI within 12 months.", author: "Anita D." },
    { text: "Insightful and professional guidance.", author: "Suresh M." }
  ];
  return (
    <div className="page">
      <h2>Testimonials</h2>
      {data.map((t,i) => (
        <blockquote key={i}>
          "{t.text}" — <strong>{t.author}</strong>
        </blockquote>
      ))}
    </div>
  );
}
export default Testimonials;
