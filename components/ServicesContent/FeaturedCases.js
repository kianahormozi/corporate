import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'

const cases = [
    {
        CaseImage:"/images/1.jpg",
        CaseCategory:"راه‌حل‌های کسب‌وکار",
        CaseTitle:"برنامه‌ریزی کسب‌وکار، استراتژی و اجرا"
    },
    {
        CaseImage:"/images/2.jpg",
        CaseCategory:"بازاریابی",
        CaseTitle:"توسعه استراتژی و نقشه راه برای مشتریان"
    },
    {
        CaseImage:"/images/3.jpg",
        CaseCategory:"محصولات مصرفی",
        CaseTitle:" مدیریت تغییرات نسلی در کسب‌وکار"
    },
    {
        CaseImage:"/images/4.jpg",
        CaseCategory:" امنیت سایبری",
        CaseTitle:"تحلیل‌ها و بینش‌های کسب‌وکار"
    },
]
const FeaturedCases = () => {
  return (
    <Container className='px-0 pb-4'>
      <Row className=''>
        {cases.map ((featured,index) => (
            <Col key={index} lg={12} className='card-top-padding card-bottom-border '>
            <Link href="/" className=''>
                <Card className='px-0 border-0 d-flex flex-row card-raduis gap-3'>
                    <Image 
                    src={featured.CaseImage} 
                    width={60}
                    height={60}
                    sizes=''
                    alt='/'
                    className='img-width'
                    />
                    <CardBody className='p-0'>
                        <CardText className='sidebar-card-font pb-2'>
                            {featured.CaseTitle}
                        </CardText>
                        <CardText className='sidebar-card-font red-color'>
                            {featured.CaseCategory}
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
            </Col>
        ))}
      </Row>
    </Container>
  )
}

export default FeaturedCases
