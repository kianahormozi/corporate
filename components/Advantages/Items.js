import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const advantage = [
  { icon: 'bi bi-bullseye', title: 'بزرگترین اجرای تئاتر', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است کی از مهم‌ترین رویدادهای هنری سال' },
  { icon: 'bi bi-crosshair2', title: 'نمایشگاهی از هنرهای معاصر', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ' },
  { icon: 'bi bi-boxes', title: 'کنسرت موسیقی کلاسیک', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است '},
  { icon: 'bi bi-exclude', title: 'شب شعر و ادبیات', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است کی از مهم‌ترین رویدادهای هنری سال' },
  { icon: 'bi bi-server', title: 'نمایش فیلم‌های مستقل', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ' },
];

const AdvantagesItems = () => {
  return (
    <section aria-label="Advantage List" className="bg-image py-5">
      <Container> 
        <Row className="justify-content-end pt-5 mb-5">
          <Col lg={8} className="offset-lg-4">
            <div className=" d-flex pb-4 mb-5"> 
              <h5 className="red-color pt-1">ویژگی‌ها</h5>
              <div className="vertical-line mt-3 me-2"></div> 
            </div>
            <div className="advantages-list"> 
              {advantage.map((adv, index) => (
                <article key={index} aria-labelledby={`feature-title-${index}`} className="text-end flex-column mb-5 ps-3 d-flex align-items-start">
                  <span className="d-block pb-3 red-color fs-1">
                    <i className={`${adv.icon} text-danger`}></i>
                  </span>
                  <div>
                    <h5 id={`feature-title-${index}`} className="mb-4 primary-color">{adv.title}</h5>
                    <p className="small text-color">{adv.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AdvantagesItems;