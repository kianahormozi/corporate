import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Map from './map';
import OfficeDetails from './officeDetails';

const OfficeMap = () => {
    return (
        <Container fluid className="px-0 h-100">
            <Row className="h-100 position-relative"> 
                <OfficeDetails />
                <Map />
            </Row> 
        </Container>
    )
  }
  
  export default OfficeMap;