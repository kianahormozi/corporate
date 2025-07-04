import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../navbar';
import HeaderSlider from './Slider';
import HeaderCenter from './Center';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [slideTitle, setSlideTitle] = useState('');
  const [slideText, setSlideText] = useState('');
  const [menuTop, setMenuTop] = useState(80); // Initial position of the mobile menu

  const socialLinks = [
    { platform: 'facebook', link: 'https://facebook.com', icon: 'bi-facebook' },
    { platform: 'twitter', link: 'https://twitter.com', icon: 'bi-twitter' },
    { platform: 'instagram', link: 'https://instagram.com', icon: 'bi-instagram' },
  ];

  // Scroll handler to adjust the menu position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setMenuTop(Math.max(0, 80 - scrollY)); // Reduces top value to 0 as you scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerLinks = [
    { name: 'خانه', link: '/' },
    { name: 'درباره ما', link: '/aboutUs' },
    { name: 'خدمات ما', link: '/service' },
    { name: 'اخبار', link: '/new' },
    { name: 'پروژه‌ها', link: '/case' },
    { name: 'ارتباط با ما', link: '/contactUs' },
    { name: 'آیتم‌ها', link: '/aboutUs', submenu: [
        { name: 'تاریخچه', link: '/aboutUs/history' },
        { name: 'تیم ما', link: '/aboutUs/team' }
      ] 
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSlideChange = (title, text) => {
    setSlideTitle(title);
    setSlideText(text);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderSlider onSlideChange={handleSlideChange} />
      <section className='position-absolute top-0 w-100'>
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={closeMobileMenu}></div>
        )}
        <div className='bottom-line icon-display position-relative'>
          <Container>
            <Row className="d-flex pb-1 pt-2">
              <Col lg="auto" className="d-flex gap-4 px-0 social-links">
                {socialLinks.map(({ platform, link, icon }) => (
                  <Link key={platform} href={link} target="_blank">
                    <i className={`bi ${icon} text-light`}></i>
                  </Link>
                ))}
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
            <Row className="align-items-center justify-content-between padding-x-md pt-2">
              <Col lg="auto" className='width-md'>
                <div className="mobile-menu-toggle d-lg-none" onClick={toggleMobileMenu}>
                  <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} mobile-menu-icon`} ></i>
                </div>
                <div
                  className={`menu-content ${isMobileMenuOpen ? 'd-block' : 'd-none'} d-lg-block mobile-menu-details mobile-menu-list`}
                  style={{ top: `${menuTop}px` }} // Apply dynamic top position for mobile
                >
                  <div className="contact-info mt-3 lg-display mobile-menu-details">
                    <p><i className="bi bi-telephone "></i> 09166831364</p>
                    <p><i className="bi bi-envelope "></i> info@example.com</p>
                  </div>
                  <div className="mobile-icons gap-4 lg-icons-padding social-links lg-display">
                    {socialLinks.map(({ platform, link, icon }) => (
                      <Link key={platform} href={link} target="_blank">
                        <i className={`bi ${icon} text-light`}></i>
                      </Link>
                    ))}
                  </div>
                  <Navbar links={headerLinks} isFooter={false} />
                </div>
              </Col>
              <Col lg="auto" className="px-0 width-md">
              <Link href="/" >
                  <Image
                    src="/images/logo.svg"
                    width={0}
                    height={0}
                    alt="Logo"
                    className="logo-img" 
                  />
                </Link>
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
