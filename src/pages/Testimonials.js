import React from 'react';
import './testimonials.css';

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Young Investor",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Investor POV helped me gain confidence in the stock market. The insights were game-changing!",
  },
  {
    name: "Sneha Sharma",
    role: "Working Professional",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "The one-on-one consultation gave me a clear financial roadmap. Highly recommended!",
  },
  {
    name: "Rahul Krishnan",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    quote: "Courses are well-structured and insightful. I now manage my portfolio with ease.",
  },
  {
    name: "Divya Nair",
    role: "New Investor",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote: "Investor POV changed my outlook. I feel in control of my financial future.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h1 className="testimonials-title">What Our Clients Say</h1>
      <p className="testimonials-subtext">Real stories from real investors</p>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-quote">“{testimonial.quote}”</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
