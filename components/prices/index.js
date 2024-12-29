import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PricesItems from './pricesItems';
import PricesSliderLogo from './pricesSliderLogo';

const TrustLogos = [
  { src: "/images/trust-1.png", alt: "Slide1" },
  { src: "/images/trust-2.png", alt: "Slide2" },
  { src: "/images/trust-3.png", alt: "Slide3" },
  { src: "/images/trust-4.png", alt: "Slide4" },
  { src: "/images/trust-5.png", alt: "Slide5" },
];
const Prices = () => {
  return (
    <section className='prices-bg pb-4'>
      <Container className='position-container'>
        <Row className="pt-5 d-flex justify-content-center"> 
          <Col lg={8} className="pt-4 d-flex justify-content-center">
            <div className="d-flex pb-4">
              <div className="vertical-line mt-3"></div>
              <h5 className="red-color pt-1 mx-3">خدمات ما</h5>
              <div className="vertical-line mt-3"></div> 
            </div>
          </Col>
          <Col lg={8} className='pt-2 pb-lg-4 pb-md-5 pb-sm-4 px-0 w-lg-50 w-md-100 w-sm-100 xs-display text-center'>
            <p className='fw-light fs-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
          </Col>
        </Row>
        <Row>
          <PricesItems />
        </Row>
        <Row className="pt-5 d-flex justify-content-center"> 
          <Col lg={12} className="pt-4 d-flex justify-content-center px-0 align-items-center">
              <div className="d-flex w-100 pb-4">
                  <div className="title-line mt-3 "></div>
                  <h5 className="red-color pt-1 text-nowrap mx-3">لگوهای شرکت</h5>
                  <div className="title-line mt-3 "></div>
              </div>
          </Col>
          <Col lg={12} className='pb-5 d-flex justify-content-center'>
            <PricesSliderLogo logos={TrustLogos} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Prices;
