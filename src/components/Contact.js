import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from 'react-router-dom';

function Contact() {

  const {
    register,
    handleSubmit,
    setError,

    formState: { errors, isSubmitting },
  } = useForm()

  const [data, setData] = useState({
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
    setData({
      ...data,
      [name]: value
    });
  };

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  ////SUBMITTING PROCESS
  const submitTemp = async (data) => {
    data.preventDefault();

    emailjs.sendForm('service_2nib78g', 'template_bo3vf4i', data.target, 'LQvI0NJt-BCDntiHf')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully');
        setResponseMessage('Message sent successfully.');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message');
        setResponseMessage('Failed to send message.');
      });

    setData({
      username: '',
      email: '',
      message: '',
    });
    if (data.username === "Jatin") {
      setError("blocked", { message: "sorry, user Jatin is blocked!!" })
    }
  }



  // const submitHandle = async (e) => {
  //   e.preventDefault();


  //   try {
  //     const response = await fetch('https://backend-my-protfolio.vercel.app/submit-form', { // or replace with the production URL
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       setResponseMessage(data.message);
  //     } else {
  //       setResponseMessage(data.error || 'Something went wrong!');
  //     }
  //   } catch (error) {
  //     setResponseMessage('Failed to submit form. Please try again later.');
  //   }
  // };

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
          <form onSubmit={submitTemp}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              placeholder="username"
              {...register("username", {
                required: { value: true, message: "username is required" },
                minLength: { value: 3, message: "Minimum length should be 3" },
                maxLength: { value: 16, message: "Maximum length should be 16" }
              })}
              type="text"
              id="username"
              value={data.username}
            />
            <br />
            {errors.username && <span className="text-red-700">{errors.username.message}</span>}
            <br />

            <label htmlFor="email">Email:</label>
            <br />
            <input
              placeholder="email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address"
                }
              })}
              type="email"
              id="email"
            />

            {errors.email && <span className="text-red-700">{errors.email.message}</span>}
            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea placeholder='Enter Your Message' id="message" name="message" value={data.message} onChange={handleChange}></textarea>
            <br />
            {isSubmitting && <div>Loding...</div>}
            <input disabled={isSubmitting} type="submit" value="Send" />
            <br />
            {errors.blocked && <span className="text-red-700">{errors.blocked.message}</span>}
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
