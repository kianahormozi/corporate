import React from 'react';
import { Col } from 'react-bootstrap';

const Map = () => {
    return (
        <Col
            lg={12} // در سایز دسکتاپ دو سوم صفحه
            md={12} // در سایز 768px تا 992px دو سوم صفحه
            sm={12} // در سایز 576px تا 768px کل صفحه
            xs={12} // در سایز کمتر از 576px کل صفحه
            className="p-0 map-height " // ترتیب نمایش فقط در موبایل
        >
            <iframe
                title="map"
                className="w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840290722709!2d144.95373531531673!3d-37.81627977975137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1a9%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632827444782!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </Col>
    );
};

export default Map;
