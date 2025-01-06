import { Row, Col, Container } from 'react-bootstrap';

const HeaderBoxes = ({ activeSlide, setActiveSlide }) => {
  const boxes = [
    { id: 0, icon: "bi-graph-up", title: 'امور مالی و تجارت', text: 'بورس اوراق بهادار و بانک ها' },
    { id: 1, icon: "bi-megaphone", title: 'تامین مالی جمعی', text: 'کیک استارتر و کمپین های اولیه' },
    { id: 2, icon: "bi-globe", title: 'تجارت جهانی', text: 'اینکوترمزامور مالی و تجارت' },
    { id: 3, icon: "bi-lightbulb", title: 'سرمایه خطرپذیر', text: 'تامین مالی بذر و نوآوری ها' }
  ];

  return (
    <Container className="header-boxes">
      <Row className="justify-content-center">
        {boxes.map((box) => (
          <Col
            key={box.id}
            xs={6}  
            sm={6}
            md={6}  
            lg={3}  
            className={`box ${activeSlide === box.id ? 'active' : ''}`}
            onClick={() => setActiveSlide(box.id)}
          >
            <div>
              <i className={`bi ${box.icon} icon mb-3`}></i>
            </div>
            <div>
              <p className="small-title">{box.title}</p>
              <p className="large-text">{box.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HeaderBoxes;
