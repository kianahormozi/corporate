import React from 'react';
import Image from 'next/image';

const ImageSection = () => {
  return (
    <div className="position-relative">
      <Image
        src="/images/bnr.jpg"
        alt="توضیحات تصویر"
        layout="responsive"
        width={60}
        height={40}
        className="faq-image"
      />
      <div className="overlay-content position-absolute top-48 start-50 translate-middle w-75 text-center">
        <i className="bi bi-graph-up-arrow red-color faq-bnr"></i>
        <h4 className="mt-3 mb-4">عملکرد برتر</h4>
        <p className='text-font text-line-height '>ما با بهبود مستمر فرآیندها و ساختار هزینه‌های خود، بهترین ارزش را به مشتریان ارائه می‌دهیم.</p>
      </div>
    </div>
  );
};

export default ImageSection;
