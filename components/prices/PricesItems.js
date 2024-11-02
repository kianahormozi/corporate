import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

const slides = [
  {
    front: { image: '/images/flip-1.jpg', title: "استاندارد", price: "190$" },
    back: { icon: 'bi-globe-americas', text1: "دسترسی به 10 پروژه رایگان", text2: "15 گیگابایت فضای ذخیره‌سازی", text3: "بدون محدودیت در تعداد کاربران", text4: "20 گیگابایت ترافیک اینترنتی" }
  },
  {
    front: { image: '/images/flip-2.jpg', title: "پریمیوم", price: "200$" },
    back: { icon: 'bi-suitcase-lg',  text1: "دسترسی به 10 پروژه رایگان", text2: "15 گیگابایت فضای ذخیره‌سازی", text3: "بدون محدودیت در تعداد کاربران", text4: "20 گیگابایت ترافیک اینترنتی" }
  },
  {
    front: { image: '/images/flip-3.jpg', title: "لوکس", price: "150$" },
    back: { icon: 'bi-gift', text1: "دسترسی به 10 پروژه رایگان", text2: "15 گیگابایت فضای ذخیره‌سازی", text3: "بدون محدودیت در تعداد کاربران", text4: "20 گیگابایت ترافیک اینترنتی" }
  }
];

const PricesItems = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Container className='pb-5 px-md-0'>
      <Row className='px-0'>
        {slides.map((slide, index) => (
          <Col lg={4} md={4} sm={12} key={index} className="d-flex justify-content-center pt-md-5 pt-sm-5 mb-4">
            <Card className="flip-card border-0 shadow w-100 mx-2" style={{ '--bg-image': `url(${slide.front.image})` }}>
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <Card.Body className="d-flex flex-column justify-content-start text-center front-card-text text-white">
                    <h5 className='card-text'>{slide.front.title}</h5>
                    <h1 className='card-text fw-bold'>{slide.front.price}</h1>
                    <p className='card-text'>در سال</p>
                  </Card.Body>
                </div>
                <div className="flip-card-back">
                  <Card.Body className='card-back-body'>
                      <i className={`${slide.back.icon} text-dark mb-2 card-icon`}></i>
                      <h4 className="text-white text-center back-text">{slide.back.text1}</h4>
                      <h4 className="small text-white text-center back-text">{slide.back.text2}</h4>
                      <h4 className="small text-white text-center back-text">{slide.back.text3}</h4>
                      <h4 className="small text-white text-center back-text">{slide.back.text4}</h4>
                      <Link href="/" ariaLabel="بیشتر بدانید" className='card-link-button mt-4' >بیشتر بخوانید</Link>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PricesItems;
