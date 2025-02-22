import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomCard from '../Card/Card';
import styles from './Section.module.css';

const Section = ({ title, apiEndpoint, isCollapsed, toggleView }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint, {
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.data && Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error(`Error fetching data from ${apiEndpoint}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  const displayedItems = isCollapsed ? items.slice(0, 4) : items;

  let type;
  if (title.toLowerCase().includes('top albums')) {
    type = 'top-albums';
  } else if (title.toLowerCase().includes('new albums')) {
    type = 'new-albums';
  } else if (title.toLowerCase().includes('songs')) {
    type = 'songs';
  } else if (title.toLowerCase().includes('genres')) {
    type = 'genres';
  } else {
    console.error('Invalid title for determining type:', title);
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeader}>{title}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {displayedItems.map((item, index) => (
            <CustomCard key={index} item={item} type={type} />
          ))}
        </div>
      )}
      <button onClick={toggleView} className={styles.toggleButton}>
        {isCollapsed ? 'Show All' : 'Collapse'}
      </button>
    </div>
  );
};

export default Section;
