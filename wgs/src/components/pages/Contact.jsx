import React, { useRef,useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "emailjs-com";
import "./Contact.css";
import Footer from '../Footer';

function Contact() {
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false); // State variable to track sent status

  function sendEmail(e) {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_fc97lhh",
      "template_t2rzjwf",
      formRef.current,
      "n50L2fRrrahr6c-HI"
    )
    .then(
      (result) => {
        console.log(result.text);
        setIsSent(true); // Set the sent status to true
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  }

  return (
    <>
       
    <section id="contact">
      <h2>Contact Us</h2>
      <div className="contact__container">
      <div className="contact__options">
  <div className={`contact__option ${isSent ? "sent" : ""}`}>
    <MdOutlineEmail className="contact__option-icon" />
    <h4>Gmail</h4>
    <h5>vsujathavsujatha0968@gmail.com</h5>
    <a href="mailto:vsujathavsujatha0968@gmail.com">Send a message</a>
  </div>
  <div className={`contact__option ${isSent ? "sent" : ""}`}>
    <RiMessengerLine className="contact__option-icon" />
    <h4>Messenger</h4>
    <h5>Why Global Services</h5>
    <a href="https://m.me">Send a message</a>
  </div>
  <div className={`contact__option ${isSent ? "sent" : ""}`}>
    <RiWhatsappLine className="contact__option-icon" />
    <h4>Contact</h4>
    <h5>+91 86672 79822</h5>
    <a href="https://api.whatsapp.com/send?phone=917904544228">Send a message</a>
  </div>
</div>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <label>
            <span>Your Full Name:</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Your Email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your Message:</span>
            <textarea name="message" rows="7" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    <Footer/>

    </>
  );
}

export default Contact;
