import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { caseItems } from './categoryItems';

const PostCategoriesInformation = () => {
  // انتخاب پروژه
  const project = caseItems[0];

  // کامپوننت برای نمایش هر آیتم جزئیات
  const DetailItem = ({ label , value }) => (
    <div className=" d-flex align-items-center py-3 information-box mb-3 justify-content-between">
      <div className=" primary-color fw-bold me-3">{label}:</div>
      <div className=" ms-3 fs-6">{value}</div>
    </div>
  );

  return (
    <Container fluid className="py-4">
      <Row>
        <Col lg={12}>
          {/* عنوان پروژه */}
          <h4 className="pb-4 fw-bold">اطلاعات پروژه</h4>

          {/* جزئیات پروژه */}
            <DetailItem label="نام مشتری" value={project.clientName} />
            <DetailItem label="مکان" value={project.location} />
            <DetailItem label="شروع" value={project.started} />
            <DetailItem label="پایان" value={project.completed} />
            <DetailItem label="ارزش پروژه" value={project.value} />
            <DetailItem label="دسته‌بندی" value={project.category} />

        </Col>
      </Row>
    </Container>
  );
};

export default PostCategoriesInformation;
