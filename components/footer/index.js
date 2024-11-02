import React from 'react'
import FooterContent from './FooterContent'
import { Container, Row } from 'react-bootstrap'
import FooterCopyRight from './FooterCopyRight'
const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <FooterContent />
        </Row>
      </Container>
      <FooterCopyRight />
    </>
    
    
  )
}

export default Footer
