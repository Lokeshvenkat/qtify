import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tabs, Tab } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import styles from './SongsSection.module.css';

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get('https://qtify-backend-labs.crio.do/songs')
      .then((response) => {
        console.log('Songs API Response:', response.data); 
        if (Array.isArray(response.data)) {
          setSongs(response.data);
        } else {
          console.error('Songs API returned unexpected format:', response.data);
        }
      })
      .catch((error) => console.error('Error fetching songs:', error))
      .finally(() => setLoading(false)); 

    axios
      .get('https://qtify-backend-labs.crio.do/genres')
      .then((response) => {
        console.log('Genres API Response:', response.data); 
        if (Array.isArray(response.data.data)) {
          setGenres(response.data.data);
        } else {
          console.error('Genres API returned unexpected format:', response.data);
        }
      })
      .catch((error) => console.error('Error fetching genres:', error));
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs = selectedGenre === 'All' ? songs : songs.filter(song => song.genre === selectedGenre);

  console.log('Filtered Songs:', filteredSongs.map(song => song.title)); 
  if (loading) {
    return <p data-testid="loading-text">Loading songs...</p>;
  }

  return (
    <div className={styles.songsSection} data-testid="songs-section">
      <h2>Songs</h2>
      <Tabs
        value={selectedGenre}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        className={styles.tabs}
        data-testid="genre-tabs"
      >
        <Tab value="All" label="All" />
        {Array.isArray(genres) && genres.map((genre) => (
          <Tab key={genre.key} value={genre.key} label={genre.label} data-testid={`tab-${genre.key}`} />
        ))}
      </Tabs>
      
      {filteredSongs.length > 0 ? (
        <Carousel items={filteredSongs} type="song" />
      ) : (
        <p data-testid="no-songs-text">No songs available</p>
      )}
    </div>
  );
};

export default SongsSection;
