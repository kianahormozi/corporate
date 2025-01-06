import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const HeaderCenter = ({ slideTitle, slideText }) => {
  return (
    <Container className="center-content position-relative px-0 ">
      <Row className="align-items-center">
        <Col lg={8}>
          <div className="title-container position-relative pb-4 ">
            <div className="animated-line"></div> 
            <p className="main-title">{slideTitle}</p> 
          </div>
          <p className="description pb-5">{slideText}</p>
          <Link href='/' className="link-button">ادامه مطلب</Link>
        </Col>
      </Row>
    </Container> 
  );
};

export default HeaderCenter;
