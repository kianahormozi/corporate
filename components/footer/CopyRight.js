import React from 'react'
import { Container , Row , Col } from 'react-bootstrap';

const FooterCopyRight = () => {
  return (
    <Container fluid>
      <Row className="py-4 bg-color">
      <Col className="text-center">
        <p className="small text-white m-0">© تمام حقوق این وبسایت برای مالک آن محفوظ می باشد.</p>
      </Col>
    </Row>
    </Container>
  )
}

export default FooterCopyRight;