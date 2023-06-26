import React from 'react';
import './Footer.css';
import { FaFacebook,FaInstagram, FaTwitter,FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Why <span>Global Services</span>
        </h3>
        <p className="footer-links">
          <a href="/" alt="name">Home</a> | <a href="/AboutUs" alt="name">About</a> | <a href="/Contact" alt="name">Contact</a> | <a href="/SignUp" alt="name">Join Our Team</a>
        </p>
        <p className="footer-company-name">
        Copyright © 2022.All rights reserved
        </p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>No.4th Floor, Elcanso Apartments 9/10, <br></br>Tamizh Salai, CASA Major Rd, Egmore, Chennai, </span> Tamil Nadu 600008
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+91- 86670 79822</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:why@whyglobalservices.com">why@whyglobalservices.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>WHY Global Services was established in 2009 in UK and is one of the leading software and web development companies in Chennai that creates end-to-end solutions, from concept and strategy, to design, implementation and support, helping clients achieves their business goals.
        </p>
        <div className="footer-icons">
          <a href="https://www.facebook.com/whyglobal/" alt="names">
            <FaFacebook/>
          </a>
          <a href="https://www.instagram.com/" alt="names">
            <FaInstagram/>
          </a>
          <a href="https://www.linkedin.com/" alt="names">
            <FaLinkedin/>
          </a>
          <a href="https://twitter.com/i/flow/login" alt="names">
            <FaTwitter/>
          </a>
          <a href="https://www.youtube.com/" alt="names">
            <FaYoutube/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
