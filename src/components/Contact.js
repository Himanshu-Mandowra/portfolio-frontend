import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const copyrightText = `© ${currentYear} by Himanshu Mandowra. All rights reserved.`;
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
      copyrightElement.textContent = copyrightText;
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://backend-my-protfolio-5h2b.vercel.app/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);
      } else {
        setResponseMessage(data.error || 'Something went wrong!');
      }
    } catch (error) {
      setResponseMessage('Failed to submit form. Please try again later.');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="top-bar">
        <div className="top-bar-one">Contact</div>
        <div className="underline"></div>
      </div>

      <div className="middle-bar">
        <div className="left">
          <div className="social">
            <div className="i-one">
              <Link to="/"><i className='bx bxl-twitter'></i> Twitter</Link>
              <Link to="/"><i className='bx bxl-linkedin'></i> LinkedIn</Link>
              <Link to="/"><i className='bx bxl-github'></i> GitHub</Link>
            </div>
          </div>
        </div>

        <div className="line2"></div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br />
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea><br />
            <input type="submit" value="Send" />
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>

      <div className="fotter">
        <div className="Email">
          <Link to="#"><i className='bx bxl-gmail no-underline'></i> -/ Email - himanshu.mandowra1234@gmail.com /-</Link>
          <div className="copy">
            <p id="copyright">© 2024 by Himanshu Mandowra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
