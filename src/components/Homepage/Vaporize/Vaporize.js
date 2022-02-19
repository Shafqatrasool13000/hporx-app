import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { InhalateButton } from '../../Inhalete/StyledInhalate'
import { VaporizeHeading,VaporizeMainContainer, VaporizeSubHeading } from './StyledVaporize'
import VaporizeSlick from './VaporizeSlick'


const Vaporize = () => {
    return (
        <VaporizeMainContainer>
            <Container>
                <Row className='d-flex align-items-center justify-content-between '>
                    <Col xs={12} md={4}>
                        <VaporizeHeading>VAPORIZE</VaporizeHeading>
                        <VaporizeSubHeading>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</VaporizeSubHeading>
                        <InhalateButton>view more</InhalateButton>

                    </Col>
                    <Col xs={12} md={7}>
                       <VaporizeSlick/>
                      
                    </Col>
                </Row>
            </Container>
        </VaporizeMainContainer>
    )
}

export default Vaporize