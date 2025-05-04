import React, { useState } from 'react';
import '../css/styles.css';
import axios from 'axios';

function AdoptForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    involvement: 'adopt',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Where we want to call axios to send the data to the backend
    axios.post('http://localhost:3001/submit', formData)
      .then(response => {
        console.log('Response from server:', response.data);
        setSubmitted(true);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        involvement: 'adopt',
        details: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="adopt-form-container">
      <h2 className="section-left-title">Get Involved</h2>
      <p className="adopt-form-intro">
        Interested in adopting, fostering, or supporting our rescue efforts?
        Fill out this form and we'll get back to you with more information.
      </p>

      {submitted ? (
        <div className="form-success">
          <p>Thank you for your interest! We'll be in touch soon.</p>
        </div>
      ) : (
        <form className="adopt-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="involvement">How would you like to get involved?</label>
            <select
              id="involvement"
              name="involvement"
              value={formData.involvement}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="adopt">I want to adopt</option>
              <option value="foster">I want to foster</option>
              <option value="volunteer">I want to volunteer</option>
              <option value="donate">I want to donate</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="details">Additional Details</label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              className="form-textarea"
              rows="4"
              placeholder="Tell us a bit about yourself, your living situation, and any specific questions you may have."
            ></textarea>
          </div>

          <button type="submit" className="form-submit-btn">Submit</button>
        </form>
      )}
    </div>
  );
}

export default AdoptForm;
