import React, { useState } from 'react';
import './CSS/FormComponent.css';

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
    // without response here also validation  check
    // if (email.endsWith('@ez.works')) { 

    //       setError('Email ending with @ez.works is not allowed');

    //   return;
    // }

    try {
      const response = await fetch('http://34.225.132.160:8002/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        setMessage('Form Submitted');
      } else if (response.status === 422) {
        if (email.endsWith('@ez.works')) {

          setError('Email ending with @ez.works is not allowed');

          return;
        } else {
          setError('Invalid email ending');
        }


      }
    } catch (err) {
      setError('Error submitting the form');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className='input'>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='submit'>
            <button type="submit">Contact Me</button>
          </div>
         
        </div>
        {error && <div className="error">{error}</div>}
          {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
};

export default FormComponent;
