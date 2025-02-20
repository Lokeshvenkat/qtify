import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomCard from '../Card/Card';

const Section = ({ title, apiEndpoint, isCollapsed, toggleView }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setItems(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${apiEndpoint}:`, error);
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

  console.log('Filtered Items:', displayedItems);

  return (
    <div>
      <h2>{title}</h2>
      <div className="card-list">
        {displayedItems.map((item, index) => (
          <CustomCard key={index} item={item} type={type} />
        ))}
      </div>
      <button onClick={toggleView}>
        {isCollapsed ? 'Show All' : 'Collapse'}
      </button>
    </div>
  );
};

export default Section;
