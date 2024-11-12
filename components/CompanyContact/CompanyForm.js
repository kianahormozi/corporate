import React from 'react'
import { Container , Row , Col , Form} from 'react-bootstrap'
import Link from 'next/link'

const CompanyForm = () => {
  return (

    <Container className='position-relative form-bg'>
    <h4 className='px-3 py-5'>با ما ارتباط برقرار کنید</h4>
      <Form className='px-3 form-padding'>
        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Control as="textarea" rows={4} placeholder="پیام خود را بنویسید" className='shadow-none border-0' />
        </Form.Group>

        <Row className='mb-4'>
          <Col md={6}>
            <Form.Group className="" controlId="formName">
              <Form.Control type="text" placeholder="نام و نام خانوادگی" className='shadow-none border-0' />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="" controlId="formEmail">
              <Form.Control type="email" placeholder="ایمیل..." className='shadow-none border-0' />
            </Form.Group>
          </Col>
        </Row>

        <Row className='pb-4'>
          <Col md={6}>
            <Form.Group className="mb-4" controlId="formPhone">
              <Form.Control type="text" placeholder="شماره تماس" className='shadow-none border-0' />
            </Form.Group>
          </Col>
        </Row>
        <div className=''>
        <Link href='/' className="form-submit mb-4 px-5">
        ارسال پیام
        </Link>
        </div>
      </Form>
    </Container>
  )
}

export default CompanyForm
