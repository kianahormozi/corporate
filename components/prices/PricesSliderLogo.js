import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const PricesSliderLogo = ({ logos }) => {
  return (
    
    <Swiper
      slidesPerView={4} 
      spaceBetween={50} 
      loop={true}
      autoplay={{
        delay: 100, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true, 
      }}
      speed={5000} 
      modules={[Autoplay]}
      breakpoints={{
        992: {
          slidesPerView :4,
        },
        768: {
          slidesPerView:4,
        },
        576:{
          slidesPerView:3,
        },
      }}
      className="my-swiper"
    >
      {logos.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide.src}
            alt={slide.alt}
            width={182} 
            height={100} 
            className="swiper-img"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PricesSliderLogo;
