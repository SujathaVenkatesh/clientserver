import React from 'react';
import './Web.css';
import Cube from './Cube';

function Webs() {
  return (
    <div>
      <div className="nameh"></div>
      <div className="about-us-container">
        <h1 className="headp">Web Development</h1>
        <hr className="horizontal-line" />

        <div className="about-us-content">
          <div className="image-container">
            <Cube /> 
          </div>
          <div className="content-container">
            <p>
              Web development encompasses front-end development, back-end development, and database management. Front-end development involves HTML, CSS, and JavaScript to create the user-facing side of a website. Back-end development uses server-side technologies like Python, PHP, or Node.js to handle server management and database integration. Full-stack developers have skills in both front-end and back-end development. Responsive web design ensures websites adapt to different devices and screen sizes. Web development frameworks like React, Angular, or Django provide tools and libraries to streamline the development process. Testing and debugging are essential for identifying and fixing issues in web applications. Web security is crucial to protect against potential vulnerabilities and attacks. Continuous learning and keeping up with industry trends are important for web developers to stay current. Collaboration with designers, project managers, and clients is vital to understanding requirements and delivering successful web projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webs;
