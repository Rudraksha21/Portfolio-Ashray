import React, { useState } from 'react';
import styles from './contactme.module.css';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Compose email body
    const body = `Name: ${fullName}\nEmail: ${senderEmail}\n\n${message}`;
    const mailtoLink = `mailto:naikashray21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open user's mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles['contact-container']}>
      {/* Contact Info */}
      <div className={styles['contact-info']}>
        <h2>Contact Me</h2>

        <div className={styles['info-item']}>
          <h3>Address</h3>
          <p>
            Naik Nagar Bordem<br />
            Bicholim, Goa 403504
          </p>
        </div>

        <div className={styles['info-item']}>
          <h3>Phone</h3>
          <p>+91 9168278051</p>
        </div>

        <div className={styles['info-item']}>
          <h3>Email</h3>
          <p>naikashray21@gmail.com</p>
        </div>

        <div className={styles['info-item']}>
          <h3>Website</h3>
          <p>.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className={styles['contact-form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="fullname">FULL NAME</label>
          <input
            type="text"
            id="fullname"
            placeholder="Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="subject">SUBJECT</label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles['submit-btn']}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
