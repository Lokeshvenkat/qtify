import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

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
    <Box sx={{ padding: '20px' }}>
      {/* Top Albums Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">Top Albums</Typography>
        <Button variant="contained" sx={{ backgroundColor: '#000', color: '#fff', '&:hover': { backgroundColor: '#222' } }}>
          Show All
        </Button>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <IconButton className="prevTop" sx={navButtonStyle}>
          <ArrowBack />
        </IconButton>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{ prevEl: '.prevTop', nextEl: '.nextTop' }}
        >
          {topAlbums.map((album) => (
            <SwiperSlide key={album.id}>
              <Box sx={albumCardStyle}>
                <img src={album.image} alt={album.title} style={imageStyle} />
                <Typography variant="subtitle1" sx={{ mt: 1, textAlign: 'center' }}>{album.title}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton className="nextTop" sx={navButtonStyle}>
          <ArrowForward />
        </IconButton>
      </Box>

      {/* New Albums Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">New Albums</Typography>
        <Button variant="contained" sx={{ backgroundColor: '#000', color: '#fff', '&:hover': { backgroundColor: '#222' } }}>
          Show All
        </Button>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <IconButton className="prevNew" sx={navButtonStyle}>
          <ArrowBack />
        </IconButton>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{ prevEl: '.prevNew', nextEl: '.nextNew' }}
        >
          {newAlbums.map((album) => (
            <SwiperSlide key={album.id}>
              <Box sx={albumCardStyle}>
                <img src={album.image} alt={album.title} style={imageStyle} />
                <Typography variant="subtitle1" sx={{ mt: 1, textAlign: 'center' }}>{album.title}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton className="nextNew" sx={navButtonStyle}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NewAlbumsSection;
