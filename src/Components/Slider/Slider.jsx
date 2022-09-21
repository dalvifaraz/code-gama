import React from 'react';
import './Slider.css';
import slider from '../../Assets/slider.jpg';
import slider1 from '../../Assets/slider1.jpg';
import slider2 from '../../Assets/slider3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
  return (
    <React.Fragment>
      <Carousel
        className='carousel_width'
        infiniteLoop={true}
        autoPlay={true}
        interval={1000}
      >
        <div>
          <img src={slider} alt='slider' />
          {/* <p className='legend'>Legend 1</p> */}
        </div>
        <div>
          <img src={slider1} alt='slider1' />
          {/* <p className='legend'>Legend 2</p> */}
        </div>
        <div>
          <img src={slider2} alt='slider2' />
          {/* <p className='legend'>Legend 3</p> */}
        </div>
      </Carousel>
    </React.Fragment>
  );
}
