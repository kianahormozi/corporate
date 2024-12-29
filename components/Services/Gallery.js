import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const GalleryImg = [
    {
        item:"/images/3.jpg" , alt:"/" , href:"/"
    },
    {
        item:"/images/5.jpg" , alt:"/" , href:"/"
    },
    {
        item:"/images/6.jpg" , alt:"/" , href:"/"
    },
    {
        item:"/images/2.jpg" , alt:"/" , href:"/"
    },
    {
        item:"/images/10.jpg" , alt:"/" , href:"/"
    },
    {
        item:"/images/11.jpg" , alt:"/" , href:"/"
    }
]
const ServicesGallery = () => {
  return (
    <Container className='px-0 pb-4'>
  <Row>
    <h6 className='pb-3 fw-bold pt-2'>
        گالری ما
    </h6>
    {GalleryImg.map((galleryItem, index) => (
        <Col key={index} lg={4} md={3} className='pb-3'>
            <Link href={galleryItem.href}>
                <div className="gallery-image-wrapper">
                    <Image 
                        src={galleryItem.item} 
                        alt={galleryItem.alt} 
                        width={70}
                        height={70}
                        className='gallery-image' 
                    />
                    <div className="gallery-image-cover">
                    </div>
                </div>
            </Link>
        </Col>
    ))}
  </Row>
</Container>
  )
}

export default ServicesGallery
