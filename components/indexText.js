import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

const IndexText = () => {

  var settings = {
      dots: true,
      infinite: false,
      initialSlide: 0, autoplay: true,
      speed: 8000,
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
          <img className="hotel" src="hotel_with_flowers.jpg" />
          </div>
          <div>
              <img className="hotel" src="Hotel.jpg" />
          </div>
          <div>
          <img className="hotel" src="hotel_with_lenore.jpg" />
          </div>
          <div>
          <img className="hotel" src="Hotel_02.jpg" />
          </div>
       
        </Slider>
      </div>
    );
  };


export default IndexText;
