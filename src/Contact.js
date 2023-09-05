import React, {useState} from 'react'
import Navbar from "./Navbar";
import emailjs from 'emailjs-com';


const Contact = () => {
  return (
    <>
      <Navbar /> 
      <h1 className='contact-header'>Contact Me</h1>
      <ContactForm />
    </>
  )
}



export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_82sxbu3', // Replace with your Email.js service ID
        'template_p7rzzpb', // Replace with your Email.js template ID
        e.target,
        'D240iWuqCNho_-Yav' // Replace with your Email.js user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-content">
      {messageSent ? (
        <p className="success-message">Your message was sent successfully!</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </div>
          <div>
            <label className='message-label'>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};





export default Contact;
