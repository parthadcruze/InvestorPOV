import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { useEffect } from 'react';

const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when component loads
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yluagmb',    // EmailJS service ID
      'template_v6gc1bh',   // Template ID
      form.current,
      'i-kY5m-r_iJKJbZZI'   // Public key
    ).then(
      (result) => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.error("❌ Email send error:", error.text);
        alert("❌ An error occurred, please try again.");
      }
    );
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString(); // or use toISOString() for ISO format
  };

  return (
    <div className="contact-wrapper">
      <h2 className="contact-heading">📩 Get In Touch</h2>
      <p className="contact-subtext">We’d love to hear from you! Please fill out the form below.</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="mobile" placeholder="Your Mobile Number" required pattern="[0-9]{10}" title="Enter 10-digit mobile number" />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <input type="hidden" name="time" value={getCurrentDateTime()} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
