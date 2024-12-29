import React from 'react'
import { Container, Row , Col } from 'react-bootstrap';
import Map from './map';
import OfficeDetails from './officeDetails';

const OfficeMap = () => {
    return (
        <Container fluid className="px-0 h-100">
            <Row className="h-100 position-relative"> 
                <Col 
                lg={4} 
                md={4} 
                sm={12} 
                xs={12}
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