import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogContent from './BlogContent'
import ServicesGallery from '../ServicesContent/ServicesGallery'
import ServicesSlider from '../ServicesContent/ServicesSlider'
import FeaturedCases from '../ServicesContent/FeaturedCases'
import BlogSubscribe from './BlogSubscribe'
import BlogTagWidget from './BlogTagWidget'
import BlogSearchBox from './BlogSearchBox'

const Blog = () => {
  return (
    <div className='position-relative'>
        <Container className='px-0 py-4'>
        <Row className='content'>
            <Col lg={9} className='d-flex ps-4 flex-column'>
            <BlogContent />
            </Col>
            <Col lg={3} className='pe-4 h-100'>
            <BlogSearchBox />
            <div>
              <h6 className='pt-3 fw-bold'>
                دسته بندی
              </h6>
              <FeaturedCases />
            </div>
            <ServicesGallery />
            <BlogSubscribe />
            <ServicesSlider />
            <BlogTagWidget />
            <FeaturedCases />
            </Col>
        </Row>
        </Container>
        <div className="shadow-line"></div>
    </div>
  )
}

export default Blog
