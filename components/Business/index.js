import React, { useRef } from 'react';
import { Col, Container, Row, Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BusinessSlider from './Slider';

const slides = [
  {
    title: 'خدمات طراحی',
    description: 'ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    image: '/images/slider1.jpg',
    link: '/'
  },
  {
    title: 'توسعه وب',
    description: 'طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.',
    image: '/images/slider2.jpg',
    link: '/'
  },
  {
    title: 'بهینه‌سازی سئو',
    description: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ',
    image: '/images/slider3.jpg',
    link: '/' 
  },
  {
    title: 'طراحی لوگو',
    description: 'لوگوهای خلاقانه و به‌یادماندنی برای برند شما طراحی می‌کنیم.',
    image: '/images/slider4.jpg',
    link: '/' 
  },
  {
    title: 'توسعه وب',
    description: 'طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.',
    image: '/images/slider2.jpg',
    link: '/' 
  },
  {
    title: 'بهینه‌سازی سئو',
    description: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ',
    image: '/images/slider3.jpg',
    link: '/' 
  },
  {
    title: 'طراحی لوگو',
    description: 'لوگوهای خلاقانه و به‌یادماندنی برای برند شما طراحی می‌کنیم.',
    image: '/images/slider4.jpg',
    link: '/' 
  },
  {
    title: 'بازاریابی دیجیتال',
    description: 'نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می‌برند که متن لورم را از قسمتهای مختلف سایت حذف کنند ',
    image: '/images/slider5.jpg',
    link: '/' 
  }
];


const Business = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const sliderSettings = {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: false,
    autoplay: { delay: 6000 },
    breakpoints: {
      320: { slidesPerView: 1 },  
      768: { slidesPerView: 2 },  
      992: { slidesPerView: 3 },  
    },
  };

  const numSlides = slides.length;
  const numButtons = Math.ceil(numSlides / 3);

  return (
    <section className="bussines-bg pb-3">
      <Container className="pb-5">
        <Row className="pt-5 d-flex justify-content-center">
          <Col lg={8} className="pt-4 d-flex justify-content-center">
            <div className="d-flex pb-4">
              <div className="vertical-line mt-3"></div>
              <h5 className="red-color pt-1 mx-3">خدمات ما</h5>
              <div className="vertical-line mt-3 "></div>
            </div>
          </Col>
          <Col lg={8} className="pt-2 pb-5 w-lg-50 w-md-100 w-sm-100 text-center">
            <p className="fw-light fs-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
          </Col>
        </Row>
        <Row className="flex-md-row flex-column">
          <Col lg={4} md={12} className="order-md-1 px-sm-0 order-lg-0">
            <Card className="border-0 ps-lg-5 bg-transparent">
              <CardBody className="p-lg-0 px-md-0">
                <CardTitle className="fw-bold pb-lg-5 pb-md-4 fs-4">پیمایش اسلایدر</CardTitle>
                <CardText className="lh-lg text-font">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </CardText>
                <div id="containerForBullets" className="custom-navigation mt-5 ">
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={8} md={12} className="px-lg-0 order-md-0 order-lg-1">
            <BusinessSlider
              slides={slides}
              settings={sliderSettings}
              prevRef={prevRef}
              nextRef={nextRef}
              swiperRef={swiperRef}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Business;
