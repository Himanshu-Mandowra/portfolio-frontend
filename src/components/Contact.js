import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Contact() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();
  const [responseMessage, setResponseMessage] = React.useState('');

  React.useEffect(() => {
    const currentYear = new Date().getFullYear();
    const copyrightText = `© ${currentYear} by Himanshu Mandowra. All rights reserved.`;
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
      copyrightElement.textContent = copyrightText;
    }
  }, []);

  const submitHandle = async (formData) => {
    try {
      const response = await fetch('https://form-backend-bk3q.onrender.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.message);
      } else {
        setResponseMessage(result.error || 'Something went wrong!');
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
            <label htmlFor="username">Name:</label>
            <br />
            <input
              placeholder="Username"
              {...register("username", {
                required: { value: true, message: "Username is required" },
                minLength: { value: 3, message: "Minimum length should be 3" },
                maxLength: { value: 16, message: "Maximum length should be 16" }
              })}
              type="text"
              id="username"
            />
            <br />
            {errors.username && <span className="text-red-700">{errors.username.message}</span>}
            <br />

            <label htmlFor="email">Email:</label>
            <br />
            <input
              placeholder='Email'
              {...register("email", {
                required: { value: true, message: "Email is required" }
              })}
              type="email"
              id="email"
            />
            <br />
            {errors.email && <span className="text-red-700">{errors.email.message}</span>}
            <br />

            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              placeholder='Enter Your Message'
              id="message"
              {...register("message")}
            ></textarea>
            <br />
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
