import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

const HaidaText = () => {

  var settings = {
      dots: true,
      infinite: false,
      initialSlide: 0, autoplay: true,
      speed: 8000,
      fade: true,
      cssEase: "linear",
      lazyLoad: true,
      swipeToSlide: true
    }
  return (
		<div className="mainText">
  
        <Slider {...settings}>
        <div>
          <LazyLoad> <img className="hotel" src="/haida_05.jpg" /></LazyLoad>
          </div>
          <div>
          <LazyLoad> <img className="hotel" src="/haida_01.jpg" /></LazyLoad>
          </div>
          <div>
              <LazyLoad><img className="hotel" src="/haida_06.jpg" /></LazyLoad>
          </div>
         
        </Slider>
      </div>
    );
  };


export default HaidaText;