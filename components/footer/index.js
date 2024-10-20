import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../navbar'; // Assuming Navbar is in the same folder
import Link from 'next/link'; // Importing Link from Next.js for social media links

const Footer = () => {
  // Footer links
  const footerLinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' }
  ];

  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={3} className="mb-4">
            <h5>درباره ما</h5>
            <p>
              Your website description goes here. Explain your business, mission, and more.
            </p>
          </Col>

          {/* Contact Section */}
          <Col md={3} className="mb-4">
            <h5>Contact</h5>
            <p>
              Address: 1234 Main St, City, Country <br />
              Phone: +1 234 567 890 <br />
              Email: info@example.com
            </p>
          </Col>

          {/* Pages (Footer Links) */}
          <Col md={3} className="mb-4">
            <h5>Pages</h5>
            {/* Reusing Navbar component */}
            <Navbar links={footerLinks} isFooter={true} />
          </Col>

          {/* Social Media Section */}
          <Col md={3} className="mb-4">
            <h5>Social Media</h5>
            <Row>
              <Col className="text-start mb-2">
                <Link href="https://twitter.com" passHref className="text-dark fs-4 me-3">
                    <i className="bi bi-twitter"></i>
                </Link>
                <Link href="https://facebook.com" passHref className="text-dark fs-4 me-3">
                    <i className="bi bi-facebook"></i>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="text-start">
                <Link href="https://youtube.com" passHref className="text-dark fs-4 me-3">
                    <i className="bi bi-youtube"></i>
                </Link>
                <Link href="https://instagram.com" passHref className="text-dark fs-4 me-3">
                    <i className="bi bi-instagram"></i>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="text-muted">&copy; 2024 Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;