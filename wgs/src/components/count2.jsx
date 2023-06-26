import React, { useState } from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaBriefcase, FaClock, FaToolbox } from 'react-icons/fa';
import VisibilitySensor from 'react-visibility-sensor';
import './count2.css';
import factsImage from './images/port4.jpg';

const FactsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <section id="signs">
      <div className="container">
        <header className="section-header">
          <h3>Facts</h3>
          <p>The IT field is dynamic, constantly evolving, and encompasses various domains such as software development, cybersecurity, data analytics, artificial intelligence, cloud computing, Internet of Things (IoT), and more.</p>
        </header>

        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div className="counter-container">
                <FaUsers style={{ fontSize: '60px' }} />
                {isVisible && (
                  <CountUp start={0} end={232} duration={1} className="purecounter" />
                )}
                <h2 className='cou'>Clients</h2>
              </div>
            </VisibilitySensor>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div className="counter-container">
                <FaBriefcase style={{ fontSize: '60px' }} />
                {isVisible && (
                  <CountUp start={0} end={421} duration={1} className="purecounter" />
                )}
                <h2 className='cou'>Projects</h2>
              </div>
            </VisibilitySensor>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div className="counter-container">
                <FaClock style={{ fontSize: '60px' }} />
                {isVisible && (
                  <CountUp start={0} end={1364} duration={1} className="purecounter" />
                )}
                <h2 className='cou'>Hours Of Support</h2>
              </div>
            </VisibilitySensor>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div className="counter-container">
                <FaToolbox style={{ fontSize: '60px' }} />
                {isVisible && (
                  <CountUp start={0} end={38} duration={1} className="purecounter" />
                )}
                <h2 className='cou'>Hard Workers</h2>
              </div>
            </VisibilitySensor>
          </div>
        </div>

        <div className="facts-img">
          <img src={factsImage} alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
