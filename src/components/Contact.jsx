// src/components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // To track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false); // To show loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Start submitting
    setStatus('Thank you for submitting!'); // Display success message

    const { name, email, message } = formData;

    // Simulate successful form submission (Formspree sends it)
    setFormData({ name: '', email: '', message: '' }); // Reset form fields

    setIsSubmitting(false); // Done submitting
  };

  return (
    <section id='contact' className='contact-section'>
      <div className='contact-container'>
        <h2>Contact Me</h2>
        <p className='contact-subheader'>
          Get in touch, I’d love to hear from you!
        </p>
        <form
          action='https://formspree.io/f/xzzeakjp' // Replace with your Formspree URL
          method='POST'
          onSubmit={handleSubmit}
        >
          <div className='form-group'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group'>
            <textarea
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status && (
          <p
            className={`status-message ${
              status.startsWith('There') ? 'error' : 'success'
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
