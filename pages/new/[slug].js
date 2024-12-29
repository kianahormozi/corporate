import React from 'react';
import { useRouter } from 'next/router';
import { Container , Row , Col } from 'react-bootstrap';
import Image from 'next/image';
import { getPostBySlug, posts } from '@/components/blog/Content'; // ایمپورت از کامپوننت صحیح
import dynamic from 'next/dynamic';
const AppContent = dynamic ( import ('@/components/content'));
import BlogSearchBox from '/components/blog/SearchBox'
const BreadcrumbComponent = dynamic ( import ( '@/components/breadCrumb'));
import FeaturedCases from '/components/Services/featuredCases'
import ServicesGallery from '/components/Services/Gallery'
import ServicesSlider from '/components/Services/Slider'
import Comment from '@/components/blog/Comment';

const NewsPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
      return <div>در حال بارگذاری...</div>;
  }
  
  return (
      <>
      <AppContent headerImage='/images/services.jpg'>
          <BreadcrumbComponent />
          <div className='position-relative'>
                  <Container className='px-0 py-4'>
                  <Row className='content'>
                      <Col lg={9} md={12} sm={12} xs={12} className='d-flex ps-4 flex-column'>
                      <h4>
                         
                      </h4>
                      <p className='text-font text-line-height pt-4 pb-2'>
                          
                      </p>
                      <Image
                      src={post.blogImg}
                      alt={post.blogTitle}
                      width='300'
                      height='400'
                      className='pt-4 w-100 ' />
                      
                      {/* notice */}
                      <p className='slug-notice mt-4'>
                          {post.blogNotice}
                      </p>
                      <Col>
                      <Comment />
                      </Col>

                      </Col>

                       {/*سایدبار*/ }

                      <Col lg={3} className='pe-4 h-100 blog-display'>
                      <BlogSearchBox />
                      <div>
                        <h6 className='pt-3 fw-bold'>
                          دسته بندی
                        </h6>
                        <FeaturedCases />
                      </div>
                      <ServicesGallery />
                      <ServicesSlider />
                      <FeaturedCases />
                      </Col>
                  </Row>
                  </Container>
                  <div className="shadow-line"></div>
              </div>
      </AppContent>
      </>
  );
};
export async function getStaticPaths() {
  const paths = posts.map(post => ({
      params: { slug: post.blogslug },
  }));
  return {
      paths,
      fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
      return {
          notFound: true,
      };
  }
  return {
      props: { post },
      revalidate: 60,
  };
}
export default NewsPost;
