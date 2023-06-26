import React, { useState } from 'react';
import './depart.css';
import { FaCode, FaBullhorn, FaBook, FaCog, FaShoppingCart } from 'react-icons/fa';

const Depart = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const sections = [
    {
      title: 'Web Development',
      content:
        'Say goodbye to long waiting times and endless paperwork. Our online prescription service brings the convenience of weight loss support directly to your screen. With just a few clicks, you can access qualified healthcare professionals, personalized consultations, and prescription medications from the comfort of your own home.',
      icon: FaCode,
    },
    {
      title: 'Digital Marketing',
      content:
        'We understand that weight loss can be a challenging endeavor, which is why our service provides you with access to experienced healthcare professionals who specialize in weight management. Our dedicated team will guide you through your journey, offering personalized advice, tailored treatment plans, and continuous support to ensure you stay motivated and on track.',
      icon: FaBullhorn,
    },
    {
      title: 'Content development',
      content:
        'No two individuals are the same, and neither should be their weight loss approach. Our online prescription service offers a comprehensive assessment of your health, lifestyle, and goals. By considering these factors, we develop personalized treatment plans and prescribe MHRA approved medications when appropriate, optimizing your chances of achieving sustainable and long-lasting results.',
      icon: FaBook,
    },
    {
      title: 'Product development',
      content:
        'We understand the demands of daily life, making it challenging to prioritize your well-being. With our online prescription service, you can skip the hassle of scheduling appointments and waiting in crowded waiting rooms. Our digital platform allows you to access expert guidance, refill prescriptions, and track your progress at a time that suits you best.',
      icon: FaCog,
    },
    {
      title: 'E Commerce',
      content:
        'We value your privacy and understand that weight loss can be a sensitive subject. Our online prescription service ensures that your personal information is kept strictly confidential. Feel empowered to take control of your weight loss journey in a secure and discreet environment.',
      icon: FaShoppingCart,
    },
  ];

  return (
    <div>
      <h1 >Services</h1>
      <hr></hr>
      <br></br>
      <div className="depart-container">
        <div className="left-sections">
          <ul>
            {sections.map((section, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                className={activeItem === index ? 'active' : ''}
              >
                {React.createElement(section.icon)}
                <span>{section.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="right-sections">
          {sections.map((section, index) => (
            <div key={index} className={activeItem === index ? 'active' : 'hidden'}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Depart;
