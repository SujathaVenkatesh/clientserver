import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import logo6 from './images/logo6.png';
import './contact.css';
import emailjs from 'emailjs-com';

function ContactInfoItem({ icon, title, lines }) {
  return (
    <div className="contact-info-item">
      <div className="contact-info-icon">
        <FontAwesomeIcon icon={icon} size="3x" color="orange" />
      </div>
      <div className="contact-info-text">
        <h2 className="text-center">{title}</h2>
        {lines.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to EmailJS
    emailjs
      .sendForm('service_y1kjht5', 'template_wyspvrn', form.current, 'nZl37Mjc5cfRGF4_U')
      .then((result) => {
        console.log(result.text);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="contact-page-form">
      <h2>
        Get in Touch
        <img src={logo6} className="logo" alt="Logo" />
      </h2>
      <form onSubmit={handleSubmit} ref={form}>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="single-input-field">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="single-input-field">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="single-input-field">
              <textarea
                placeholder="Write Your Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ color: 'black' }} 

              ></textarea>
            </div>
          </div>
          <div className="single-input-fieldsbtn">
            <input type="submit" value="Send Now" />
          </div>
        </div>
      </form>
    </div>
  );
}

function GoogleMapsEmbed({ embedURL }) {
  return (
    <div className="contact-page-map">
      <iframe
        src={embedURL}
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        title="Google Maps"
      ></iframe>
    </div>
  );
}

function Contact() {
  return (
    <section className="contact-page-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ContactInfoItem
                icon={faMapMarked}
                title="address"
                lines={['No:75,77 3rd Floor,Lohmanradhri Towers,Pantheon Road,Egmore,Chennai-18']}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <ContactInfoItem
                icon={faEnvelope}
                title="E-mail"
                lines={['whyglobalservices@gmail.com', 'whytap@gmail.com']}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <ContactInfoItem
                icon={faClock}
                title="office time"
                lines={['Mon - Fri 10.00 am - 6.30 pm', 'Sat  10.00 pm - 6.00 pm']}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ContactForm />
          </div>
          <div className="col-md-4">
            <GoogleMapsEmbed embedURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4407720864688!2d80.25644627375347!3d13.071228212688832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52660dee8cf291%3A0x91e6aeae2606def2!2sLohmanradhri%20Towers%2C%20Pantheon%20Rd%2C%20Egmore%2C%20Chennai%2C%20Tamil%20Nadu%20600008!5e0!3m2!1sen!2sin!4v1687072745466!5m2!1sen!2sin" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
