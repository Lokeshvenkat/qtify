import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomCard from '../Card/Card';
import LeftNavigationButton from '../NavigationButton/LeftNavigationButton';
import RightNavigationButton from '../NavigationButton/RightNavigationButton';
import styles from './Carousel.module.css';
import 'swiper/css';
import 'swiper/css/bundle';

const Carousel = ({ items, type }) => {
  return (
    <div className={styles.carouselContainer}>
      <LeftNavigationButton />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CustomCard item={item} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
      <RightNavigationButton />
    </div>
  );
};

export default Carousel;
