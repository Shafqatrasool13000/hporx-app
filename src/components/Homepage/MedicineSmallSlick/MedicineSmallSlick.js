import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import medicSlide1 from '../../../assets/medicslide1.svg'
import medicSlide2 from '../../../assets/medicslide2.svg'
import medicSlide3 from '../../../assets/medicslide3.svg'
import medicSlide4 from '../../../assets/medicslide4.svg'
import medicSlide5 from '../../../assets/medicslide5.svg'
import medicSlide6 from '../../../assets/medicslide6.svg'

import { Container } from 'react-bootstrap';
import { MedicineSmallImg, MedicineSmallImgContainer, SmallMedicineContainerMain } from './StyledMedicineSmallSlick';


const MedicineSmallSlick = () => {
    const medicSlides = [medicSlide1, medicSlide2, medicSlide3, medicSlide4, medicSlide5, medicSlide6,medicSlide1, medicSlide2, medicSlide3, medicSlide4, medicSlide5, medicSlide6]

    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <SmallMedicineContainerMain>
            <Container>
                <Slider className='d-flex align-items-center' {...settings} >
                    {
                        medicSlides.map((smallMedicine, index) => <div>
                            <MedicineSmallImgContainer key={index}>
                                <MedicineSmallImg src={smallMedicine} alt={smallMedicine} />
                            </MedicineSmallImgContainer>
                        </div>)
                    }

                </Slider>
            </Container>

        </SmallMedicineContainerMain>
    )
}

export default MedicineSmallSlick