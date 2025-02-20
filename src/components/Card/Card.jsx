import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import styles from './Card.module.css';

const CustomCard = ({ item, type }) => {
  return (
    <Card className={styles.card}>
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
  );
};

export default CustomCard;
