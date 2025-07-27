// Management.js
import React from 'react';
import './management.css';

const team = [
  {
    name: "Rohit Sharma",
    title: "Founder & CEO",
    img: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=160",
    bio: "Visionary leader with 15+ years in finance, driving strategic growth and innovation.",
    linkedin: "https://www.linkedin.com/in/rohit-sharma"
  },
  {
    name: "Anjali Mehra",
    title: "Chief Financial Officer",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=160",
    bio: "Expert in budgeting, capital raising, and investor relations with a global track record.",
    linkedin: "https://www.linkedin.com/in/anjali-mehra"
  },
  {
    name: "Karan Desai",
    title: "Head of Research",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=160",
    bio: "Specializes in market analytics, investment trends, and data-driven insights.",
    linkedin: "https://www.linkedin.com/in/karan-desai"
  }
];

const Management = () => {
  return (
    <div className="management-page">
      <h1 className="management-title">Our Leadership</h1>
      <p className="management-subtitle">Meet the minds behind Investor Point of View</p>

      <div className="team-container">
        {team.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.img} alt={member.name} className="member-photo" />
            <h3>{member.name}</h3>
            <h4>{member.title}</h4>
            <p>{member.bio}</p>
            <a href={member.linkedin} target="_blank" rel="noreferrer" className="linkedin-btn">View LinkedIn</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
