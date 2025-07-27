import React from 'react';
import './services.css';

const Services = () => {
  const services = [
    {
      title: "Portfolio Review",
      icon: "📊",
      description: "Thorough analysis of your investment portfolio with expert recommendations."
    },
    {
      title: "1-on-1 Consultation",
      icon: "🧑‍💼",
      description: "Private sessions to guide your investment journey and answer your questions."
    },
    {
      title: "Market Insights",
      icon: "📈",
      description: "Weekly updates and analysis to keep you informed on market trends."
    },
    {
      title: "Goal Planning",
      icon: "🎯",
      description: "Custom strategies to meet your short and long-term financial goals."
    },
  ];

  const courses = [
    {
      title: "Beginner Investor Course",
      price: "₹999",
      level: "Beginner",
      duration: "4 Weeks",
      description: "Perfect for those starting out. Learn the basics of investing, risk, and portfolio planning."
    },
    {
      title: "Intermediate Wealth Builder",
      price: "₹1,999",
      level: "Intermediate",
      duration: "6 Weeks",
      description: "Build your knowledge with real-time market strategies and advanced techniques."
    },
    {
      title: "Pro Investor Masterclass",
      price: "₹3,999",
      level: "Advanced",
      duration: "8 Weeks",
      description: "Master investment strategies used by pros. Includes live sessions & portfolio audits."
    },
  ];

  return (
    <section className="services-page">
      <h1 className="services-title">Our Offerings</h1>
      <p className="services-subtext">Empowering your financial journey through services and learning</p>

      {/* Services Section */}
      <h2 className="section-header">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Courses Section */}
      <h2 className="section-header">Our Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <div className="course-meta">
              <span className="tag">{course.level}</span>
              <span className="tag">{course.duration}</span>
            </div>
            <div className="course-price">{course.price}</div>
            <button className="enroll-btn">Enroll Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
