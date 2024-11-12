import React from 'react';
import VideoSlide from './VideoSlide';
import { Card, Col, Container, Row , CardText , CardTitle} from 'react-bootstrap';

const CompanyOverview = () => {
  return (
    <Container className="pt-5 px-0 mb-4 pb-5">
      <Row className="d-flex">
        {/* Col for Video */}
        <Col lg={6} md={12} sm={12} className="position-relative d-lg-block order-md-1 order-sm-1 text-center">
          <VideoSlide 
            videoUrl="https://vimeo.com/your-video-id" 
            thumbnail="/images/owerview-1.jpg" 
          />
        </Col>

        {/* Col for Text */}
        <Col lg={6} md={12} sm={12} className="order-md-2 pt-sm-4 pt-md-4 order-sm-2">
          <Card className="border-0">
            <Card.Body className="px-0">
              <Card.Title className="pb-4 fs-3">
                تمرکز بر اتحاد و هدف مشترک 
              </Card.Title>
              <CardText className='text-line-height text-font'>
                    لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.
              </CardText>
              <CardText className='text-line-height text-font'>
                    طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند
              </CardText>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyOverview;
