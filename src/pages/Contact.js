import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">
          I'm always open to discussing projects, collaborations, or opportunities.
        </p>

        <div className="contact-links">
          <a href="mailto:sanjyotamritkar05@gmail.com" className="contact-btn">Email Me</a>
          <a href="https://www.linkedin.com/in/sanjyot-amritkar/" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
        </div>

        <form name="contact" method="POST" data-netlify="true" className="contact-form">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Sanjyot Amritkar. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
