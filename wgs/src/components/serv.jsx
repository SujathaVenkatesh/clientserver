import React, { useEffect, useRef } from 'react';
import './serv.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import imge7 from './images/imge1.jpg';
import imge2 from './images/imge2.jpg';
import imge1 from './images/imge3.jpg';
import imge4 from './images/imge4.jpg';
import imge5 from './images/imge5.jpg';

const Serv = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      const owl = window.jQuery(carousel);
      owl.owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        margin: 8,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
      });

      const nextButton = document.getElementById('b2');
      if (nextButton) {
        nextButton.addEventListener('click', function () {
          owl.trigger('next.owl.carousel');
        });
      }

      const prevButton = document.getElementById('b1');
      if (prevButton) {
        prevButton.addEventListener('click', function () {
          owl.trigger('prev.owl.carousel');
        });
      }
    }
  }, []);

  return (
  <div>

    <div className='set'>
      <div id="d">
        <div id="rectangle" className="rectangle"></div>
        <div id="rectangle1" className="rectangle"></div>
        <div className="line">
          <span>
            <h2 className="h1">
              <strong>Our Services</strong>
            </h2>
          </span>
          <br></br>
        </div>
        <div id="d2s" className="container text-white">
          <h2 className="fs-1">
            <strong>WE PROVIDE BEST SOLUTIONS <br />FOR PREPARING <br />YOUR SUCCESS</strong>
          </h2>
          <br></br>
          <h3>We help digital companies to volume<br />their self-interest and get a space.</h3>
        </div>
      </div>
      <div className="containerid">
        <div ref={carouselRef} className="owl-carousel owl-theme">
          <div className="itemsa">
            <img id="im1" src={imge7} alt="Service 1" />
            <h5 className="hdd"><b>WEB DEVELOPMENT</b></h5>
            <h4 className="hd"><strong>Read more</strong></h4>
          </div>
          <div className="itemsa">
  <img id="im2" className="product-development-image" src={imge2} alt="Service 2" />
  <h5 className="hdd"><b>PRODUCT DEVELOPMENT</b></h5>
  <h4 className="hd"><strong>Read More</strong></h4>
</div>

<div className="itemsa">
  <img id="im3" className="e-commerce-image" src={imge1} alt="Service 2" />
  <h5 className="hdds"><b>E-COMMERCE</b></h5>
  <h4 className="hd"><strong>Read More</strong></h4>
</div>

<div className="itemsa">
  <img id="im4" className="digital-marketing-image" src={imge4} alt="Service 4" />
  <h5 className="hdda"><b>DIGITAL MARKETING</b></h5>
  <h4 className="hd"><strong>Read More</strong></h4>
</div>
          <div className="itemsa">
  <img id="im5" className="content-development-image" src={imge5} alt="Service 5" />
  <h5 className="hdd"><b>CONTENT DEVELOPMENT</b></h5>
  <h4 className="hd"><strong>Read More</strong></h4>
</div>
        </div>
      </div>
      <div className="m-4">
        <div className="bts-group">
          <button id="b1" type="button" className="btn rounded-circle">
            <i className="fa fa-angle-double-left"></i>
          </button>
          <button id="b2" type="button" className="btn rounded-circle">
            <i className="fa fa-angle-double-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Serv;
