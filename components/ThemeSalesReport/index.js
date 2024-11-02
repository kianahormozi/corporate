import React from 'react'
import { Container , Row , Col } from 'react-bootstrap';
import Counter from './counter';
const ThemeSalesReport = () => {
  return (
    <section className='Report-bg py-md-5'>
        <Container className='py-lg-5 mt-lg-5 pt-sm-5'>
              <Row className="text-center pt-md-5 py-sm-4">
                <Col lg={3} md={6} sm={12} className='pb-md-6rem'>
                  <Counter icon="bi-people-fill" endValue={1500} suffix="k" label="کاربران" />
                </Col>
                <Col lg={3} md={6} sm={12} className='pb-md-6rem'>
                  <Counter icon="bi-graph-up-arrow" endValue={95} suffix="%" label="میزان رضایت" />
                </Col>
                <Col md={6} lg={3} sm={12} className='pb-md-6rem'>
                  <Counter icon="bi-briefcase-fill" endValue={300} label="پروژه‌های انجام‌شده" />
                </Col>
                <Col lg={3} md={6} sm={12} className='pb-md-6rem'>
                  <Counter icon="bi-globe" endValue={75} label="کشورهای پوشش‌دهنده" />
                </Col>
              </Row>
        </Container>
    </section>
  )
}

export default ThemeSalesReport;
