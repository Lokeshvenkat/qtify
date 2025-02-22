import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './NewAlbumSection.module.css'; 

const NewAlbumsSection = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topAlbumsResponse, newAlbumsResponse] = await axios.all([
          axios.get('https://qtify-backend-labs.crio.do/albums/top'),
          axios.get('https://qtify-backend-labs.crio.do/albums/new'),
        ]);

        setTopAlbums(topAlbumsResponse.data);
        setNewAlbums(newAlbumsResponse.data);
      } catch (error) {
        console.error('Error fetching albums data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {/* Top Albums Section */}
      <div className={styles.sectionHeader}>
        <h2>Top Albums</h2>
        <button className={styles.showAllBtn}>Show All</button>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        className={styles.albumCarousel}
      >
        {topAlbums.map((album) => (
          <SwiperSlide key={album.id} className={styles.albumSlide}>
            <img src={album.image} alt={album.title} className={styles.albumImage} />
            <p className={styles.albumTitle}>{album.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* New Albums Section */}
      <div className={styles.sectionHeader}>
        <h2>New Albums</h2>
        <button className={styles.showAllBtn}>Show All</button>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        className={styles.albumCarousel}
      >
        {newAlbums.map((album) => (
          <SwiperSlide key={album.id} className={styles.albumSlide}>
            <img src={album.image} alt={album.title} className={styles.albumImage} />
            <p className={styles.albumTitle}>{album.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewAlbumsSection;
