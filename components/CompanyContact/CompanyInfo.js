import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'

const CompanyInfo = () => {
  return (
    <section className=''>
    <Container className='position-relative info-bg'>
    <Row className='py-3'>
        <Col md={4} sm={6} className="w-100 h-100 d-flex flex-column justify-content-center text-white px-5 "> 
        <h5 className='pb-5 pt-4'>شرکت برنامه نویسی</h5> 
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
    </section>
  )
}

export default CompanyInfo
