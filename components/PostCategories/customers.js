import React from 'react'
import { Container } from 'react-bootstrap'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const PostCategoriesCustomers = ({}) => {
  return (
    <Container fluid>
      <Swiper
        autoplay={{
            delay:0,
            disableOnInteraction:false,
            pauseOnMouseEnter:true,
        }}
        modules={{autoplay}}
        slidesPerView={1}
        loop
        speed={3000}
       >

      </Swiper>

    </Container>
  )
}

export default PostCategoriesCustomers
