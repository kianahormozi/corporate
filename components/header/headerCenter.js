import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeaderCenter = () => {
  return (
    <Container className="center-content position-relative px-0">
    <Row className=" align-items-center">
      <Col lg={8}>
        <div className="title-container position-relative pb-4">
        <div className="animated-line"></div> 
          <p className="main-title ">RESEARCH & DEVELOPMENT</p>
        </div>
        <p className="description pb-5">
          Invest in early-stage companies in exchange for equity, or an ownership stake, in the companies they invest in.
        </p>
        <Link href='/' className="link-button">ادامه مطلب</Link>
      </Col>
    </Row>
  </Container>
  );
};

export default HeaderCenter;