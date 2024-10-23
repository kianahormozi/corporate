import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const HeaderBoxes = ({ activeSlide, setActiveSlide }) => {
  const boxes = [
    { id: 0, icon: "bi-graph-up", title: 'Finance & Trades', text: 'Stock Exchange & Banks' },
    { id: 1, icon: "bi-megaphone", title: 'Crowdfunding', text: 'Kickstarter & Early Campaigns' },
    { id: 2, icon: "bi-globe", title: 'Global Trade', text: 'Incoterms & Trades' },
    { id: 3, icon: "bi-lightbulb", title: 'Venture Capital', text: 'Seed Funding & Innovations' }
  ];

  return (
    <Container className="header-boxes">
      <Row className="justify-content-center">
        {boxes.map((box) => (
          <Col
            key={box.id}
            xs={12}
            md={6}
            lg={3}
            className={`box ${activeSlide === box.id ? 'active' : ''}`}
            onClick={() => setActiveSlide(box.id)}
          >
            <Col>
            <i className={`bi ${box.icon} icon mb-3`}></i>
            </Col>
            <Col>
            <div className="small-title">{box.title}</div>
            <div className="large-text">{box.text}</div>
            </Col>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HeaderBoxes;
