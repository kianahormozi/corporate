import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServicesData from './ServicesData'
import FeaturedCases from './FeaturedCases'
import ServicesSlider from './ServicesSlider' 
import ServicesGallery from './ServicesGallery'
const ServicesContent = () => {
  return (
    <div className='position-relative'>
    <Container className='py-5 px-0'>
    <Row className='pt-0'>
        <Col lg={9} className='d-flex flex-column'>
          <h3 className='pb-4 fw-bold'>
          ما در تمام کارهای خود استانداردهای بالایی داریم
          </h3>
          <p className='text-font text-line-height'>
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.
          </p>
          <ServicesData />
        </Col>
        <Col lg={3} className='pe-4 h-100'>
          <h6 className='pt-3 fw-bold'>
          پرونده‌های منتخب
          </h6>
          <FeaturedCases />
          <ServicesSlider />
          <ServicesGallery />
        </Col>
    </Row>
    </Container>
    <div className="shadow-line"></div> 
    </div>
  )
}

export default ServicesContent
