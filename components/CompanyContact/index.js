import dynamic from 'next/dynamic'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
const CompanyInfo = dynamic ( import ( '@/components/CompanyContact/CompanyInfo'));
const CompanyForm = dynamic ( import ( '@/components/CompanyContact/CompanyForm'));

const CompanyContact = () => {
  return (
    <Container className=' pb-5 company-content'>
      <Row className='d-flex pb-5 flex-lg-row '>
      <Col lg={4} className='ps-0'>
        <CompanyInfo />
        </Col>
        <Col lg={8} className='pe-0'>
        <CompanyForm />
        </Col>
      </Row>
    </Container>
  )
}

export default CompanyContact
