import Image from 'next/image'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Value = () => {
  return (
    <Container fluid className="py-lg-5 py-sm-0 py-md-0">
      <Row className="d-flex flex-lg-row">
        <Col lg={6} className="p-0 value-image-container">
          <Image 
            src="/images/mission.jpg"
            width={10}
            height={10}
            sizes="10"
            alt="value-image"
            className="value-image"
          />
        </Col>
        <Col lg={6} className="value-content px-0"> 
          <Card className="border-0 card-padding px-5 bg-transparent">
            <Card.Body className="w-lg-90 sm-width">
              <Card.Title className="pb-4 text-white text-line-height fw-bold">
                ما به خودمان وفادار هستیم و تعهد داریم که همواره بهترین عملکرد را ارائه دهیم.
              </Card.Title>
              <Card.Text className="pb-4 text-white text-line-height text-font">
                ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم.
                ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد
                و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Value
