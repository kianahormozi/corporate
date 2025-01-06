import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PostInfo = ({ post, comments }) => {
  const commentCountText = `نظرات (${comments?.length || 0})`;

  return (
    <Container fluid>
      <Row className="align-items-center">
        {/* Single Post Metadata */}
        <Col lg={12} className="d-flex flex-row info-gap sm-items ">
          {/* Date Section */}
          <Col lg={2} className="text-center date-info">
            <div>
              <div className="day-info">{post.blogDay}</div>
              <div className="month-info">{post.blogMonth}</div>
            </div>
          </Col>

          {/* Post Metadata */}
          <Col lg={10} className='sm-width'>
            <Row className="align-items-center justify-content-between border-top border-bottom py-4 sm-x-margin">
              <Col lg={8} md={8} sm={6} className="d-flex justify-content-start text-font sm-x-padding">
                <div className="d-flex sm-column-display info-gap sm-card-padding ">
                  <span className="text-muted me-lg-3 primary-color">
                    توسط: <span className="text-color">{post.blogWritter}</span>
                  </span>
                  <span className="text-muted ms-lg-3 primary-color">
                    دسته بندی: <span className="text-color">{post.blogCategory}</span>
                  </span>
                </div>
              </Col>
              <Col lg={2} md={4} sm={6} className="d-flex comment-display text-font info-gap sm-y-padding">
                <Link href="#comments-section">
                  <span className="text-muted">
                    <i className="bi bi-chat-dots me-1 comment-icon"></i> {commentCountText}
                  </span>
                </Link>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default PostInfo;
