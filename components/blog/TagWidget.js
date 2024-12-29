import Link from 'next/link'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const TagList = [
    { tag: "موفقیت", href: "/" },
    { tag: "برنامه‌ها", href: "/" },
    { tag: "تاریخچه", href: "/" },
    { tag: "مهلت", href: "/" },
    { tag: "خبرنامه", href: "/" },
    { tag: "کسب‌وکار", href: "/" },
    { tag: "جوایز", href: "/" }
]
const BlogTagWidget = () => {
  return (
    <Container className='px-0 pb-4'>
        <h6 className='pb-3 fw-bold'>
            برچسب ها
        </h6>
    <Row >
        {TagList.map((tagItem,index) => (
                <Link href={tagItem.href} key={index} className='tag-link'>
                {tagItem.tag}
                </Link>
        ))}
      </Row>
    </Container>
  )
}

export default BlogTagWidget
