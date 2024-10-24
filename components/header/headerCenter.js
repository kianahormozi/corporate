import { Container, Row, Col, Button } from 'react-bootstrap';

const HeaderCenter = () => {
  return (
    <Container className="center-content position-relative px-0">
    <Row className=" align-items-center">
      <Col lg={8}>
        <div className="title-container position-relative pb-4">
        <div className="animated-line"></div> {/* خط انیمیشنی */}
          <p className="main-title ">RESEARCH & DEVELOPMENT</p>
        </div>
        <p className="description pb-5">
          Invest in early-stage companies in exchange for equity, or an ownership stake, in the companies they invest in.
        </p>
        <Button variant="outline-light" className="cta-button">ادامه مطلب</Button>
      </Col>
    </Row>
  </Container>
  );
};

export default HeaderCenter;