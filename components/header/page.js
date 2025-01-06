import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Navbar from '../navbar';
import Link from 'next/link';

const PageHeader = ({ headerImage, headerText }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(80); // Initial position of the mobile menu

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
    {
      name: 'آیتم‌ها',
      link: '/repertoi',
      submenu: [
        { name: 'تاریخچه', link: '/aboutUs/history' },
        { name: 'تیم ما', link: '/aboutUs/team' },
      ],
    },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: 'bi-facebook' },
    { href: 'https://twitter.com', icon: 'bi-twitter' },
    { href: 'https://instagram.com', icon: 'bi-instagram' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <section
        className={`position-relative w-100 ${
          isMobileMenuOpen ? 'is-mobile-menu-open' : ''
        }`}
      >
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={closeMobileMenu}></div>
        )}

        {/* Header Banner */}
        <div
          className="header-banner"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="cover"></div>
          <h1 className="header-title text-white text-center">{headerText}</h1>
        </div>

        {/* Bottom Line */}
        <div className="bottom-line icon-display position-relative">
          <Container>
            <Row className="d-flex pb-1 pt-2">
              <Col lg="auto" className="d-flex gap-4 px-0 social-links">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} target="_blank">
                    <i className={`bi ${social.icon} text-light`}></i>
                  </Link>
                ))}
              </Col>
              <Col
                lg="auto"
                className="contact-info d-flex flex-row small left-border x-padding"
              >
                <span className="d-flex align-items-center text-decoration-none gap-2">
                  09166831364
                  <i className="bi bi-telephone me-1"></i>
                </span>
              </Col>
              <Col
                lg="auto"
                className="contact-info d-flex flex-row small left-border px-5"
              >
                <span className="d-flex align-items-center text-decoration-none gap-2">
                  info@example.com
                  <i className="bi bi-envelope me-1"></i>
                </span>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu-baackground position-relative">
          <Container className="header-content pt-2">
            <Row className="align-items-center justify-content-between padding-x-md pt-3">
              <Col lg="auto" className="width-md">
                <div
                  className="mobile-menu-toggle d-lg-none"
                  onClick={toggleMobileMenu}
                >
                  <i
                    className={`bi ${
                      isMobileMenuOpen ? 'bi-x' : 'bi-list'
                    } mobile-menu-icon`}
                  ></i>
                </div>

                <div
                  className={`menu-content ${
                    isMobileMenuOpen ? 'd-block' : 'd-none'
                  } d-lg-block mobile-menu-list`}
                  style={{ top: `${menuTop}px` }}
                >
                  <div className="contact-info mt-3 lg-display mobile-menu-details">
                    <p>
                      <i className="bi bi-telephone"></i> 09166831364
                    </p>
                    <p>
                      <i className="bi bi-envelope"></i> info@example.com
                    </p>
                  </div>
                  <div className="mobile-icons gap-4 lg-icons-padding social-links lg-display">
                    {socialLinks.map((social, index) => (
                      <Link key={index} href={social.href} target="_blank">
                        <i
                          className={`bi ${social.icon} text-light`}
                        ></i>
                      </Link>
                    ))}
                  </div>
                  <Navbar links={headerLinks} isFooter={false} />
                </div>
              </Col>

              <Col lg="auto" className="px-lg-0 width-md">
                <Image
                  src="/images/logo.svg"
                  width={0}
                  height={0}
                  alt="Logo"
                  className="logo-img"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
