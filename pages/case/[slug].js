import React from 'react';
import { useRouter } from 'next/router';
import { Container , Row , Col } from 'react-bootstrap';
import Image from 'next/image';
import { getItemsBySlug ,  caseItems } from '@/components/PostCategories/categoryItems'; // ایمپورت از کامپوننت صحیح
import dynamic from 'next/dynamic';
const AppContent = dynamic ( import ('@/components/content'));
import BlogSearchBox from '/components/blog/SearchBox'
const BreadcrumbComponent = dynamic ( import ( '@/components/breadCrumb'));
import FeaturedCases from '/components/Services/featuredCases'
import ServicesGallery from '/components/Services/Gallery'
import ServicesSlider from '/components/Services/Slider'
import PostCategoriesDetails from '@/components/PostCategories/details';
import PostCategoriesInformation from '@/components/PostCategories/information'; 


const  CasePost= ({ casedata }) => {
  const router = useRouter();

  if (router.isFallback) {
      return <div>در حال بارگذاری...</div>;
  }
  
  return (
      <AppContent headerImage='/images/services.jpg'>
          <BreadcrumbComponent />
          <div className='position-relative'>
                  <Container className='px-0 py-4'>
                  <Row className='content'>
                      <Col lg={9} md={12} sm={12} xs={12} className='d-flex sm-details-padding flex-column '>
                          <Image
                          src={casedata.image}
                          alt={casedata.title}
                          width='300'
                          height='450'
                          className='w-100 h-auto ' /> 
                          {/* details */}
                          <PostCategoriesDetails 
                          title={casedata.title} 
                          detailscontext={caseItems[0].description} 
                          image={casedata.image}
                          />

                          <PostCategoriesInformation /> 
                        </Col>

                       {/* sidebar */}

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
  );
};
export async function getStaticPaths() {
    const paths = caseItems.map(casedata => ({
        params: { slug: casedata.caseSlug },
    }));
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) { 
    const casedata = await getItemsBySlug(params.slug);
    if (!casedata) {
        return {
            notFound: true,
        };
    }
    return {
        props: { casedata },
        revalidate: 60,
    };
}

export default CasePost;