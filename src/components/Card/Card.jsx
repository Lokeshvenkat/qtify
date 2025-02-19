import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import axios from 'axios';
import styles from './Card.module.css';

const CustomCard = ({ type }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/${type}`);
        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error(`Expected an array but received:`, response.data);
          setItems([]);
        }
      } catch (error) {
        console.error(`Error fetching ${type}:`, error);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div>
      {Array.isArray(items) && items.map((item, index) => (
        <Card key={index} className={styles.card}>
          <CardMedia
            className={styles.cardMedia}
            image={item.image || ''}
            title={item.title || ''}
          />
          <CardContent className={styles.cardContent}>
            <Chip
              label={type === 'song' ? `${item.likes || 0} Likes` : `${item.follows || 0} Follows`}
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
