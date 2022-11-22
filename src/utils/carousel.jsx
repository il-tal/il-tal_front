import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export const Carousel = ({ children }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={350}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {children}
      </Swiper>
    </>
  );
};
