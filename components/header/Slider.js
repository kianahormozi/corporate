import React, { useState, useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import  SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import HeaderBoxes from './Boxes';


SwiperCore.use([Autoplay]);

const slides = [
  { 
    src: "/images/bg-1.jpg", 
    alt: "Slide 1", 
    title: "عنوان اسلاید اول", 
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" 
  },
  { 
    src: "/images/bg-2.jpg", 
    alt: "Slide 2", 
    title: "عنوان اسلاید دوم", 
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
  },
  { 
    src: "/images/bg-3.jpg", 
    alt: "Slide 3", 
    title: "عنوان اسلاید سوم", 
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است" 
  },
  { 
    src: "/images/bg-4.jpg", 
    alt: "Slide 4", 
    title: "عنوان اسلاید چهارم", 
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است" 
  },
];

const HeaderSlider = ({ onSlideChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleBoxClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index); 
    }
  };

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(slides[activeIndex].title, slides[activeIndex].text);
    }
  }, [activeIndex, onSlideChange]);

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
                className="swiper-image"
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