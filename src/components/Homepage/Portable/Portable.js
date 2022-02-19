import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { InhalateButton } from '../../Inhalete/StyledInhalate'
import { PortableButton, PortableImg, PortableMainContainer, PortableMiniTitle1, PortableMiniTitle2, PortableTitle } from './PortableStyles'
// import { VaporizeHeading,VaporizeMainContainer, VaporizeSubHeading } from './StyledVaporize'
import portables from '../../../assets/portable.svg'
import PortableSlick from './PortableSlick'
import { InhalateButton } from '../../Inhalete/StyledInhalate'
// import VaporizeSlick from './VaporizeSlick'


const Portable = () => {
    return (
        <PortableMainContainer>
            <Container>
                <Row className='d-flex  justify-content-between '>
                    <Col xs={12} md={5}>
                <PortableImg src={portables} />

                    </Col>
                    <Col xs={12} md={7}>
                        <PortableTitle>Portable</PortableTitle>
                        <PortableMiniTitle1>You can take it with you!</PortableMiniTitle1>
                        <PortableMiniTitle2>Under Legal prescription</PortableMiniTitle2>
                        <PortableButton>view more</PortableButton>
                        <PortableSlick />
                       
                    </Col>
                </Row>
            </Container>
        </PortableMainContainer>
    )
}

export default Portable