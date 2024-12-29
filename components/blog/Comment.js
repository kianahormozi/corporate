import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export const Comments = [
  {
    user:'کیانا',
    commentText:'معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.',
    commentDate:' May 10, 2017',
    commentHour:'6:14 pm',
    userImg:'/images/user.jpg',
  },
  {
    user:'گلبرگ',
    commentText:'معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.',
    commentDate:' May 10, 2017',
    commentHour:'1:14 pm',
    userImg:'/images/user.jpg',
  },
  {
    user:'هومن',
    commentText:'معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.',
    commentDate:' May 10, 2017',
    commentHour:'8:14 pm',
    userImg:'/images/user.jpg',
  },
  {
    user:'عرفان',
    commentText:'با برنامه‌ریزی استراتژیک، شما می‌توانید مسیر رشد مالی و حرفه‌ای خود را تعیین کنید و از فرصت‌های سرمایه‌گذاری به بهترین شکل ممکن استفاده کنید.',
    commentDate:' May 10, 2017',
    commentHour:'9:14 pm',
    userImg:'/images/user.jpg',
  },
  {
    user:'پارسا',
    commentText:'با برنامه‌ریزی استراتژیک، شما می‌توانید مسیر رشد مالی و حرفه‌ای خود را تعیین کنید و از فرصت‌های سرمایه‌گذاری به بهترین شکل ممکن استفاده کنید.',
    commentDate:' May 10, 2017',
    commentHour:'11:14 pm',
    userImg:'/images/user.jpg',
  },
  {
    user:'درسا',
    commentText:'اژانو به عنوان یکی از فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت امن و سریع، ۵ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر، اعتماد کاربران گرامی را جلب نماید.',
    commentDate:' May 10, 2017',
    commentHour:'2:14 pm',
    userImg:'/images/user.jpg',
  },
]
const Comment = () => {
  return (
    <Container fluid>
      <Row>
        <h4  className='fw-bold py-5'>
          نظرات 
        </h4>

        {Comments.map((commentItem , index) => (
        <Col lg={12} md={12} sm={12} xs={12} key={index} className=''>
          <Card className='border-0'>
            <Row>
              <Col lg={2}>
                <Image
                src={commentItem.userImg}
                alt={commentItem.user}
                width='90'
                height='90'
                className='rounded-circle' />
              </Col>
              <Col lg={10}>
              <Row className='d-flex flex-row'>
                <Col lg={12} className='d-flex'>
                    <Col lg={4}>
                    <Link href='/' className='user-name'>
                      {commentItem.user}
                    </Link>
                    </Col>
                    <Col lg={8} className='d-flex flex-row justify-content-end'>
                      <Link href='/'><p>{commentItem.commentDate} at {commentItem.commentHour}</p></Link>
                      /
                      <Link href='/'><p>پاسخ به کامنت</p></Link>
                    </Col>
                </Col>
                <Col lg={12}>
                    <p>
                      {commentItem.commentText}
                    </p>
                </Col>
              </Row>
              </Col>
            </Row>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Comment
