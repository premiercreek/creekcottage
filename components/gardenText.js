import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';


const GardenText = () => {

  var settings = {
      dots: true,
      infinite: false,
      initialSlide: 0, autoplay: true,
      speed: 12000,
      fade: true,
      cssEase: "linear",
      lazyLoad: true,
      swipeToSlide: true,
      infinite: true
    };

  return (
		<div className="mainText">
  
      
          <Slider {...settings}>
            <div>
            <LazyLoad> <img className="hotel" src="/garden_02.jpg" /></LazyLoad>
            </div>
            <div>
                <LazyLoad><img className="hotel" src="/garden_03.jpg" /></LazyLoad>
            </div>
            <div>
              <LazyLoad><img className="hotel" src="/garden_01.jpg" /></LazyLoad>
            </div>
            <div>
              <LazyLoad><img className="hotel" src="/garden.jpg" /></LazyLoad>
            </div>
          </Slider>
 
      </div>
    );
  };


export default GardenText;
