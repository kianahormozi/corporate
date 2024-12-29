import React from 'react';
import { useRouter } from 'next/router';
import { Container , Row , Col } from 'react-bootstrap';
import Image from 'next/image';
import { getDataBySlug , Data } from '@/components/Services/Data'; // ایمپورت از کامپوننت صحیح
import dynamic from 'next/dynamic';
const AppContent = dynamic ( import ('@/components/content'));
import ServicesGallery from '/components/Services/Gallery'
import ServicesSlider from '/components/Services/Slider'
import FeaturedCases from '/components/Services/featuredCases'
import BlogSearchBox from '/components/blog/blogSearchBox'
import ServicesBar from '@/components/Services/Bar';
import ServicesPie from '@/components/Services/Pie';
import FaqSection from '@/components/FrequentlyQuestions/faqSection';
const BreadcrumbComponent = dynamic ( import ( '@/components/breadCrumb'));

const ServicesPost = ({servicedata}) => {
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
                            {servicedata.dataTitle}
                        </h4>
                        <p className='text-font text-line-height pt-4 pb-2'>
                            {servicedata.dataText}
                        </p>
                        <Image
                        src={servicedata.dataImg}
                        alt={servicedata.dataTitle}
                        width='300'
                        height='400'
                        className='pt-4 w-100 ' />
                        
                        {/* notice */}
                        <p className='slug-notice mt-4'>
                            {servicedata.dataNotice}
                        </p>

                        {/* detail */}
                        <p className='text-font text-line-height pt-4 pb-2'>
                            {servicedata.dataDetail}
                        </p>

                        <Row className='pt-5'>
                            <Col lg={6}>
                            <h4 className='pb-4 fw-light'>
                            شبکه ایمنی و ایجاد ثروت
                            </h4>
                            <div>
                                <p className='mb-3 text-font'>
                                    {servicedata.additionalText}
                                </p>
                            </div>
                            <div>
                                <ul>
                                {servicedata.additionalPoints.map((pieItem , index) => (
                                    <li key={index} className='text-font line-height list-style'> 
                                        <span className="ps-2 red-color pie-item-style">●</span> {pieItem}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </Col>
                            <Col lg={6}>
                                <h4 className='pb-4 fw-light'>
                            تحقیق و تحلیل رقبا
                                </h4>
                            <ServicesPie data={servicedata.dataslug} />
                            </Col>
                        </Row>
                        <Row className='py-5'>
                            <FaqSection questions={servicedata.servicequestions} showTitle={false} />
                        </Row>
                        <Row className='pt-5'>
                            <Col lg={6}>
                            <h4 className='pb-4 fw-light'>
                            {servicedata.dataSubTitle}
                            </h4>
                            <p className='text-font text-line-height pt-4 pb-2'> {servicedata.dataAdditionalText1} </p>
                            <p className='text-font text-line-height pt-4 pb-2'> {servicedata.dataAdditionalText2} </p>
                            </Col>
                            <Col lg={6}>
                                <h4 className='pb-4 fw-light'>
                            تحقیق و تحلیل رقبا
                                </h4>
                            <ServicesBar data={servicedata.dataslug} />
                            </Col>
                        </Row>
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
    const paths = Data.map(servicedata => ({
        params: { slug: servicedata.dataslug },
    }));
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const servicedata = await getDataBySlug(params.slug);
    if (!servicedata) {
        return {
            notFound: true,
        };
    }
    return {
        props: { servicedata },
        revalidate: 60,
    };
}

export default ServicesPost;