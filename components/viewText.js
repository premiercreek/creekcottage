import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

const NobathText = () => {

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
           <LazyLoad><img src="/View.jpg" /></LazyLoad>
          </div>
          <div>
              <LazyLoad><img src="/View_01.jpg" /></LazyLoad>
          </div>
          <div>
            <LazyLoad><img src="/View_02.jpg" /></LazyLoad>
          </div>
          <div>
            <LazyLoad><img src="/View_03.jpg" /></LazyLoad>
          </div>
        </Slider>
      </div>
    );
  };
  
  export default NobathText;