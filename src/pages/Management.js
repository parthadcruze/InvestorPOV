import React from 'react';
import './Page.css';

function Management() {
  const team = [
    { role: "CEO", name: "Mr. Prakash" },
    { role: "CFO", name: "Ms. Kavya" },
    { role: "Strategy Head", name: "Mr. Ajay" }
  ];
  return (
    <div className="page">
      <h2>Our Management Team</h2>
      <ul>
        {team.map((m,i) => <li key={i}>{m.role}: {m.name}</li>)}
      </ul>
    </div>
  );
}
export default Management;
