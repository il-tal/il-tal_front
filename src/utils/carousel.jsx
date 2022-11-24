// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Navigation, Autoplay } from "swiper";

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
