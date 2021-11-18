import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

const GwaiihaanasText = () => {

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
          <LazyLoad> <img className="hotel" src="/gwaiihaanas01.jpg" /></LazyLoad>
          </div>
          <div>
              <LazyLoad><img className="hotel" src="/gwaiihaanas02.jpg" /></LazyLoad>
          </div>
          <div>
            <LazyLoad><img className="hotel" src="/gwaiihaanas03.jpg" /></LazyLoad>
          </div>
              <div>
            <LazyLoad><img className="hotel" src="/gwaiihaanas04.jpg" /></LazyLoad>
          </div>
              <div>
            <LazyLoad><img className="hotel" src="/gwaiihaanas05.jpg" /></LazyLoad>
          </div>   <div>
            <LazyLoad><img className="hotel" src="/gwaiihaanas06.jpg" /></LazyLoad>
          </div>
        </Slider>
      </div>
    );
  };


export default GwaiihaanasText;