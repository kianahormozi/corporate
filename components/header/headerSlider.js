import React, { useState, useRef } from 'react'; // اضافه کردن useRef
import { Container } from 'react-bootstrap';
import  SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import HeaderBoxes from './HeaderBoxes';


SwiperCore.use([Autoplay]);

const slides = [
  { src: "/images/bg-1.jpg", alt: "Slide 1" },
  { src: "/images/bg-2.jpg", alt: "Slide 2" },
  { src: "/images/bg-3.jpg", alt: "Slide 3" },
  { src: "/images/bg-4.jpg", alt: "Slide 4" },
];

const HeaderSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null); 

  const handleBoxClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index); 
    }
  };

  return (
    <Container fluid className="p-0">
      <Swiper
        ref={swiperRef} 
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="swiper-slider"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={0}
                height={0}
                sizes="150vh"
                className=" swiper-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <HeaderBoxes activeSlide={activeIndex} setActiveSlide={handleBoxClick} />
    </Container>
  );
};

export default HeaderSlider;
