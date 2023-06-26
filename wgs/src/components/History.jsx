import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBrain, faImage } from '@fortawesome/free-solid-svg-icons';
import './History.css';
import mission from './images/missionab.jpg';
import abplan from './images/abplan.jpg';
import abvission from './images/abvission.jpg';
const AboutSection = () => {
  return (
    <section id="about">
      <div className="containerhis" data-aos="fade-up">
        <div className="row about-cols">

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="about-col">
              <div className="img">
                <img src={mission} alt="sour" className="img-fluid" />
                <div className="icon"><FontAwesomeIcon icon={faChartBar} /></div>
              </div>
              <h3 className="title">Our Mission</h3>
              <p>
              To leverage cutting-edge technology and innovative solutions to empower businesses and individuals, enabling them to thrive in the digital age. We are committed to delivering exceptional IT services, and driving transformation through reliable infrastructure, secure systems, and strategic IT consulting.               </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="about-col">
              <div className="img">
                <img src={abplan} alt="sour" className="img-fluid" />
                <div className="icon"><FontAwesomeIcon icon={faBrain} /></div>
              </div>
              <h3 className="title">Our Plan</h3>
              <p>
              Continuously invest in research and development to stay at the forefront of technological advancements and drive innovation in our solutions and services.Place our customers at the center of everything we do, understanding their unique needs and delivering tailored IT solutions that exceed their expectations.              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="about-col">
              <div className="img">
                <img src={abvission} alt="sour" className="img-fluid" />
                <div className="icon"><FontAwesomeIcon icon={faImage} /></div>
              </div>
              <h3 className="title">Our Vision</h3>
              <p>
              We envision a future where businesses and individuals harness the power of technology to transform and thrive in the digital era. By providing cutting-edge solutions, unparalleled expertise, and personalized support, we aim to empower our clients to unlock their full potential and achieve sustainable growth.              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
