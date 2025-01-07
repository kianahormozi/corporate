import React from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const PostCategoriesCustomers = ({ testimonials }) => {
  return (
    <Container fluid className="pb-lg-5">
      <Swiper
        autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      slidesPerView={1}
      loop
      speed={5000} 
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card className="testimonial-card border-0 my-5 p-lg-0 client-text-align ">
            <Row className="client-display">

                {/* بخش عکس و اطلاعات مشتری */}
                <Col lg={4} xs={12} sm={12} md={4} className="w-auto padding-sm">
                  <Image
                    width={175}
                    height={175}
                    src={testimonial.clientImage}
                    alt={testimonial.client}
                    className="client-image "
                  />
                  <h4 className="client-name mt-3">{testimonial.client}</h4>
                  <p className="client-position text-muted">
                    {testimonial.position}
                  </p>
                </Col>

                <Col xs={12} sm={1} md={1} lg={1} className=" d-flex justify-content-center">
                  <div className="divider-container ">
                      <div className="divider-line "></div>
                          <i className="quote-icon bi bi-quote text-danger"></i>
                      <div className="divider-line"></div> 
                  </div>
                </Col>

                {/* بخش متن پیام */}
                <Col xs={12} sm={6} md={7} lg={7}>
                  <CardBody className="px-0">
                    <blockquote className="client-feedback text-line-height">
                      {testimonial.feedback}
                    </blockquote>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default PostCategoriesCustomers;