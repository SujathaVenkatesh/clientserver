import React from 'react';
import '../../App.css';
import Slider from '../slider1';
import Footer from '../Footer';
import Session from '../session';
import Carousel from '../swiper';
import Cards from '../Cards';
import Serv from '../serv';
import  FactsSection from '../count2';
import Testimonials from '../testimonials';
import Snap from '../snaps';
import './Home.css';
function Home() {
  return (
    <div>
      <Slider />
      <Cards/>

      <Serv/>

      <Session/> 


      <Carousel/> 
      <FactsSection/>

      <Snap/>


      <Testimonials/>

      <Footer/>

    </div>
  );
}

export default Home;