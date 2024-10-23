import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay } from 'swiper';
import { Container } from 'react-bootstrap';
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

  const handleBoxClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container fluid className="p-0">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        className="swiper-slider"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
       // autoplay={false}
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

      {/* کامپوننت HeaderBoxes */}
      <HeaderBoxes slides={slides} activeIndex={activeIndex} handleBoxClick={handleBoxClick} />
    </Container>
  );
};

export default HeaderSlider;
