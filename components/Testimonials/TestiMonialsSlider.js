import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Card, CardBody, CardHeader, CardText } from 'react-bootstrap';

const TestiMonialsSlider = ({ Items }) => {
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    loop = {true}
    autoplay = {{
        delay: 5000, 
        disableOnInteraction: false,
    }}
    modules = {[Autoplay,Pagination]}
    pagination={true}
 
      breakpoints={{

        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1, 
        },
        480: {
          slidesPerView:1,
        }
      }}
      className="testimonial-swiper"
    >
      {Items.map((item, index) => (
        <SwiperSlide key={index} className="w-sm-100 w-md-50">
          <Card className="border-0 bg-transparent text-end">
            <CardHeader className="border-0">
              <i className="bi bi-quote large-quote-icon"></i>
            </CardHeader>
            <CardBody>
              <CardText className="text-white size-text text-height text-line-height">
                {item.text}
              </CardText>
              <div className="d-flex flex-row gap-3 pt-5 align-items-start">
                <div className="vertical-line mt-1"></div>
                <div className="d-flex flex-column">
                  <h5 className="text-white text-font">{item.name}</h5>
                  <h6 className="font-color text-font">{item.career}</h6>
                </div>
              </div>
            </CardBody>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestiMonialsSlider;
