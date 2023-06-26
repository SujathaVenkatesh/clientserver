import React, { useState } from 'react';
import { BiPlus, BiLink } from 'react-icons/bi';
import './portfolio.css';
import app1 from './images/app1.jpg';
import web3 from './images/web3.jpg';
import App3 from './images/app3.jpg';
import card from './images/card1.jpg';
import web1 from './images/web1 (1).jpg';
import web6 from './images/web2.jpg';
import web5 from './images/app2.jpg';
import web7 from './images/card3.jpg';
import web8 from './images/card2.jpg';

const Portfolio = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState('*');

  const handleCardClick = (index) => {
    if (selectedCard === index) {
      setSelectedCard(null);
    } else {
      // Show the clicked card
      setSelectedCard(index);
    }
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSelectedCard(null); // Reset selected card when filter changes
  };

  const filteredItems = activeFilter === '*'
    ? [
        { image: app1, category: 'app', githubLink: 'https://github.com/example1', demoLink: 'https://example1.com' },
        { image: web3, category: 'web', githubLink: 'https://github.com/example2', demoLink: 'https://example2.com' },
        { image: App3, category: 'app', githubLink: 'https://github.com/example3', demoLink: 'https://example3.com' },
        { image: card, category: 'card', githubLink: 'https://github.com/example4', demoLink: 'https://example4.com' },
        { image: web1, category: 'web', githubLink: 'https://github.com/example5', demoLink: 'https://example5.com' },
        { image: web5, category: 'app', githubLink: 'https://github.com/example6', demoLink: 'https://example6.com' },
        { image: web7, category: 'card', githubLink: 'https://github.com/example7', demoLink: 'https://example7.com' },
        { image: web6, category: 'web', githubLink: 'https://github.com/example8', demoLink: 'https://example8.com' },
        { image: web8, category: 'card', githubLink: 'https://github.com/example9', demoLink: 'https://example9.com' },
      ]
    : [
        { image: app1, category: 'app', githubLink: 'https://github.com/example1', demoLink: 'https://example1.com' },
        { image: App3, category: 'app', githubLink: 'https://github.com/example3', demoLink: 'https://example3.com' },
        { image: web5, category: 'app', githubLink: 'https://github.com/example6', demoLink: 'https://example6.com' },
      ].filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3 className="section-title">Our Portfolio</h3>
        </header>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li
                data-filter="*"
                className={`filter-item ${activeFilter === '*' ? 'filter-active' : ''}`}
                onClick={() => handleFilterClick('*')}
              >
                All
              </li>
              <li
                data-filter=".filter-app"
                className={`filter-item ${activeFilter === 'app' ? 'filter-active' : ''}`}
                onClick={() => handleFilterClick('app')}
              >
                App
              </li>
              <li
                data-filter=".filter-card"
                className={`filter-item ${activeFilter === 'card' ? 'filter-active' : ''}`}
                onClick={() => handleFilterClick('card')}
              >
                Card
              </li>
              <li
                data-filter=".filter-web"
                className={`filter-item ${activeFilter === 'web' ? 'filter-active' : ''}`}
                onClick={() => handleFilterClick('web')}
              >
                Web
              </li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 portfolio-item filter-${item.category}`}
            >
              <div
                className={`portfolio-wrap ${selectedCard === index ? 'card-selected' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <figure>
                  <img src={item.image} className="img-fluid" alt="" />
                </figure>
                <div className="portfolio-info">
                  <p>{item.category}</p>
                  <div className="portfolio-links">
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <BiLink />
                    </a>
                    <a href={item.demoLink} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <BiPlus />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
