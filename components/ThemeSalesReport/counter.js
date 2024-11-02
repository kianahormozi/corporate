// Counter.js
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const Counter = ({ icon, endValue, suffix = '', label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = endValue / 20; 
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 20); 
    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <Row className="text-center color-text d-flex flex-column align-items-center mx-auto ">
    <Col className='d-flex flex-row align-items-center gap-2 justify-content-center'>
        <h1 className="fw-light mb-0">
            {count}
            {suffix}
        </h1>
        <i className={`bi ${icon} display-4 mb-0`} />
      </Col>
    <Col>
      <p className='fw-light'>{label}</p>
    </Col>
    </Row>
  );
};

export default Counter;
