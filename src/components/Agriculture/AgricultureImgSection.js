import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import agri1 from '../../assets/agri1.svg';
import agri2 from '../../assets/agri2.svg';
import agri3 from '../../assets/agri3.svg';
import agri4 from '../../assets/agri4.svg';
import agri5 from '../../assets/agri5.svg';
import { AgricultureImgsSection, AgricultureImgContainer } from './StyledAgriculture';

const AgricultureImgSection = () => {
    return (
        <AgricultureImgsSection>
            <Container fluid>
                <Row className='d-flex'>
                    <Col lg={8} className='p-0'>
                        <Row>
                            <Col className='p-0' lg={6}><AgricultureImgContainer src={agri1} alt={agri1} /></Col>
                            <Col className='p-0' lg={6}><AgricultureImgContainer src={agri2} alt={agri2} /></Col>
                            <Col className='p-0' lg={6}><AgricultureImgContainer src={agri4} alt={agri4} /></Col>
                            <Col className='p-0' lg={6}><AgricultureImgContainer src={agri5} alt={agri5} /></Col>
                        </Row>
                    </Col>
                    <Col className='padding-0' lg={4}>
                        <AgricultureImgContainer src={agri3} alt={agri3} />
                    </Col>
                </Row>
            </Container>
        </AgricultureImgsSection>
    )
}

export default AgricultureImgSection