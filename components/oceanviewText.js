import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';


const OceanviewKText = () => {

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
    <LazyLoad height= {1} src="/OceanviewNK_02.jpg"></LazyLoad>
  <LazyLoad height= {1} src="/OceanviewNK_01.jpg"></LazyLoad>
  <LazyLoad height= {1} src="/OceanviewNK.jpg"></LazyLoad>
  <LazyLoad height= {1} src="/Oceanview_01.jpg"></LazyLoad>
   <LazyLoad height= {1} src="/Oceanview.jpg"></LazyLoad>
  <LazyLoad height= {1} src="/Oceanview_02.jpg"></LazyLoad>
  <LazyLoad height= {1} src="/Oceanview_03.jpg"></LazyLoad>
        <Slider {...settings}>
         <div>
          <img className="hotel" src="/OceanviewNK_02.jpg" />
          </div>
           <div>
           <img className="hotel" src="/OceanviewNK_01.jpg" />
          </div>
           <div>
           <img className="hotel" src="/OceanviewNK.jpg" />
          </div>
          <div>
           <img className="hotel" src="/Oceanview_01.jpg" />
          </div>
          <div>
             <img className="hotel" src="/Oceanview.jpg" />
          </div>
          <div>
           <img className="hotel" src="/Oceanview_02.jpg" />
          </div>
          <div>
            <img className="hotel" src="/Oceanview_03.jpg" />
          </div>     

        </Slider>
      </div>
    );
  };


export default OceanviewKText;