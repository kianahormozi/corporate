import React from 'react'
import { Container, Row , Col } from 'react-bootstrap';
import Map from './map';
import OfficeDetails from './officeDetails';

const OfficeMap = () => {
    return (
        <Container fluid className="px-0 h-100">
            <Row className="h-100 position-relative"> 
                <Col 
                lg={4} // در دسکتاپ یک سوم صفحه
                md={4} // در سایز 768px تا 992px یک سوم صفحه
                sm={12} // در سایز 576px تا 768px کل صفحه
                xs={12} // در سایز کمتر از 576px کل 
                className=''
                >
                    <OfficeDetails />
                </Col>
                <Col 
                 lg={12} 
                 md={12} 
                 sm={12} 
                 xs={12} 
                 className=''>
                    <Map />
                </Col>
            </Row> 
        </Container>
    )
  }
  
  export default OfficeMap; 