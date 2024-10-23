import React from 'react'
import FooterContent from './FooterContent'
import { Container } from 'react-bootstrap'
import FooterCopyRight from './FooterCopyRight'
const Footer = () => {
  return (
    <Container fluid>
      <FooterContent />
      <FooterCopyRight />

    </Container>
  )
}

export default Footer
