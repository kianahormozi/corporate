import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'react-bootstrap';
import Link from 'next/link';


const BusinessSlider = ({ slides, settings }) => {
  if (slides.length <= 3) return null;

  return (
    <Swiper
      {...settings}
      modules={[Navigation, Pagination]}
      pagination={{
        el: "#containerForBullets",
        clickable: true,
        renderBullet: (index, className) =>
          index > 2 ? '' : `<span class="${className}"></span>`,        
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Card className="border-0 bg-transparent">
            <Link href='/'>
            <CardImg className="bussiness-img" variant="top" src={slide.image} alt={slide.title} />
            </Link>
            <CardBody className="px-0">
              <Link href={slide.title} ><CardTitle className="fw-bold primary-color title">{slide.title}</CardTitle> </Link>
              <CardText className="text-font">{slide.description}</CardText>
              <Link href={slide.link} passHref className="text-decoration-none red-color read-more-link">
                  <div className="d-flex pt-5 flex-row align-items-center gap-2">
                    <span className="read-more-text">ادامه مطلب</span>
                    <span className="pt-1 read-more-arrow">
                      <i className="bi bi-arrow-left"></i>
                    </span>
                    <span className="pt-1 read-more-arrow-back me-2">
                      <i className="bi bi-arrow-left"></i>
                    </span>
                  </div>
              </Link>
            </CardBody>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BusinessSlider;
