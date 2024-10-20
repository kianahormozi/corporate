import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = ({ links, isFooter }) => {
  return (
    <Container className='w-auto-md'>
      <Row className={`text-center ${isFooter ? 'footer-links' : 'header-links'}`}>
        {links.map((linkItem, index) => (
          <Col key={index} xs="auto" className="px-4 text-center">
            <Link href={linkItem.link} className='links color-tertiary fs-6'>
              {linkItem.name}
            </Link>
          </Col> 
        ))}
      </Row>
    </Container>
  );
};

export default Navbar;