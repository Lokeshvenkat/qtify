import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
import styles from './SongsSection.module.css';
import { Tabs, Tab } from '@mui/material';

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    axios
      .get('https://qtify-backend-labs.crio.do/songs')
      .then((response) => {
        if (Array.isArray(response.data)) {
          const uniqueSongs = Array.from(new Map(response.data.map(song => [song.title, song])).values());
          setSongs(uniqueSongs);
        } else {
          console.error('Songs data is not an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching songs data:', error);
      });

    axios
      .get('https://qtify-backend-labs.crio.do/genres')
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setGenres(response.data.data);
        } else {
          console.error('Genres data is not an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching genres data:', error);
      });
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs = selectedGenre === 'All' ? songs : songs.filter(song => song.genre === selectedGenre);

  return (
    <div className={styles.songsSection}>
      <h2>Songs</h2>
      <Tabs
        value={selectedGenre}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        className={styles.tabs}
      >
        <Tab value="All" label="All" />
        {Array.isArray(genres) && genres.map((genre) => (
          <Tab key={genre.key} value={genre.key} label={genre.label} />
        ))}
      </Tabs>
      <Carousel items={filteredSongs} type="song" />
    </div>
  );
};

export default SongsSection;
