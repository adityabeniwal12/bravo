import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Us</h2>
      <form
        action="https://formspree.io/f/xqalyjge" // replace with your Formspree URL
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">🚀 Send Message</button>
      </form>
    </section>
  );
}