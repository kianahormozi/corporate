import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { Container } from 'react-bootstrap';

const SidebarSlider = [
  {
    profileImg: "/images/user1.jpg",
    userComment: "طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، ",
    userName: "کیانا",
    userPosition: "CEO at Company"
  },
  {
    profileImg: "/images/user3.jpg",
    userComment: "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده",
    userName: "هومن",
    userPosition: "Manager at Business"
  },
  {
    profileImg: "/images/user2.jpg",
    userComment: "طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، ",
    userName: "امیر",
    userPosition: "Designer at Studio"
  }
];

const ServicesSlider = () => {
  return (
    <Container className="sliderContainer">
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            //shadow: true,
            translate: ['-20%', 0, -400],
            opacity: 0,
          },
          next: {
            translate: ['100%', 0, 0],
          }
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        
        {SidebarSlider.map((slide, index) => (
          <SwiperSlide key={index} className="slide">
            <div className="commentBox">
              <p className="userComment">{slide.userComment}</p>
              <span className="quoteIcon">
              <i class="bi bi-quote"></i>
              </span>
            </div>
            <div className="userInfo">
              <img src={slide.profileImg} alt={slide.userName} className="profileImg" />
              <div className='d-flex flex-column gap-2 pt-2'>
                <h5 className="userName">{slide.userName}</h5>
                <p className="userPosition">{slide.userPosition}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='slider-bottom-border pb-0'></div>
    </Container>
  );
};

export default ServicesSlider;
