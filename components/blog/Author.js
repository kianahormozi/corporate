import Image from 'next/image'
import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'
 
const Author = () => {
  return (
    <Container fluid>
      <Card className='border-0 '>
        <Row className='author-card'>
            <Col lg={2} md={2} sm={12} className='w-auto'>
            <Image 
            src="/images/author.png"
            alt='author'
            width="90"
            height="90"
            className=''
            />
            </Col>
            <Col lg={10} md={10}>
            <CardBody className='author-sm-body'> 
                <CardTitle className='author-title'>
                    نویسنده :
                </CardTitle >
                <CardTitle className='fw-bold author-title'>کیانا</CardTitle>
                <CardText className='author-text'>معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است</CardText>
            </CardBody>
            </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Author
