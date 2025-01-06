import React from 'react'
import { Card, CardBody, CardText, Col, Container, Row } from 'react-bootstrap';

const excellenceItems = [
    
    {
        icon : "bi-graph-up" , 
        title: "ویژگی های ما" ,
        text : "ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم"
    },
    {
        icon : "bi-graph-up" , 
        title: "ویژگی های ما" ,
        text : "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند"
    },
    {
        icon : "bi-graph-up" , 
        title: "ویژگی های ما" ,
        text : "ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند."    
    }
]
const Excellence = () => {
  return (
    <Container className='py-4 '>
      <Row className='d-flex py-content excellence-display pb-4 sm-padding'>
        <Col className=''>
            <Col className='pb-lg-5 sm-title-padding'>
            <h5>چرا ما</h5>
            </Col>
            <Card className='border-0 '>
                <CardBody className='p-0 w-lg-90'>
                    <CardText className='text-font pb-2'>
                    ما باور داریم که برجسته‌ایم؛ نه به این دلیل که ادعا می‌کنیم، بلکه چون برای آن سخت تلاش می‌کنیم. ما متعهد، متمرکز و پایبند به هدف هستیم. باور داریم که هر فرد می‌تواند به بهترین خود دست یابد و با فرهنگی مشترک و یکپارچه، بر هر چالشی غلبه کند.
                    </CardText>
                    <CardText className='text-font pb-2'>
                    لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است
                    </CardText>
                    <CardText className='text-font pb-2'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است کی از مهم‌ترین رویدادهای هنری سال
                    </CardText>
                </CardBody> 
            </Card>
        </Col>
        <Col className='padding-top-md'>
            <Col className='pb-5 '>
            <h5>ویژگی های ما</h5>
            </Col>
            {excellenceItems.map ((items,index) => (
                    <div key={index} className='d-flex flex-row gap-5 pb-4 '>
                        <Col lg={3} className='w-auto'>
                            <i className={`bi ${items.icon} red-color icon-size`}></i>
                        </Col>
                        <Col lg={9} className='d-flex flex-column'>
                            <Col>
                                <h6 className='text-bold pb-2'> {items.title} </h6>
                                <p className='text-font sm-font-size'>
                                       {items.text}
                                </p>
                            </Col>
                        </Col>
                    </div>
            ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Excellence;
