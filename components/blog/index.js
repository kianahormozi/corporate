import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogContent from './blogContent'
import ServicesGallery from '../ServicesContent/servicesGallery'
import ServicesSlider from '../ServicesContent/servicesSlider'
import FeaturedCases from '../ServicesContent/featuredCases'
import BlogSubscribe from './blogSubscribe'
import BlogTagWidget from './blogTagWidget'
import BlogSearchBox from './blogSearchBox'

const Blog = () => {
  return (
    <div className='position-relative'>
        <Container className='px-0 py-4'>
        <Row className='content'>
            <Col lg={9} md={12} sm={12} xs={12} className='d-flex ps-4 flex-column'>
            <BlogContent />
            </Col>
            <Col lg={3} className='pe-4 h-100 blog-display'>
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
