import Link from 'next/link';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

const Navbar = ({ links, isFooter }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <Container className={`w-auto-md px-0 ${isFooter ? 'footer-navbar' : 'header-navbar'}`}>
      <Row className={`text-center ${isFooter ? 'footer-links' : 'header-links'}`}>
        {links.map((linkItem, index) => (
          <Col key={index} xs="auto" className="px-0 text-center">
            <div className="dropdown-wrapper">
              <Link 
                href={linkItem.link} 
                passHref 
                className={`links ${isFooter ? 'footer-list' : 'header-list'} ${!isFooter && isActive(linkItem.link) ? 'active' : ''}`}
                onClick={!isFooter && linkItem.submenu ? toggleDropdown : null}
              >
                {linkItem.name}
              </Link>
              {!isFooter && linkItem.submenu && isDropdownOpen && (
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

const isActive = (link) => {
  return link === '/'; 
};

export default Navbar;