import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TestiMonialsSlider from './Slider'

const TestimonialsItems = [
    {text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است کی از مهم‌ترین رویدادهای هنری سال' , name:"Barzek56" , career:"Manager at ColdHawk Inc."},
    {text: 'ژانو به عنوان یکی از فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت امن و سریع، ۵ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر، اعتماد کاربران گرامی را جلب نماید' , name:"katrin1125" , career:"Founder of WebFlex Inc."},
    {text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است کی از مهم‌ترین رویدادهای هنری سال' , name:"kemitchell24" , career:"Customer Support"},
    {text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است کی از مهم‌ترین رویدادهای هنری سال' , name:"alison554" , career:"CEO at Entavo LLC"},
    {text: 'ژانو به عنوان یکی از فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت امن و سریع، ۵ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر، اعتماد کاربران گرامی را جلب نماید' , name:"jason434" , career:"Desiner"},
    {text: 'ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...' , name:"kemitchell24" , career:"Support"},
    {text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است کی از مهم‌ترین رویدادهای هنری سال' , name:"muzammil73" , career:"Customer Support"}
]
const Testimonials = () => {
  return (
    <section className='testimonials-bg'>
      <Container className='testimonials-content xs-content pb-5'>
          <Row className="pt-5 d-flex justify-content-center"> 
              <Col lg={8} className="pt-4 d-flex justify-content-center">
                <div className="d-flex pb-4">
                  <div className="vertical-line mt-3"></div>
                  <h5 className="red-color pt-1 mx-3">بازخورد مشتریان درباره ما</h5>
                  <div className="vertical-line mt-3"></div>
                </div>
              </Col>
              <Col lg={8} className='pt-2 pb-5 px-0 w-lg-50 w-sm-100 text-center'>
                <p className='fw-light fs-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
              </Col>
          </Row>
          <Row className='pb-3'>
              <TestiMonialsSlider Items = {TestimonialsItems} />
          </Row>
      </Container>
    </section>
  );
}

export default Testimonials;