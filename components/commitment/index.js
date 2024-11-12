import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Commitment = () => {
  return (
    <Container fluid className='commitment-bg'>
        <Row className='py-5'>
            <Col lg={8} className=' mx-auto'>
                <h2 className='commitment-text text-line-height text-center'>
                با صداقت نسبت به خود، متعهدیم که همواره با بالاترین توان خود عمل کنیم
                </h2>
            </Col>
        </Row>
    </Container>
  )
}

export default Commitment;
