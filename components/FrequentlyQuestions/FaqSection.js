import React, { useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';

const questions = [
  {
    question: "زمان‌بندی و مدیریت پروژه",
    answer: "تمرکز اصلی ما از ۴۰ سال پیش تاکنون شکل دادن فرهنگ بوده است. ما در بیش از ۵۰ کشور جهان کار کرده‌ایم و قادر به ارائه کارمان به ده زبان هستیم.",
  },
  {
    question: "اجرای مهندسی ارزش",
    answer: "ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم.",
  },
  {
    question: "چه خدمات مشاوره مالی ارائه می‌دهید؟",
    answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    question: "خدمات تحلیل بنیادی",
    answer: "اژانو به عنوان یکی از فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت امن و سریع، ۵ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر، اعتماد کاربران گرامی را جلب نماید",
  },
];

const FaqSection = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Container >
      <h4 className='pb-4'>
        سوالات متداول شما
      </h4>
    <Accordion activeKey={activeKey} onSelect={toggleActiveKey} className="accordion">
      {questions.map((item, index) => (
        <Accordion.Item eventKey={index.toString()} key={index} className="item-box">
          <Accordion.Header onClick={() => toggleActiveKey(index.toString())} className="fa-header">
            <span className="me-2">{item.question}</span>
            <i
              className={`bi bi-caret-down-fill icon-toggle ${activeKey === index.toString() ? 'rotate-icon' : ''}`}
            ></i>
          </Accordion.Header>
          <Accordion.Body> 
            {item.answer} 
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    </Container>
  );
};

export default FaqSection;
