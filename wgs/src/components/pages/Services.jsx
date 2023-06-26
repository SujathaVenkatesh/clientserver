import React from 'react';
import './Services.css';
import digital from '../images/digital.avif';
import Web from '../images/web.jpg';
import ui from '../images/u2.jpg';
import product from '../images/product.png';
import content from '../images/content.jpg';
import ecom from '../images/ecom.jpg'
import Footer from '../Footer';
import {Link} from 'react-router-dom';
import Sercon from '../sercon';

// import Webs from '../Web';
function Services() {
  return (
    <div>
      <Sercon/>
    {/* <Webs/> */}
    <div className="about-us-container">
        <h1 className="head">Our Services</h1>
        <hr className="horizontal-line" />

       
    <div className="container-fluid">
      <div className="card shadow">
        <img src={digital} alt="" className="cards-img-top" />
        <div className="card-body">
          <h3 className="text-center">Digital Marketing</h3>
          <hr className="mx-auto w-75" />
          <p>
          Digital marketing encompasses various strategies and tactics that businesses use to promote their products, services, or brand through digital channels. It leverages the internet, mobile devices, social media platforms, search engines, and other digital platforms to reach and engage with the target audience.           </p>
          <div className="text-center">
          <button className="link-button animated-button" >
               <Link to="/DM">ReadMore</Link></button>
          </div>
        </div>
      </div>
      {/* Rest of the cards */}
      {/* Remaining cards */}
      <div className="card shadow">
        <img src={Web} alt="" className="cards-img-top" />
        <div className="card-body">
          <h3 className="text-center">Web Development</h3>
          <hr className="mx-auto w-75" />
          <p>
          Web development is the process of creating websites and web applications. It involves designing, building, and maintaining websites using various technologies and programming languages.They are proficient in a combination of technologies that allow them to work on all aspects of web development 
          </p>
          <div className="text-center">
          <button className="link-button animated-button" >
               <Link to="/Webs">ReadMore</Link></button>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <img src={product} alt="" className="cards-img-top" />
        <div className="card-body">
          <h3 className="text-center">Product Development</h3>
          <hr className="mx-auto w-75" />
          <p>
          Product development is the process of creating new products or improving existing products to meet the needs of consumers and bring value to the market. It involves a series of steps from ideation to launch and often includes market research, concept development, prototyping, testing, and final production.
          </p>
          <div className="text-center">
          <button className="link-button animated-button" >
               <Link to="/Pro">ReadMore</Link></button>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <img src={ui} alt="serv" className="cards-img-top" />
        <div className="card-body">
          <h3 className="text-center">UI Designs</h3>
          <hr className="mx-auto w-75" />
          <p>
          Product development is the process of creating new products or improving existing products to meet the needs of consumers and bring value to the market. It involves a series of steps from ideation to launch and often includes market research, concept development, prototyping, testing, and final production.
          </p>
          <div className="text-center">
          <button className="link-button animated-button" >
               <Link to="/UI">ReadMore</Link></button>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <img src={content} alt="sujj" className="cards-img-top" />
        <div className="card-body">
          <h3 className="text-center">Content Development</h3>
          <hr className="mx-auto w-75" />
          <p>
          ontent development refers to the process of creating, planning, and producing various forms of content to engage, inform, and entertain a specific target audience. It encompasses a wide range of mediums, including written articles, blog posts, social media posts, videos, podcasts, infographics, and more. 
          </p>
          <div className="text-center">
          <button className="link-button animated-button" >
               <Link to="/Content">ReadMore</Link></button>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <img src={ecom} alt="" className="card-img-top" />
        <div className="card-body">
          <h3 className="text-center">E Commerce</h3>
          <hr className="mx-auto w-75" />
          <p>
          E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It involves the online transaction of products, services, and information between businesses, consumers, or individuals. E-commerce has become increasingly popular in recent years due to its convenience, global reach, and accessibility. 
          </p>
          <div className="text-center">
          <button className="link-button animated-button" >
               <Link to="/Ecom">ReadMore</Link></button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Services;
