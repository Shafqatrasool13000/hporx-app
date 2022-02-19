import React from 'react'
import { Col, Row } from 'react-bootstrap'
import portables1 from '../../../assets/portables1.svg'
import portables2 from '../../../assets/portables2.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PortableImg, PortableMiniImg, PortableSlickMain } from './PortableStyles';


const PortableSlick = () => {
    
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
     <PortableSlickMain>


    <Slider {...settings} className='portable-slick'>
        <div>
        <Row className='d-flex align-items-center'>
            <Col xs={12} md={5}>
                <div className='portable-img'>

                <PortableMiniImg src={portables1} alt='vaporize-img' />
                </div>
            </Col>
            <Col xs={12} md={5} >
                <div className='portable-img'>
                <PortableMiniImg src={portables2} alt='vaporize-img2' />
                </div>
            </Col>
        </Row>
        </div>
        <div>
        <Row className='d-flex align-items-center'>
            <Col xs={12} md={5}>
                <PortableMiniImg src={portables1} alt='vaporize-img' />
            </Col>
            <Col xs={12} md={5} className='me-4'>
                <PortableMiniImg src={portables2} alt='vaporize-img2' />
            </Col>
        </Row>
        </div>
       
        
    </Slider>
     </PortableSlickMain>
  )
}

export default PortableSlick