import React, { useState, useRef } from 'react'; // اضافه کردن useRef
import { Container } from 'react-bootstrap';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import HeaderBoxes from './headerBoxes';


SwiperCore.use([Autoplay]);

const slides = [
  { src: "/images/bg-1.jpg", alt: "Slide 1" },
  { src: "/images/bg-2.jpg", alt: "Slide 2" },
  { src: "/images/bg-3.jpg", alt: "Slide 3" },
  { src: "/images/bg-4.jpg", alt: "Slide 4" },
];

const HeaderSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null); // استفاده از ref برای کنترل اسلایدر

  const handleBoxClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index); // تغییر به اسلاید مربوطه
    }
  };

  return (
    <Container fluid className="p-0">
      <Swiper
        ref={swiperRef} // اضافه کردن ref
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
                layout="fill"
                objectFit="cover"
                className="image-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* فراخوانی HeaderBoxes */}
      <HeaderBoxes activeSlide={activeIndex} setActiveSlide={handleBoxClick} />
    </Container>
  );
};

export default HeaderSlider;
