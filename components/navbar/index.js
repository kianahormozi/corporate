import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

const Navbar = ({ links, isFooter }) => {
  const router = useRouter();

  return (
    <Container className="px-0">
      <Row className={`text-center ${isFooter ? 'footer-links' : 'header-links'}`}>
        {links.map((linkItem, index) => (
          <Col key={index} xs="auto" className="px-0 text-end pb-2">
            <div className={`link-wrapper ${!isFooter && linkItem.submenu ? 'dropdown-wrapper' : ''}`}>
              <Link
                href={linkItem.link}
                passHref
                className={`links ${isFooter ? 'footer-list' : 'header-list'} 
                  ${!isFooter && router.pathname === linkItem.link ? 'active' : ''}`}
              >
                {linkItem.name}
              </Link>
              {!isFooter && linkItem.submenu && (
                <div className="dropdown-menu">
                  {linkItem.submenu.map((subItem, subIndex) => (
                    <Link href={subItem.link} key={subIndex} passHref className="dropdown-item">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Navbar;
