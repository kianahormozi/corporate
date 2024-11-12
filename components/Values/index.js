import Image from 'next/image'
import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container , Row} from 'react-bootstrap'

const Value = () => {
  return (
    <Container fluid className='py-lg-5 py-sm-0 py-md-0'>
      <Row className='d-flex flex-row'>
        <Col lg={6} className='p-0'>
            <Image 
            src="/images/mission.jpg"
            width={10}
            height={10}
            sizes='10'
            alt='value-image'
            className='value-image'
            />
        </Col>
        <Col lg={6} className='value-content px-0'>
            <Card className='border-0 card-padding px-5 bg-transparent'>
                <CardBody className='w-90'>
                    <CardTitle className='pb-4 text-white text-line-height '>
                    ما به خودمان وفادار هستیم و تعهد داریم که همواره بهترین عملکرد را ارائه دهیم.
                    </CardTitle>
                    <CardText className='pb-4 text-white text-line-height text-font'>
ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند.
                    </CardText>
                </CardBody>
            </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Value
