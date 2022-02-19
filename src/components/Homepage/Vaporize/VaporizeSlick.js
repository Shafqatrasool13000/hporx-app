import { Col, Row } from 'react-bootstrap'
import { VaporizeImg } from './StyledVaporize'
import vaporize1 from '../../../assets/vaporize1.svg'
import vaporize2 from '../../../assets/vaporize2.svg'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const VaporizeSlick = () => {
    
    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 1
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
     

    <Slider {...settings} className='inhalate-slick'>
        <div>
        <Row className='d-flex align-items-center'>
            <Col xs={12} md={7}>
                <VaporizeImg src={vaporize1} alt='vaporize-img' />
            </Col>
            <Col xs={12} md={4} className='me-4'>
                <VaporizeImg src={vaporize2} alt='vaporize-img2' />
            </Col>
        </Row>
        </div>
        <div>
        <Row className='d-flex align-items-center'>
            <Col xs={12} md={7}>
                <VaporizeImg src={vaporize1} alt='vaporize-img' />
            </Col>
            <Col xs={12} md={4} className='me-4'>
                <VaporizeImg src={vaporize2} alt='vaporize-img2' />
            </Col>
        </Row>
        </div>
       
        
    </Slider>
  )
}

export default VaporizeSlick