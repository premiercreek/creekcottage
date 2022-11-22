import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

const IndexText = () => {

  var settings = {
      dots: true,
      infinite: false,
      initialSlide: 0, autoplay: true,
      speed: 12000,
      lazyLoad: 'progressive',
      fade: true,
      cssEase: "linear",
      lazyLoad: true,
      swipeToSlide: true,
      infinite: true
    };

  return (
		<div className="mainText">
  <LazyLoad height= {1} src="hotel_with_flowers.jpg"></LazyLoad>
  <LazyLoad height= {1} src="Hotel.jpg"></LazyLoad>
  <LazyLoad height= {1} src="hotel_with_lenore"></LazyLoad>


  <LazyLoad height= {1} src="Hotel_02.jpg"></LazyLoad>

        <Slider {...settings}>
			         <div>
            <LazyLoad><img className="hotel" src="/Cottage_03.jpg" /></LazyLoad>
          </div>
          <div>
          <LazyLoad> <img className="hotel" src="/Cottage.jpg" /></LazyLoad>
          </div>
						         <div>
            <LazyLoad><img className="hotel" src="/Cottage_05.jpg" /></LazyLoad>
          </div>
			         <div>
            <LazyLoad><img className="hotel" src="/Cottage_06.jpg" /></LazyLoad>
          </div>

        </Slider>
      </div>
    );
  };


export default IndexText;
