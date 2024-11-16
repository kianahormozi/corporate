import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row , Pagination } from 'react-bootstrap'

const posts = [
    {
        slug: "focus-on-unity-and-common-goal-1", 
        blogImg: "/images/blog1.jpg",
        blogDay:"03",
        blogMonth:"مهر",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-2", // slug برای دومین پست
        blogImg: "/images/blog2.jpg",
        blogDay:"10",
        blogMonth:"مرداد",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-3", 
        blogImg: "/images/blog3.jpg",
        blogDay:"10",
        blogMonth:"تیر",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-4", 
        blogImg: "/images/blog4.jpg",
        blogDay:"05",
        blogMonth:"مرداد",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-5", 
        blogImg: "/images/blog5.jpg",
        blogDay:"22",
        blogMonth:"آبان",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-6", // slug برای ششمین پست
        blogImg: "/images/blog6.jpg",
        blogDay:"10",
        blogMonth:"فروردین",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-7", 
        blogImg: "/images/blog7.jpg",
        blogDay:"03",
        blogMonth:"دی",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-8", 
        blogImg: "/images/2.jpg",
        blogDay:"03",
        blogMonth:"بهمن",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-9", 
        blogImg: "/images/5.jpg",
        blogDay:"03",
        blogMonth:"خرداد",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-10", 
        blogImg: "/images/9.jpg",
        blogDay:"03",
        blogMonth:"اسفند",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-11", 
        blogImg: "/images/11.jpg",
        blogDay:"03",
        blogMonth:"شهریور",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    },
    {
        slug: "focus-on-unity-and-common-goal-12", 
        blogImg: "/images/3.jpg",
        blogDay:"03",
        blogMonth:"آذر",
        blogTitle:"تمرکز بر اتحاد و هدف مشترک",
        blogCategory:"بلاگ",
        blogText:"ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."
    }
];

const BlogContent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const displayedItems = posts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Container className="px-0">
            <Row>
                {displayedItems.map((blogitem, index) => (
                    <Col key={index} lg={12} className="pb-5">
                        <Card className="d-flex flex-row blog-card">
                            <Link href={`/blog/${blogitem.slug}`}>  
                                <div className='date'>
                                    <span className='day'>{blogitem.blogDay}</span>
                                    <span className='month'>{blogitem.blogMonth}</span>
                                </div>
                                <Image
                                    src={blogitem.blogImg} 
                                    width={350}
                                    height={220}
                                    alt={blogitem.blogTitle}
                                    className="position-relative blog-image"
                                />
                            </Link>
                            <CardBody className='blog-card-body'>
                                <Link href={`/blog/${blogitem.slug}`} className='blog-card-link '>
                                    <CardTitle className="blog-card-title fw-bold">{blogitem.blogTitle}</CardTitle>
                                </Link>
                                <CardText className="text-font red-color ">
                                    <span>دسته بندی: </span>{blogitem.blogCategory}</CardText>
                                <CardText className="text-font pb-4 pt-3">{blogitem.blogText}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="mt-3">
                <Col>
                    <Pagination>
                        {[...Array(totalPages)].map((_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={index + 1 === currentPage}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Item
                            className="page-item next"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <span className="page-link">
                                <i className="bi bi-chevron-double-left"></i>
                            </span>
                        </Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
};

export async function getStaticProps() {
    try {
        const posts = await fetchAllPosts();
        return {
            props: { posts },
        };
    } catch (error) {
        return {
            props: { posts: [] },  
        };
    }
}

export default BlogContent;