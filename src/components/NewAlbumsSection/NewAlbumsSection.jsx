import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../Section/Section';

const NewAlbumsSection = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [isTopAlbumsCollapsed, setIsTopAlbumsCollapsed] = useState(true);
  const [isNewAlbumsCollapsed, setIsNewAlbumsCollapsed] = useState(true);

  useEffect(() => {
    console.log('Fetching albums data...');

    const fetchData = async () => {
      try {
        const [topAlbumsResponse, newAlbumsResponse] = await axios.all([
          axios.get('https://qtify-backend-labs.crio.do/albums/top'),
          axios.get('https://qtify-backend-labs.crio.do/albums/new'),
        ]);

        const uniqueTopAlbums = Array.from(new Map(topAlbumsResponse.data.map(album => [album.title, album])).values());
        const uniqueNewAlbums = Array.from(new Map(newAlbumsResponse.data.map(album => [album.title, album])).values());

        console.log('Fetched top albums:', uniqueTopAlbums);
        console.log('Fetched new albums:', uniqueNewAlbums);

        setTopAlbums(uniqueTopAlbums);
        setNewAlbums(uniqueNewAlbums);
      } catch (error) {
        console.error('Error fetching albums data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleTopAlbumsView = () => {
    setIsTopAlbumsCollapsed(!isTopAlbumsCollapsed);
  };

  const toggleNewAlbumsView = () => {
    setIsNewAlbumsCollapsed(!isNewAlbumsCollapsed);
  };

  console.log('Rendering NewAlbumsSection');

  return (
    <div>
      <Section
        title="New Albums"
        items={newAlbums}
        isCollapsed={isNewAlbumsCollapsed}
        toggleView={toggleNewAlbumsView}
        type="new-albums"
      />
    </div>
  );
};

export default NewAlbumsSection;
