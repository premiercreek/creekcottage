import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

const WildlifeText = () => {

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
    <LazyLoad height= {1} src="/wildlife06.jpg"></LazyLoad>
  <LazyLoad height= {1} src="/wildlife04.jpg"></LazyLoad>
  <LazyLoad height= {1} src="/wildlife05.jpg"></LazyLoad>
  <LazyLoad height= {1} src="/wildlife02.jpg"></LazyLoad>
        <Slider {...settings}>
          <div>
          <LazyLoad> <img className="hotel" src="/wildlife06.jpg" /></LazyLoad>
          </div>
          <div>
              <LazyLoad><img className="hotel" src="/wildlife04.jpg" /></LazyLoad>
          </div>
          <div>
            <LazyLoad><img className="hotel" src="/wildlife05.jpg" /></LazyLoad>
          </div>
          <div>
            <LazyLoad><img className="hotel" src="/wildlife02.jpg" /></LazyLoad>
          </div>
        </Slider>
      </div>
    );
  };


export default WildlifeText;
