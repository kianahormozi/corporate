import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import QuoteForm from './quoteForm';

const Quote = () => {
  return (
    <section className="Quote-bg py-5">
      <Container className='py-5'>
        <Row className="pb-5">
          <Col>
            <div className="d-flex align-items-center">
              <h5 className="red-color mb-0">
              خدمات برتر ما
              </h5>
              <div className="vertical-line me-2"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={12} className="mb-4 mb-lg-0">
            <Card className="border-0 bg-transparent">
              <Card.Header className="border-0 bg-transparent px-0">
                <h4>
                درخواست مشاوره رایگان
                </h4>
              </Card.Header>
              <Card.Body className="px-0">
                <Card.Text className='text-font'>
                شرکت ما به دلیل اطمینان، تعهد و ارائه خدمات با کیفیت بالا شناخته شده است. برای ارتباط با ما و دریافت قیمت، فرم زیر را پر کنید.                </Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col lg={8} md={8} sm={12} className='px-md-0'>
            <QuoteForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Quote;
