import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import inhalte1 from '../../assets/inhalte1.svg'
import inhalte2 from '../../assets/inhalte2.svg'
import {InhalateContainer, InhalteImg} from './StyledInhalate'

const InhalateSlick = () => {
    
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
      <InhalateContainer>

    <Slider {...settings} className='inhalate-slick'>
        <div>
        <InhalteImg src={inhalte1}/>
        </div>
        <div>
        <InhalteImg src={inhalte2}/>
        </div>
        <div>
        <InhalteImg src={inhalte1}/>
        </div>
        <div>
        <InhalteImg src={inhalte2}/>
        </div>
        
    </Slider>
      </InhalateContainer>
  )
}

export default InhalateSlick