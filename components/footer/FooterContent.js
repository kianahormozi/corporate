import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../navbar';
import Link from 'next/link';
const FooterContent = () => {
  const footerLinks = [
    { name: 'خانه', link: '/' },
    { name: 'درباره ما', link: '/biography' },
    { name: 'خدمات ما', link: '/biography' },
    { name: 'اخبار', link: '/repertoire' },
    { name: 'پروژه‌ها', link: '/repertoire' },
    { name: 'آیتم‌ ها' , link: '/repertoire' },
    { name: 'ارتباط با ما', link: '/about' }
  ];

  return (
    <Container className='px-0'>
      <Row className="align-items-start justify-content-between w-100 pb-4 mt-5 h-auto py-5">
        <Col lg={3} md={12} className="d-flex flex-column justify-content-center mx-md-auto  mx-lg-0 pb-md-5">
            <Col className='pb-4'>
                <h6>درباره ما</h6>
            </Col>
            <Col>
                <p className='small text-line-height text-color'>
                اژانو به عنوان یکی از فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت امن و سریع، ۵ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر، اعتماد کاربران گرامی را جلب نماید
                </p>
            </Col>
        </Col>
      <Col lg={3} md={12} className="d-flex flex-column justify-content-center mx-md-auto mx-lg-0 pb-md-5">
            <Col className='pb-4'>
                <h6>ارتباط با ما</h6>
            </Col>
            <Col>
                <p className='small text-line-height text-color'>تهران، خیابان ولیعصر، خیابان انقلاب، پلاک ۱۲۳، واحد ۴</p>
            </Col>
            <Col className='d-flex pt-3 gap-2'>
                <div>
                    <p className='small text-color'>شماره تماس:</p>
                </div>
                <div>
                    <p className='small mb-1 text-color'>۰۹۱۲-۳۴۵-۶۷۸۹</p>
                    <p className='small text-color'>۰۲۱-۸۷۶۵-۴۳۲۱</p>
                </div>
            </Col>
            <Col className='d-flex gap-2 pt-3 text-color'>
                <p className="small">ایمیل:</p>
                <p className="small">mail@example.com</p>
            </Col>
      </Col>
      <Col lg={3} md={12} className="d-flex flex-column justify-content-center mx-md-auto mx-lg-0 pb-md-5">
            <Col className='pb-4'>
                <h6>لینک های مفید</h6>
            </Col>
            <Navbar links={footerLinks} isFooter={true} className="d-flex flex-column p-0" />
      </Col>
      <Col lg={3} md={12} className="d-flex flex-column justify-content-center mx-md-auto  mx-lg-0 pb-md-5">
            <Col className='pb-4'>
                <h6>شبکه های اجتماعی</h6>
            </Col>
            <Row>
                <Col className=" mb-2 d-flex gap-2">
                    <Link href="https://twitter.com" passHref className="social-icon text-color mx-0">
                        <i className="bi bi-twitter fs-5"></i>
                    </Link>
                    <Link href="https://facebook.com" passHref className="social-icon text-color mx-0">
                        <i className="bi bi-facebook fs-5"></i>
                    </Link>
                    <Link href="https://youtube.com" passHref className="social-icon text-color mx-0">
                        <i className="bi bi-youtube fs-5"></i>
                    </Link>
                    <Link href="https://instagram.com" passHref className="social-icon text-color mx-0">
                        <i className="bi bi-instagram fs-5"></i>
                    </Link>
                </Col>
            </Row>
      </Col>
      </Row>
    </Container>
  );
};

export default FooterContent;