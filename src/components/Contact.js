// Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact fade-in">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me. I'd love to connect!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
