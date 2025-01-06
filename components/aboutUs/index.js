import React from 'react';
import { Container, Row, Col, Card} from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';

const AboutUs = () => { 
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const translateYTopImage = useTransform(scrollYProgress, [-0.5, 1.5], [-120, 100]); 
    return (
        <Container className="about-us-section" ref={ref}>
            <Row className="align-items-center position-relative">
                <Col lg={6} md={12} sm={12} xs={12}> 
                    <Card className="border-0 padding-bottom-xs">
                        <Card.Body>
                            <div className="about-us-title d-flex pb-4">
                                <h5 className="red-color me-2">درباره ما</h5>
                                <div className="vertical-line me-2"></div> 
                            </div>
                            <Card.Title as="h2" className="fw-light pb-3">
                                An All-in-One Web Solution for Your Business
                            </Card.Title>
                            <Card.Text className="primary-color pb-4">
                                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...
                            </Card.Text>
                            <Link href='/' className="dark-link-button px-4"> 
                                ادامه مطلب
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="position-relative text-start d-none d-lg-block">
                    <div className="position-relative">
                        <motion.img 
                            src="/images/about-2.jpg" 
                            alt="Mountain View" 
                            className="position-absolute overlay-image w-75"
                            style={{ y: 0 }} 
                        />
                        <motion.img 
                            src="/images/about-1.jpg" 
                            alt="Business News" 
                            className="w-75 h-auto"
                            initial={{ opacity: 0, scale: 0.9 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ y: translateYTopImage }} 
                        />
                    </div>
                </Col>
                <Col md={12} className="text-center pt-sm-5 pt-md-5 padding-x-xs d-lg-none">
                    <img 
                        src="/images/about-1.jpg" 
                        alt="Business News Simple" 
                        className="w-100 h-auto px-xs-3"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
