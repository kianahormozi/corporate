/*
import React, { useState } from 'react';
import { Container, Row, Col, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import Navbar from '../navbar';
import Link from 'next/link';
import HeaderSlider from './HeaderSlider';
import HeaderCenter from './HeaderCenter';

const Header = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [slideTitle, setSlideTitle] = useState('');
  const [slideText, setSlideText] = useState('');

  const headerLinks = [
    { name: 'خانه', link: '/' },
    { name: 'درباره ما', link: '/aboutUs' },
    { name: 'خدمات ما', link: '/ourServices' },
    { name: 'اخبار', link: '/news' },
    { name: 'پروژه‌ها', link: '/cases' },
    { name: 'ارتباط با ما', link: '/contactUs' },
    { name: 'آیتم‌ها', link: '/aboutUs', submenu: [ 
        { name: 'تاریخچه', link: '/aboutUs/history' },
        { name: 'تیم ما', link: '/aboutUs/team' }
      ] 
    },
  ];

  const socialLinks = [
    { icon: 'bi bi-facebook', link: 'https://facebook.com' },
    { icon: 'bi bi-twitter', link: 'https://twitter.com' },
    { icon: 'bi bi-instagram', link: 'https://instagram.com' }
  ];

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const handleSlideChange = (title, text) => {
    setSlideTitle(title);
    setSlideText(text);
  };

  return (
    <>
      <HeaderSlider onSlideChange={handleSlideChange} />
      <section className='position-absolute top-0 w-100'>
        <div className='bottom-line position-relative'> 
          <Container>
            <Row className="d-flex pb-1 pt-2">
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
          </Container>
        </div>
        <Container className="header-content pt-2">
          <Row className="align-items-center justify-content-between pt-2">
            <Col lg="auto">
              <Navbar links={headerLinks} isFooter={false} />
            </Col>
            <Col lg="auto" className="px-0">
              <Image
                src="/images/logo.svg"
                width={0}
                height={0}
                alt="Logo"
                className="logo-img"
              />
            </Col>
          </Row>
          <HeaderCenter slideTitle={slideTitle} slideText={slideText} />
        </Container>
      </section>
    </>
  );
};

export default Header; 
*/

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../navbar';
import HeaderSlider from './HeaderSlider';
import HeaderCenter from './HeaderCenter';

const Header = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [slideTitle, setSlideTitle] = useState('');
  const [slideText, setSlideText] = useState('');

  const headerLinks = [
    { name: 'خانه', link: '/' },
    { name: 'درباره ما', link: '/aboutUs' },
    { name: 'خدمات ما', link: '/ourServices' },
    { name: 'اخبار', link: '/news' },
    { name: 'پروژه‌ها', link: '/cases' },
    { name: 'ارتباط با ما', link: '/contactUs' },
    { name: 'آیتم‌ها', link: '/aboutUs', submenu: [ 
        { name: 'تاریخچه', link: '/aboutUs/history' },
        { name: 'تیم ما', link: '/aboutUs/team' }
      ] 
    },
  ];

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSlideChange = (title, text) => {
    setSlideTitle(title);
    setSlideText(text);
  };

  return (
    <>
      <HeaderSlider onSlideChange={handleSlideChange} />
      <section className='position-absolute top-0 w-100'>
        <div className='bottom-line icon-display position-relative'> 
          <Container>
            <Row className="d-flex pb-1 pt-2">
              <Col lg="auto" className="d-flex gap-4 px-0 social-links">
                <Link href="https://facebook.com" target="_blank">
                  <i className="bi bi-facebook text-light"></i>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <i className="bi bi-twitter text-light"></i>
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <i className="bi bi-instagram text-light"></i>
                </Link>
              </Col>
              <Col lg="auto" className="contact-info d-flex flex-row small left-border x-padding">
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
          </Container>
        </div>
        <div className='mobile-menu-baackground'>
        <Container className="header-content pt-2">
          <Row className="align-items-center justify-content-between pt-2">
            <Col lg="auto" className='width-md'>
              <div className="mobile-menu-toggle d-lg-none" onClick={toggleMobileMenu}>
                <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} mobile-menu-icon`}  ></i>
              </div>
              <div className={`menu-content ${isMobileMenuOpen ? 'd-block' : 'd-none'} d-lg-block mobile-menu-list`}>
                <Navbar links={headerLinks} isFooter={false} />
              </div>
            </Col>
            <Col lg="auto" className="px-0 width-md">
              <Image
                src="/images/logo.svg"
                width={0}
                height={0}
                alt="Logo"
                className="logo-img"
              />
            </Col>
          </Row>
          <HeaderCenter slideTitle={slideTitle} slideText={slideText} />
        </Container>
        </div>
      </section>
    </>
  );
};

export default Header;
