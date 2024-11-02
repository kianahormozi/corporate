import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Card, CardImg, CardBody, CardTitle, CardText, CardLink } from 'react-bootstrap';

const BusinessSlider = ({ slides, settings, prevRef, nextRef }) => {
  const shouldDisplaySlider = slides.length > 3;

  return (
    shouldDisplaySlider && (
      <Swiper
        {...settings}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card className='border-0 bg-transparent'>
              <CardImg className='bussiness-img' variant="top" src={slide.image} alt={slide.title} />
              <CardBody className='px-0'>
                <CardTitle className='py-2 fw-bold'>
                  {slide.title}
                </CardTitle>
                <CardText className='text-font'>
                  {slide.description}
                </CardText>
                <CardLink href={slide.link} className='red-color read-more-link'> 
                  <div className="d-flex pt-5 flex-row align-items-center gap-2">
                    <span className='read-more-text'>ادامه مطلب</span>
                    <span className='pt-1 read-more-arrow '>
                      <i className="bi bi-arrow-left"></i>
                    </span>
                    <span className="pt-1 read-more-arrow-back me-2">
                      <i className="bi bi-arrow-left"></i>
                    </span>
                  </div>
                </CardLink>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};

export default BusinessSlider; 
