import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ImageSection from './ImageSection';
import FaqSection from './FaqSection';

const FrequentlyQuestions = () => {
  return (
    <div className='faq-container position-relative pt-5'> 
      <Container className='pt-5 mb-3'>
        <Row>
          <Col lg={8}>
            <FaqSection />
          </Col>
          <Col lg={4}>
            <ImageSection />
          </Col>
        </Row>
      </Container>
      <div className="shadow-line"></div> 
    </div> 
  )
}

export default FrequentlyQuestions;
