import React, { useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FaqSection = ({ questions, showTitle = true }) => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };
  return (
    <Container >
      {showTitle && (
        <h4 className='pb-4'>
          سوالات متداول شما
        </h4>
      )}
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
