import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';


const HistoryText = () => {

  var settings = {
      dots: true,
      infinite: false,
      initialSlide: 0, autoplay: true,
      speed: 8000,
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
           <LazyLoad><img className="hotel" src="/History.jpg" /></LazyLoad>
          </div>
          <div>
              <LazyLoad><img className="hotel" src="/History_01.jpg" /></LazyLoad>
          </div>
          <div>
            <LazyLoad><img className="hotel" src="/History_02.jpg" /></LazyLoad>
          </div>
          <div>
            <LazyLoad><img className="hotel" src="/History_03.jpg" /></LazyLoad>
          </div>
        </Slider>
      </div>
    );
  };


export default HistoryText;

      