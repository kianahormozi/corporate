import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Navbar from '../navbar';
import Link from 'next/link';

const PageHeader = ({ headerImage, headerText }) => {
    const [isNavVisible, setNavVisible] = useState(false);
  
    const headerLinks = [
      { name: 'خانه', link: '/' },
      { name: 'درباره ما', link: '/aboutUs' },
      { name: 'خدمات ما', link: '/ourServices' },
      { name: 'اخبار', link: '/news' },
      { name: 'پروژه‌ها', link: '/cases' },
      { name: 'ارتباط با ما', link: '/contactUs' },
      { name: 'آیتم‌ها', link: '/repertoi', submenu: [ 
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

    return (
        <>
          <section className='position-relative w-100'>
            <div className="header-banner" style={{ backgroundImage: `url(${headerImage})` }}>
              <div className="cover"></div>
              <h1 className="header-title text-white text-center">{headerText}</h1>
            </div>
            <div className='bottom-line'>
              <Container>
                <Row className="d-flex pb-1 pt-2 header-content" >
                  <Col lg="auto" className="d-flex gap-4 px-0 social-links">
                    {socialLinks.map((socialLink, index) => (
                      <Link href={socialLink.link} key={index} target="_blank" rel="noopener noreferrer" className="text-decoration-none small text-light">
                        <i className={socialLink.icon}></i>
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
            <Container className="header-content pt-2" style={{ zIndex: 3 }}>
              <Row className="align-items-center justify-content-between pt-3">
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
            </Container>
          </section>
        </>
    );
}

export default PageHeader;
