import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Paraphrase = ({ introItems }) => {  
  return (
    <Container fluid>
      <Row className="pt-3 padding-sm">
        {introItems.map((introitem, index) => (
          <Col key={index} lg={12}>
            <h4 className="pb-4 pt-4 ">
                {introitem.IntroductionTitle}
            </h4>
            {Object.values(introitem.IntroductionText).map((text, idx) => (
                <p key={idx} className="pb-4 text-font text-line-height primary-color">
                    {text}
                </p>
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Paraphrase;
