import React, { useState } from 'react';
import { Container, Row, Col, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import Navbar from '../navbar';
import Link from 'next/link';
import HeaderSlider from './headerSlider';

const Header = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  
  const headerLinks = [
    { name: 'خانه', link: '/' },
    { name: 'درباره ما', link: '/biography' },
    { name: 'خدمات ما', link: '/biography' },
    { name: 'اخبار', link: '/repertoire' },
    { name: 'پروژه‌ها', link: '/repertoire' },
    { name: 'آیتم‌ها', link: '/repertoire' },
    { name: 'ارتباط با ما', link: '/about' }
  ];
  
  const socialLinks = [
    { icon: 'bi bi-facebook', link: 'https://facebook.com' },
    { icon: 'bi bi-twitter', link: 'https://twitter.com' },
    { icon: 'bi bi-instagram', link: 'https://instagram.com' }
  ];

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <>
      <HeaderSlider />
      <Container className="header-content position-absolute top-0 start-0 end-0 pt-2">
        <Row className="d-flex bottom-line pb-1">
          {/* Social Media Links */}
          <Col lg="auto" className="d-flex gap-4 px-0 social-links">
            {socialLinks.map((socialLink, index) => (
              <Link href={socialLink.link} key={index} target="_blank" rel="noopener noreferrer" className="text-decoration-none small text-light">
                <i className={socialLink.icon}></i>
              </Link>
            ))}
          </Col>
          <Col lg="auto" className="contact-info d-flex flex-row small left-border x-padding ">
            <span className="d-flex align-items-center text-decoration-none gap-2">
              09166831364
              <i className="bi bi-telephone me-1"></i>
            </span>
          </Col>
          <Col lg="auto" className="contact-info d-flex flex-row small left-border px-5">
            <span className="d-flex align-items-center text-decoration-none gap-2">
              info@example.com
              <i className="bi bi-envelope me-1"></i>
            </span>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-between pt-3">
          <Col lg="auto">
            <Navbar links={headerLinks} isFooter={false} />
          </Col>
          <Col lg="auto" className="px-0">
            <Image
              src="/images/logo.svg"
              width={100}
              height={50}
              alt="Logo"
              className="logo-img"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
