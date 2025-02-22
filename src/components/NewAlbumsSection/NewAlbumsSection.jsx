
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Typography, Button, IconButton } from '@mui/material';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    <div style={{ padding: '20px', color: 'white' }}>
      {/* Top Albums Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Typography variant="h6">Top Albums</Typography>
        <Button variant="contained" style={{ backgroundColor: 'black', color: '#34C94B' }}>Show all</Button>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={'auto'}
        spaceBetween={20}
        navigation={{
          nextEl: '.nextTopAlbums',
          prevEl: '.prevTopAlbums',
        }}
      >
        {topAlbums.map((album) => (
          <SwiperSlide key={album.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={album.image} alt={album.title} style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
            <Typography variant="body2" style={{ textAlign: 'center', marginTop: '5px' }}>{album.title}</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton className="prevTopAlbums" style={{ position: 'absolute', top: '50%', left: '-20px', backgroundColor: '#34C94B', color: 'white' }}>
        <FaChevronLeft />
      </IconButton>
      <IconButton className="nextTopAlbums" style={{ position: 'absolute', top: '50%', right: '-20px', backgroundColor: '#34C94B', color: 'white' }}>
        <FaChevronRight />
      </IconButton>

      {/* New Albums Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <Typography variant="h6">New Albums</Typography>
        <Button variant="contained" style={{ backgroundColor: 'black', color: '#34C94B' }}>Show all</Button>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={'auto'}
        spaceBetween={20}
        navigation={{
          nextEl: '.nextNewAlbums',
          prevEl: '.prevNewAlbums',
        }}
      >
        {newAlbums.map((album) => (
          <SwiperSlide key={album.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={album.image} alt={album.title} style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
            <Typography variant="body2" style={{ textAlign: 'center', marginTop: '5px' }}>{album.title}</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton className="prevNewAlbums" style={{ position: 'absolute', top: '50%', left: '-20px', backgroundColor: '#34C94B', color: 'white' }}>
        <FaChevronLeft />
      </IconButton>
      <IconButton className="nextNewAlbums" style={{ position: 'absolute', top: '50%', right: '-20px', backgroundColor: '#34C94B', color: 'white' }}>
        <FaChevronRight />
      </IconButton>
    </div>
  );
};

export default NewAlbumsSection;
