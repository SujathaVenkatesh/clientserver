
import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';

import wgs1 from './images/wgs1.png';
import wgs2 from './images/wgs2.png';
import wgs3 from './images/wgs3.png';
import wgs4 from './images/wgs4.png';
import wgs5 from './images/wgs5.png';
import wgs6 from './images/wgs6.png';
import wgs7 from './images/wgs7.png';
import './snap.css';
const ClientsSection = () => {
  React.useEffect(() => {
    new Swiper('.clients-slider', {
      slidesPerView: 'auto',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2000, // Change delay as desired (in milliseconds)
      },
    });
  }, []);
  return (
    <section id="clients">
      <div className="container" data-aos="zoom-in">
        <header className="section-header">
          <h3>Our Clients</h3>
        </header>

        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img src={wgs1} className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
            <img src={wgs2} className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
            <img src={wgs3} className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
            <img src={wgs4} className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
            <img src={wgs5} className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
            <img src={wgs6} className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
            <img src={wgs7} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
