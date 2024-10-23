import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Map from './map';
import OfficeDetails from './officeDetails';

const OfficeMap = () => {
    return (
        <Container fluid className="p-0 mt-4 h-100">
            <Row noGutters className="h-100"> 
                <OfficeDetails />
                <Map />
            </Row> 
        </Container>
    )
  }
  
  export default OfficeMap;