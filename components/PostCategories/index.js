import React from 'react';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const CategoryItems = dynamic ( import ('@/components/PostCategories/categoryItems'));
const PostCategories = () => {
  return (
    <div className='position-relative '> 
    <Container className='pb-5'>
      <h3 className="text-center fw-bold mt-5 mb-4">
      تجربه‌های ما هویت ما را شکل می‌دهند
      </h3>
      <p className='text-center'>
      در طول بیش از یک دهه، از یک شرکت محلی به یکی از رهبران جهانی در ارائه راهکارهای فناورانه تبدیل شده‌ایم
      </p>
      <CategoryItems /> 
    </Container>
     <div className="shadow-line"></div> 
    </div>
  );
};
export default PostCategories;
