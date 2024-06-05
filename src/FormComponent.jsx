import React, { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (email.endsWith('@ez.works')) {
      setError('Email ending with @ez.works is not allowed');
      return;
    }

    try {
      const response = await fetch('http://3.228.97.110:9000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        setMessage('Form Submitted');
      } else if (response.status === 422) {
        setError('Invalid email ending');
      }
    } catch (err) {
      setError('Error submitting the form');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        {message && <div className="message">{message}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
