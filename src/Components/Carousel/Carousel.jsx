import React, { useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/navigation";

import CarouselLeftNavigation from "./CarouselLeftNav/CarouselLeftNav";
import CarouselRightNavigation from "./CarouselRightNav/CarouselRightNav";

// This component resets the swiper to the first slide whenever data changes
const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    // On data change, reset to first slide
    if (swiper) {
      swiper.slideTo(0);
    }
  }, [data, swiper]);

  return null; // No visual output
};

// Main carousel component that renders dynamic slides with navigation
function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.Carouselwrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        modules={[Navigation]}
        initialSlide={0}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {/* Swiper state reset handler */}
        <Controls data={data} />

        {/* Custom navigation buttons */}
        <CarouselLeftNavigation />
        <CarouselRightNavigation />

        {/* Dynamically render each slide */}
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
