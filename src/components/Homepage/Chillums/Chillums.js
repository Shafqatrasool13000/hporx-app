import React from 'react'
import { Container} from 'react-bootstrap'
import { PortableButton } from '../Portable/PortableStyles'

import ChillumsSlick from './ChillumsSlick'
import { ChillumButton, ChillumContainer, ChillumHeading, ChillumSubHeading } from './StyledChillums'
const Chillum = () => {
    return (
        <ChillumContainer>
            <Container>
                <ChillumHeading>CHILLUMS</ChillumHeading>
                <ChillumSubHeading>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</ChillumSubHeading>
            </Container>
            <ChillumsSlick/>
            <ChillumButton>view more</ChillumButton>
        </ChillumContainer>
    )
}

export default Chillum