import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
const OfficeDetails = () => {
  return (
    <Container className='me-5'>
      <Row>
    <Col md={4} sm={6} className="position-absolute h-100 d-flex flex-column justify-content-center bg-red text-white px-5 pb-5 p-top-4"> 
    <h5 className='pb-4'>شرکت برنامه نویسی</h5> 
    <Col className="d-flex mb-4 gap-4 align-items-start"> 
      <div>
      <i className="bi bi-geo-alt-fill info-icon"></i> 
      </div>
      <div>
      <p className='fw-bold'>آدرس شرکت</p>
      <p className='opacity-75'>تهران، خیابان ولیعصر، خیابان انقلاب، پلاک ۱۲۳، واحد ۴</p> 
      </div>
    </Col> 
      <Col className="d-flex mb-4 gap-4 align-items-start"> 
        <div>
        <i className="bi bi-grid-fill info-icon"></i> 
        </div>
        <div>
        <p className='fw-bold'>شماره تماس</p>
        <p className='opacity-75'>09166831364</p> 
        </div>
        </Col> 
        <Col className="d-flex mb-4 gap-4 align-items-start"> 
        <div>
          <i className="bi bi-envelope-fill info-icon"></i> 
        </div>
          <div>
          <p className='fw-bold'>ایمیل</p>
          <p className='opacity-75'>service@medic-all.com</p>
          </div> 
          </Col> 
          <Col className="d-flex gap-4 mb-4 align-items-start"> 
          <div>
            <i className="bi bi-clock-fill info-icon"></i> 
          </div>
            <div>
            <p className='fw-bold'>ساعات کاری</p>
            <p className='opacity-75'>شنبه — پنجشنبه: 8 صبح - 5 بعد از ظهر </p> 
            <p className='opacity-75'>جمعه ها : تعطیل</p> 
            </div>
        </Col> 
     </Col>
     </Row>
     </Container>

  );
}

export default OfficeDetails;
