import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSliders,  faDigitalTachograph } from '@fortawesome/free-solid-svg-icons';
import './swiper.css';
import {Link} from 'react-router-dom';


const   swiper = () => {
  return (
  <section className='swip'>

    <div className="wrapper">

      <div className="containero">
     
        <div className="rowo">
          {/* Card 1 */}
          <div className="cardo">
            <div className="info">
              <div className="sub">Digital Marketing</div>
              <div className="title">Digital marketing content is strategic and engaging online material created to promote brands, products, or services.</div>
              <div className="text-center">
          <button className="link-button animated-button" >
               <Link to="/DM">Learn</Link></button>
          </div>            </div>
            <div className="image">
              <FontAwesomeIcon icon={faDigitalTachograph} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="cardo">
            <div className="info">
              <div className="sub">Web Development</div>
              <div className="title">A web developer is a professional who designs and builds websites and web applications.</div>
              <div className="text-center">
          <button className="link-button animated-button" >
               <Link to="/Webs">Learn</Link></button>
          </div>
            </div>
            <div className="image">
              <FontAwesomeIcon icon={faBolt} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="cardo">
            <div className="info">
              <div className="sub">UI Designer</div>
              <div className="title">
UI designer creates visually engaging and user-friendly digital interfaces.</div>
              <div className="text-center">
          <button className="link-button animated-button" >
               <Link to="/UI">Learn</Link></button>
          </div>            </div>
            <div className="image">
              <FontAwesomeIcon icon={faSliders} />
            </div>
          </div>
        </div>
</div>
        
    </div>
    </section>
  );
}

export default swiper;
