import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomCard from '../Card/Card';

const Section = ({ title, apiEndpoint, isCollapsed, toggleView }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
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

  // Determine the number of items to display based on isCollapsed state
  const displayedItems = isCollapsed ? items.slice(0, 4) : items;

  return (
    <div>
      <h2>{title}</h2>
      <div className="card-list">
        {displayedItems.map((item, index) => (
          <CustomCard key={index} item={item} type="album" />
        ))}
      </div>
      <button onClick={toggleView}>
        {isCollapsed ? 'Show All' : 'Show Less'}
      </button>
    </div>
  );
};

export default Section;
