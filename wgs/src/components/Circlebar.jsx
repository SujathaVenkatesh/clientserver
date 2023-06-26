import React, { useState, useEffect } from 'react';
import './Circle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPalette, faRocket, faTrophy, faLightbulb, faTruck } from '@fortawesome/free-solid-svg-icons';

const CircleMenu = () => {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedContent, setSelectedContent] = useState('');

  useEffect(() => {
    let angle = 360 / 6;
    let finalAngle = -360;

    const circleContainers = document.querySelectorAll('.circleom');

    circleContainers.forEach((circle, index) => {
      finalAngle -= angle;

      circle.style.transform = `rotate(${angle}deg)`;
      circle.style.setProperty('--start-angle-of-rotation', `-${angle}deg`);
      circle.style.setProperty('--end-angle-of-rotation', `${finalAngle}deg`);

      angle += 60;
    });
  }, []);

  const handleCircleClick = (title, content) => {
    setSelectedTitle(title);
    setSelectedContent(content);
  };

  return (
    <section id="circles" className="circle_section">
    <div className='circle'>

<div className="circle-left">
  <div className="containerlm">
        <img
            className="dolu"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="portrait"
          />

          <div className="circleom">
            <div
              className="inner-circlesmn"
              style={{ '--circle-color': '#ff0897' }}
              onClick={() => handleCircleClick('Qualified Managers', 'Qualified managers play a crucial role in leading and managing teams effectively They are responsible for setting goals, delegating tasks, and ensuring that projects are completed on time and within budget.')}
            >
              <FontAwesomeIcon icon={faUsers} className="circle-icon" data-title="Qualified Managers" data-content="Content for Qualified Managers" />
            </div>
          </div>

          <div className="circleom">
            <div
              className="inner-circlesmn"
              style={{ '--circle-color': '#ee6055' }}
              onClick={() => handleCircleClick('Creative Design', 'Creative design is a dynamic and innovative field that involves conceptualizing and visualizing ideas to create visually appealing and impactful designs. It encompasses various disciplines such as graphic design, web design, UX/UI design, branding, and multimedia design.')}
            >
              <FontAwesomeIcon icon={faPalette} className="circle-icon" />
            </div>
          </div>

          <div className="circleom">
            <div
              className="inner-circlesmn"
              style={{ '--circle-color': '#ff9b85' }}
              onClick={() => handleCircleClick('Highly Experienced', 'Highly experienced developers are the backbone of successful software development projects. These professionals possess a deep understanding of programming languages, frameworks, and development methodologies, gained through years of hands-on experience. ')}
            >
              <FontAwesomeIcon icon={faRocket} className="circle-icon" />
            </div>
          </div>

          <div className="circleom">
            <div
              className="inner-circlesmn"
              style={{ '--circle-color': '#ffcc5c' }}
              onClick={() => handleCircleClick('Award-Winning Solutions', 'Award-winning solutions are recognized for their excellence and innovation. These solutions have demonstrated outstanding performance, superior design, and significant impact in their respective industries. Winning awards not only validates the quality and effectiveness of the solution but also enhances its reputation and credibility.')}
            >
              <FontAwesomeIcon icon={faTrophy} className="circle-icon" />
            </div>
          </div>

          <div className="circleom">
            <div
              className="inner-circlesmn"
              style={{ '--circle-color': '#28afb0' }}
              onClick={() => handleCircleClick('Innovative Ideas', 'Innovative ideas are the driving force behind progress and growth. They involve thinking creatively, challenging the status quo, and introducing new approaches to solve problems or meet needs. Innovative ideas can lead to groundbreaking inventions, transformative technologies, and disruptive business models that shape industries and improve people\'s lives.')}
            >
              <FontAwesomeIcon icon={faLightbulb} className="circle-icon" />
            </div>
          </div>

          <div className="circleom">
            <div
              className="inner-circlesmn"
              style={{ '--circle-color': '#5c6ac4' }}
              onClick={() => handleCircleClick('Efficient Delivery', 'Efficient delivery refers to the ability to deliver products or services quickly, accurately, and reliably. It involves streamlining processes, optimizing resources, and leveraging technology to ensure timely and cost-effective delivery. Efficient delivery is essential for customer satisfaction, competitive advantage, and business success.')}
            >
              <FontAwesomeIcon icon={faTruck} className="circle-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="circle-menu">
        <div className="right-side-content">
          <h2>{selectedTitle}</h2>
          <p>{selectedContent}</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CircleMenu;
