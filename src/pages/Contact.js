import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './Contact.css';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">
          I'm always open to discussing projects, collaborations, or opportunities.
        </p>

        <div className="contact-links">
          <a href="mailto:sanjyotamritkar05@gmail.com" className="contact-btn">
            <FaEnvelope /> Email Me
          </a>
          <a href="https://www.linkedin.com/in/sanjyot-amritkar/" target="_blank" rel="noreferrer" className="contact-btn">
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {status === 'success' ? (
          <div className="form-status form-status--success" role="status">
            <FaCheckCircle />
            <div>
              <p className="form-status-title">Message sent</p>
              <p className="form-status-text">Thanks for reaching out — I'll get back to you soon.</p>
            </div>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            {status === 'error' && (
              <p className="form-status form-status--error" role="alert">
                <FaExclamationCircle /> Something went wrong — please try again, or email me directly.
              </p>
            )}

            <button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}

        <footer className="footer">
          <p>© {new Date().getFullYear()} Sanjyot Amritkar. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
