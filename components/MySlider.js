import React, { Component } from "react";
import Slider from "react-slick";



const MySlider = (props) => {

   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      initialSlide: 0, autoplay: true,
      speed: 2000,
      fade: true,
      cssEase: "linear",
      lazyLoad: true,
      swipeToSlide: true
      
    };
    return (
      <div>
      
        <Slider {...settings}>
          <div>
        {props.children}
           {/* <img src="Hotel.jpg" />
          </div>
          <div>
              <img src="Hotel_01.jpg" />
          </div>
          <div>
            <img src="Hotel_02.jpg" />
          </div>
          <div>
            <img src="Hotel_03.jpg" />
          </div>
          <div>
           <img src="Hotel_04.jpg" /> */}
          </div>
        </Slider>
      </div>
    );
  };
  export default MySlider;