import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import axios from 'axios';
import styles from './Card.module.css';

const CustomCard = ({ type }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(`Fetching data for type: ${type}`);

    const fetchData = async () => {
      let url;
      switch (type) {
        case 'new-albums':
          url = 'https://qtify-backend-labs.crio.do/albums/new';
          break;
        case 'top-albums':
          url = 'https://qtify-backend-labs.crio.do/albums/top';
          break;
        case 'songs':
          url = 'https://qtify-backend-labs.crio.do/songs';
          break;
        case 'genres':
          url = 'https://qtify-backend-labs.crio.do/genres';
          break;
        default:
          console.error('Invalid type:', type);
          return;
      }

      try {
        const response = await axios.get(url);
        console.log('API Response:', response);

        if (response.data && Array.isArray(response.data)) {
          console.log('Fetched items:', response.data);
          setItems(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error(`Error fetching ${type}:`, error);
      }
    };

    fetchData();
  }, [type]);

  console.log('Current items state:', items);

  return (
    <div>
      {items.map((item, index) => (
        <Card key={index} className={styles.card}>
          <CardMedia
            className={styles.cardMedia}
            image={item.image || ''}
            title={item.title || ''}
          />
          <CardContent className={styles.cardContent}>
            <Chip
              label={type === 'songs' ? `${item.likes || 0} Likes` : `${item.follows || 0} Follows`}
              className={styles.chip}
              size="small"
            />
            <Typography variant="body2" className={styles.title}>
              {item.title || 'No Title'}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CustomCard;
