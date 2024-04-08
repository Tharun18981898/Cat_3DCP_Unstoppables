import React, { useState } from 'react';
import './GetInTouchPage.css'; // Ensure this file is in the same directory

function GetInTouchPage() {
  const [contactDetails, setContactDetails] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you would send the contactDetails to your backend server
    console.log('Contact details submitted: ', contactDetails);
    // You might want to clear the form, show a success message, etc.
    setContactDetails({
      fullName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="get-in-touch-container">
      <h1>Get In Touch</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={contactDetails.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactDetails.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={contactDetails.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default GetInTouchPage;
