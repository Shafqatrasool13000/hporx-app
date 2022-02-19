import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import chillum1 from '../../../assets/chillum1.svg'
import chillum2 from '../../../assets/chillum2.svg'
import chillum3 from '../../../assets/chillum3.svg'
import { ChillumImg, ChillumSlickContainer } from './StyledChillums';

const ChillumsSlick = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <ChillumSlickContainer>

      <Slider {...settings} className='inhalate-slick'>
        <div>
          <ChillumImg src={chillum1} />
        </div>
        <div>
          <ChillumImg src={chillum2} />
        </div>
        <div>
          <ChillumImg src={chillum3} />
        </div>
        <div>
          <ChillumImg src={chillum1} />
        </div>
        <div>
          <ChillumImg src={chillum2} />
        </div>
        <div>
          <ChillumImg src={chillum3} />
        </div>

      </Slider>
    </ChillumSlickContainer>

  )
}

export default ChillumsSlick