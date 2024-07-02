// Contact.js

import React, { useRef } from "react";
import "./Contact.css";
import contactIcon from "../images/contact-icon.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qxnl2ms", "template_eubsktq", form.current, {
        publicKey: "c2G7A8ZfP5_loBHg1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Show success message
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          // Show error message
          alert("Error sending message. Please try again.");
        }
      );
  };
  return (
    <section className="contact fade-in" id="contact">
      <div className="heading-container">
        <img src={contactIcon} alt="Icon" className="icon" />
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
      </div>
      <p className="description">
        Feel free to reach out to me. I'd love to connect!
      </p>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            placeholder="Enter your Name"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            placeholder="Enter your email"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" value="Send">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
