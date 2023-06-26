import React, { useEffect } from 'react';
import './counter.css';
import tcs1 from './images/port3.avif';
import tcs2 from './images/tcs2.jpg';
import tcs3 from './images/tcs3.jpeg';
import port from './images/port.jpg';
import { Link } from 'react-router-dom';

function Counter() {
  useEffect(() => {
    const counterupElements = document.querySelectorAll('.counter_up');
    const convert = Array.from(counterupElements);

    convert.forEach((counteritem) => {
      let counter = 0;
      const count = () => {
        counter++;
        counteritem.innerHTML = counter;
        if (counter === parseInt(counteritem.dataset.number, 10)) {
          clearInterval(timing);
        }
      };

      const timing = setInterval(count, parseInt(counteritem.dataset.speed, 10) / counter);
    });
  }, []);

  return (
    <div>
      <div className="rectangle3">
        <h2 className="hh1">We provide</h2>
        <h2 className="hh">EMBRACING TECHNOLOGY <br />EMPOWERING BUSINESS</h2>
        <h4 className="hh2">We enable business to embrace technologies<br />and empower them to achieve their business<br />goals and objectives</h4>
        <button>GET A QUOTE</button>
        <button>
          <Link to="/Portfolio">PORTFOLIO</Link>
        </button>
      </div>

      <div className="rectangle4">
        <div>
          <img id="i1" src={tcs1} alt="Image1" />
          <img id="i2" src={tcs2} alt="Image2" />
          <img id="i3" src={tcs3} alt="Image3" />
          <img id="i4" src={port} alt="Image4" />
        </div>
      </div>

      <div className="boxs">
        <h2 id="hh3">
          <center>
            <strong><b><span className="counter_up" data-number="500" style={{ fontSize: '90px' }}></span></b></strong>
            <p id="p1" style={{ color: '#f08620' }}><b>+</b></p>
          </center>
          YEARS OF EXPERIENCE <br />IN IT
        </h2>
      </div>
    </div>
  );
}

export default Counter;
