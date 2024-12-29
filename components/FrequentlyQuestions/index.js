import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ImageSection from './imageSection';
import FaqSection from './faqSection';

const FrequentlyQuestions = () => {
  const questions = [
    {
      question: "زمان‌بندی و مدیریت پروژه",
      answer:
        "تمرکز اصلی ما از ۴۰ سال پیش تاکنون شکل دادن فرهنگ بوده است. ما در بیش از ۵۰ کشور جهان کار کرده‌ایم و قادر به ارائه کارمان به ده زبان هستیم.",
    },
    {
      question: "اجرای مهندسی ارزش",
      answer:
        "ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم.",
    },
    {
      question: "چه خدمات مشاوره مالی ارائه می‌دهید؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      question: "خدمات تحلیل بنیادی",
      answer:
        "اژانو به عنوان یکی از فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت امن و سریع، ۵ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر، اعتماد کاربران گرامی را جلب نماید.",
    },
  ];

  return ( 
    <div className='faq-container position-relative pt-5'> 
      <Container className='pt-5 mb-3'>
        <Row>
          <Col lg={8}>
            <FaqSection questions={questions} showTitle={true} />
          </Col>
          <Col lg={4}>
            <ImageSection />
          </Col>
        </Row>
      </Container>
      <div className="shadow-line"></div> 
    </div> 
  )
}

export default FrequentlyQuestions;
