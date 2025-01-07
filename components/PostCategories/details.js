import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const PostCategoriesDetails = ({ title, image , detailscontext }) => { 
  return (
      <Container fluid>
        <Row className="align-items-center py-4">
          <h4 className=" mb-4">{title}</h4>
            <Col lg={12} md={12} className='sm-details-display'>
                {/* متن و توضیحات */}
                <Col lg={6} md={6} sm={12} xs={12} className="mb-4 mb-lg-0 ps-3"> 
                    {detailscontext.map((detailstext , index) => (    
                      <p key={index} className="pb-4 text-font text-line-height primary-color">
                        {detailstext}
                      </p>     
                    ))}
                </Col>

                {/* video image with play button*/}
                <Col lg={6} md={6} sm={12} xs={12} className="position-relative">
                    <div className='video-bg'>
                      <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={400}
                        className="img-fluid" 
                      />

                      {/* Play Button */}
                      <Link 
                      href='/'
                      className="details-video-button"
                      aria-label="Play Video"
                      >
                        <i class="bi bi-play-circle-fill"></i>
                      </Link>
                    </div>
                </Col>
            </Col>
        </Row>
      </Container>
  );
};

export default PostCategoriesDetails;
