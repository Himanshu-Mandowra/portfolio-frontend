import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Contact() {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const [responseMessage, setResponseMessage] = useState('');

  // For dynamic copyright
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const copyrightText = `© ${currentYear} by Himanshu Mandowra. All rights reserved.`;
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
      copyrightElement.textContent = copyrightText;
    }
  }, []); // Runs once after initial render

  // Submit handler with react-hook-form data
  const submitHandle = async (formData) => {
    try {
      const response = await fetch('https://backend-my-protfolio.vercel.app/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // formData from react-hook-form
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);
      } else {
        setResponseMessage(data.error || 'Something went wrong!');
      }

      // Blocking specific user (Jatin)
      if (formData.username === "Jatin") {
        setError("username", { message: "Sorry, user Jatin is blocked!!" });
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
          <form onSubmit={handleSubmit(submitHandle)}>
            {/* Name Input */}
            <label htmlFor="username">Name:</label>
            <input
              placeholder="username"
              {...register("username", {
                required: { value: true, message: "Username is required" },
                minLength: { value: 3, message: "Minimum length should be 3" },
                maxLength: { value: 16, message: "Maximum length should be 16" }
              })}
              type="text"
              id="username"
            />
            {errors.username && <span className="text-red-700">{errors.username.message}</span>}
            <br />

            {/* Email Input */}
            <label htmlFor="email">Email:</label>
            <input
              placeholder="email"
              {...register("email", {
                required: { value: true, message: "Email is required" }
              })}
              type="email"
              id="email"
            />
            {errors.email && <span className="text-red-700">{errors.email.message}</span>}
            <br />

            {/* Message Input */}
            <label htmlFor="message">Message:</label>
            <textarea
              placeholder="Enter Your Message"
              {...register("message", {
                required: { value: true, message: "Message is required" }
              })}
              id="message"
            />
            {errors.message && <span className="text-red-700">{errors.message.message}</span>}
            <br />

            {/* Submit Button */}
            {isSubmitting && <div>Loading...</div>}
            <input disabled={isSubmitting} type="submit" value="Send" />
            <br />

            {errors.blocked && <span className="text-red-700">{errors.blocked.message}</span>}
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>

      <div className="footer">
        <div className="Email">
          <Link to="#"><i className='bx bxl-gmail no-underline'></i> Email - himanshu.mandowra1234@gmail.com</Link>
          <div className="copy">
            <p id="copyright">© 2024 by Himanshu Mandowra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
