import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import inhalte1 from '../../assets/inhalte1.svg'
import inhalte2 from '../../assets/inhalte2.svg'
import InhalateSlick from './InhalateSlick'
import { InhalateButton, InhalateImagesContainer, InhalteContainer, InhalteHeading, InhalteImg, InhalteSubHeading } from './StyledInhalate'
const Inhalate = () => {
    return (
        <InhalteContainer>
            <Container>
                <InhalteHeading>Inhalate</InhalteHeading>
                <InhalteSubHeading>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</InhalteSubHeading>
            </Container>
            <InhalateSlick/>
            <InhalateButton>view more</InhalateButton>
        </InhalteContainer>
    )
}

export default Inhalate