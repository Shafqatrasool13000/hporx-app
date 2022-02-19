import React from 'react'
import CutivationSlick from './CutivationSlick'
import { CutivationHeading, CutivationMainContainer, CutivationSubHeading, CutivationTertiaryHeading } from './StyledCutation'


const Cutivation = () => {
    return (
        <CutivationMainContainer>
            <CutivationHeading>Cutivation</CutivationHeading>
            <CutivationSubHeading>Home Grow</CutivationSubHeading>
            <CutivationTertiaryHeading>Grow your dose privately at home</CutivationTertiaryHeading>
                <CutivationSlick />
           
        </CutivationMainContainer>
    )
}

export default Cutivation