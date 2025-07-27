import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'; // Import styles for the form

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zeabmjl',     // Your EmailJS Service ID
      'template_v6gc1bh',    // Your EmailJS Template ID
      form.current,
      'i-kY5m-r_iJKJbZZI'    // Your EmailJS Public Key
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

  return (
    <div className="contact-wrapper">

<h2 className="contact-heading">📩 Get In Touch</h2>
      <p className="contact-subtext">We’d love to hear from you! Please fill out the form below.</p>


     <form ref={form} onSubmit={sendEmail} className="contact-form">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
    </form>

    </div>
  );
};

export default ContactForm;
